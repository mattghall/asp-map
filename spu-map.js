	var map;
  var infoWindow;
	var usermarker;
	var polygons = [];
	var buildingsIndex = [];
	var bounds;
	var directionsDisplay;
	var directionsService;
	var target;
	var centerCampus = {lat: 47.649609, lng: -122.363206};
	var maxPos = {lat: 47.652145, lng: -122.355898};
	var minPos = {lat: 47.646868, lng: -122.367415};
	var isMobile = true;

	$(function() {
		$( ".check" ).change(function() {
			var types = "";
			var boxes = $('.check:checkbox:checked');
			for(box of boxes){
				types+= box.value;
			}
			ClearPolygons();
			AddBuildingsByType(types);
		});
		$('#buildings').on('change', function() {
			toggleNav();
			SetNewTarget(this.value);
		})

		// Open menu
		setTimeout(function(){
			var w = $( window ).width();
			if(w>700){
				isMobile = false;
				var nav = document.getElementById("mySidenav");
				var man = document.getElementById("main");
				var ser = document.getElementById("main");
				nav.style.width = "250px";
				man.style.width = "calc(100% - 250px)";
				man.style.marginLeft = "250px";
				$(".closebtn").hide();
				$("#burger-button").hide();
			}
			else{
				toggleNav();
			}
		}, 1000);

	});

  function SetNewTarget(t){
		var index = buildingsIndex.indexOf(t);
		if(index < 0){
			var type = "ardpol";
			target.setMap(null);
			target = null;
			AddBuildingsByType(type);
			map.setZoom(17);
			map.setCenter(pos);
			return;
		}
		var selected = bld[index];
		var pos = selected[5];
		var name = selected[0];
		SetTarget(pos,name);
		ClearPolygons();
		AddBuildingsByName(name);
		//calcRoute(usermarker.position,pos);
		//map.setCenter(pos);
		//map.setZoom(19);
		if(usermarker != null && usermarker.position != null && target.position != null){
			bounds = new google.maps.LatLngBounds();
			bounds.extend(usermarker.position);
			bounds.extend(target.position)
			map.fitBounds(bounds);
		}
		else{
			map.setCenter(target.position);
		}
	}

  function initMap() {
		var mapStyle = [
	    { featureType: "administrative", elementType: "labels", stylers: [ { visibility: "off" } ] },
			{ featureType: "poi", elementType: "labels", stylers: [ { visibility: "off" } ] },
			{ elementType: 'geometry', stylers: [{color: '#eaeaea'}]},
			{ featureType: 'poi.park', elementType: 'geometry', stylers: [{color: '#7FED8F'}] },
			{ featureType: 'water',    elementType: 'geometry', stylers: [{color: '#bae4ff'}]},
			{ featureType: 'road', elementType: 'geometry', stylers: [{color: '#ffffff'}] },
	    { featureType: 'road', elementType: 'geometry.stroke', stylers: [{color: '#efefef'}] },
	    { featureType: 'road.highway', elementType: 'geometry', stylers: [{color: '#ffc363'}] },
			{ featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{color: '#e8af55'}] },
			{ featureType: 'transit', elementType: 'geometry', stylers: [{color: '#2f3948'}] },
			{ featureType: 'transit.station', elementType: 'labels.text.fill', stylers: [{color: '#d59563'}] },
			{ featureType: 'transit.station.airport', elementType: 'geometry', stylers: [{color: '#E3E3E3'}] },
			{ featureType: 'transit.line', elementType: 'geometry', stylers: [ { color: '#C7C7C7' } ] }
		];

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: centerCampus,
      mapTypeId: 'terrain',
			disableDefaultUI: true,
			mapTypeId: 'mapStyle',
			gestureHandling: 'greedy'
    });
		map.mapTypes.set('mapStyle', new google.maps.StyledMapType(mapStyle, { name: 'Map Style' }));
		google.maps.event.addListener(map, 'click', function() {
	    infoWindow.close();
			CloseNav();
	  });

		if (navigator.geolocation) {
		  navigator.geolocation.watchPosition(function(position) {
				var pos = {
				  lat: position.coords.latitude,
				  lng: position.coords.longitude
				};
				if(OnCampus(pos)){
					var img = "img/location-marker.png";
					if(usermarker == null)						{
						usermarker = new google.maps.Marker({
							position: pos,
							map: map,
							icon: img,
							title: 'You are here'
						});
						map.setZoom(18);
						map.setCenter(pos);
					}
					else {
						usermarker.setPosition(pos);
					}
				}
			});
		}
		var type = "ardpol";
		InitBuildingSelector();
		AddBuildingsByType(type);

		// Initialize Directions
		directionsService = new google.maps.DirectionsService();
		directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap(map);
  }

  /** @this {google.maps.Polygon} */
  function showArrays(event) {
    // Since this polygon has only one path, we can call getPath() to return the
    // MVCArray of LatLngs.
		var name = this.name;
		var building = [];

		for(var i = 0; i < bld.length; i++) {
		   if(bld[i][3]=== name) {
		     building = bld[i];
				 break;
		   }
		}

    var content = BuildInfoWindow(building);

    // Replace the info window's content and position.
    infoWindow.setContent(content);
    infoWindow.setPosition(event.latLng);

    infoWindow.open(map);
		CloseNav();
  }

	function InitBuildingSelector(){
		for(building of bld){
			var option = new Option(building[0], building[3]);
			$('#buildings').append($(option));
		}
	}

	function AddBuildingsByType(type){
			var a = "#0099ff";
			var fade = .2;
			var oa = 1;
			if(type.indexOf("a") < 0){
				oa = fade;
			}
			var r = "#990000";
			var or = 1;
			if(type.indexOf("r") < 0){
				or = fade;
			}
			var d = "#FFCC00";
			var od = 1;
			if(type.indexOf("d") < 0){
				od = fade;
			}
			var o = "#00cc99";
			var oo = 1;
			if(type.indexOf("o") < 0){
				oo = fade;
			}
			var l = "#660066";
			var ol = 1;
			if(type.indexOf("l") < 0){
				ol = fade;
			}
			var p = "#909090";
			var op = 1;
			if(type.indexOf("p") < 0){
				op = fade;
			}

			for(building of bld){
				var opacity = 1;
				var color;
				switch(building[1]){
					case "r":
						color = r;
						opacity = or;
						break;
					case "d":
						color = d;
						opacity = od;
						break;
					case "o":
						color = o;
						opacity = oo;
						break;
					case "p":
						color = p;
						opacity = op;
						break;
					case "l":
						color = l;
						opacity = ol;
						break;
					default:
						color = a;
						opacity = oa;
						break;
				}

				AddBuilding(building,color,opacity);
				//AddMarkers(building);
			}
		}

		function AddBuildingsByName(name){
				var a = "#0099ff";
				var fade = .2;
				var oa = fade;
				var r = "#990000";
				var or = fade;
				var d = "#FFCC00";
				var od = fade;
				var o = "#00cc99";
				var oo = fade;
				var l = "#660066";
				var ol = fade;
				var p = "#909090";
				var op = fade;

				for(building of bld){
					var opacity = 1;
					var color;
					if(building[0] == name){
						switch(building[1]){
							case "r":
								color = r;
								opacity = 1;
								break;
							case "d":
								color = d;
								opacity = 1;
								break;
							case "o":
								color = o;
								opacity = 1;
								break;
							case "p":
								color = p;
								opacity = 1;
								break;
							case "l":
								color = l;
								opacity = 1;
								break;
							default:
								color = a;
								opacity = 1;
								break;
						}
					} else {
						switch(building[1]){
							case "r":
								color = r;
								opacity = or;
								break;
							case "d":
								color = d;
								opacity = od;
								break;
							case "o":
								color = o;
								opacity = oo;
								break;
							case "p":
								color = p;
								opacity = op;
								break;
							case "l":
								color = l;
								opacity = ol;
								break;
							default:
								color = a;
								opacity = oa;
								break;
						}
					}

					AddBuilding(building,color,opacity);
					//AddMarkers(building);
				}
			}

	function AddBuilding(building,color,opacity){
		var strokeOp = 0.9 * opacity;
		var fillOp = 0.35 * opacity;

		var buildingPolygon = new google.maps.Polygon({
			paths: building[4],
			strokeColor: color,
			strokeOpacity: strokeOp,
			strokeWeight: 3,
			fillColor: color,
			fillOpacity: fillOp,
			name:building[3]
		});
		buildingsIndex.push(building[3]);
		polygons.push(buildingPolygon);
		buildingPolygon.setMap(map);

		// Add a listener for the click event.
		buildingPolygon.addListener('click', showArrays);

		infoWindow = new google.maps.InfoWindow;
	}

	function AddMarkers(coords){
		for(pos of coords[4]){
			var s = "lat/lng = " + pos.lat + ", " + pos.lng;
			new google.maps.Marker({
				position: pos,
				map: map,
				title: s
			});
		}
	}

	function newColor()
	{
		var c = '#' + Math.floor(Math.random()*16777215).toString(16);
		return c;
	}


	// Menu codes
	/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
	function toggleNav() {
		if(isMobile){
				var nav = document.getElementById("mySidenav");
				var man = document.getElementById("main");
				if(nav.style.width != "250px"){
					nav.style.width = "250px";
					man.style.marginLeft = "250px";
					map.setOptions({draggable: false, scrollwheel: false, disableDoubleClickZoom: true});
				}
				else{
					nav.style.width = "0";
					man.style.marginLeft = "0";
					map.setOptions({draggable: true,  scrollwheel: true, disableDoubleClickZoom: false});
				}
			}
	}

	function CloseNav(){
		var nav = document.getElementById("mySidenav");
		var man = document.getElementById("main");
		nav.style.width = "0";
		man.style.marginLeft = "0";
	}

	function ClearPolygons(){
		for(polygon of polygons){
			polygon.setMap(null);
		}
	}

	function SetTarget(pos,name){
		if(target == null){
			target = new google.maps.Marker({
				position: pos,
				map: map,
				title: name
			});
			map.setZoom(18);
			map.setCenter(pos);
		}
		else {
			target.setPosition(pos);
		}
	}

	function BuildInfoWindow(building){
		var content = '<div>'+
            '<h2>' + building[0] + '</h2>'+
						'<img src=' + building[6] + '>' +
            '<div>'+
            '<p>' + building[2] + '</p>'+
            '</div>'+
            '</div>';
		return content;
	}


// Directions
function calcRoute(start,end) {
	var request = {
	origin: start,
	destination: end,
	travelMode: 'WALKING'
	};
	directionsService.route(request, function(result, status) {
		if (status == 'OK') {
		  directionsDisplay.setDirections(result);
		}
	});
}

function OnCampus(pos){
	if(pos.lat < minPos.lat || pos.lat > maxPos.lat){
		return false;
	}else if(pos.lng < minPos.lng || pos.lng > maxPos.lng){
		return false;
	}
	return true;
}
