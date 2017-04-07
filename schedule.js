// schedule.js

// General Date Information
var year = 2017, month = 4, thursday = 6, friday = 7;

// Admited Student Preview schedule
// event = [startTime, endTime, Title, locationName, desc]
var parentThursday = [
  [Thurs(14),Thurs(15,30),"Parent Check-in","loopMap","Tiffany Loop and Martin Square"],
  [Thurs(14),Thurs(15),"Campus Tour","loopMap","Tiffany Loop"],
  [Thurs(14),Thurs(15,15),"Meet Your Counselor!","fineCenterMap","First Free Methodist Church, Fine Center"],
  [Thurs(15,30),Thurs(16),"Parent Welcome Session","gwinnMap","Gwinn Commons, Queen Anne Room"],
  [Thurs(16,30),Thurs(17,15),"Parent Panel","gwinnMap","Gwinn Commons, Queen Anne Room"],
  [Thurs(17,15),Thurs(18,15),"Parent Dinner","gwinnMap","Gwinn Commons, Queen Anne Room"]
]

var parentFriday = [
  [Fri(8,30),Fri(9,20),"Next Steps","gwinnMap","Gwinn Commons, Queen Anne Room"]
  ]

var studentThursday = [
  [Thurs(14),Thurs(15,30),"Check-in","gwinnMap","Gwinn Commons, Third Floor"],
  [Thurs(14),Thurs(15),"Campus Tour","loopMap","Tiffany Loop"],
  [Thurs(14),Thurs(15,15),"Meet Your Counselor!","fineCenterMap","First Free Methodist Church, Fine Center"],
  [Thurs(15,30),Thurs(16),"Welcome Session","ffmMap","First Free Methodist Church, Sanctuary"],
  [Thurs(16,30),Thurs(20),"Eat Dinner & Explore Seattle!","fineCenterMap","First Free Methodist Church, Fine Center"],
  [Thurs(16,30),Thurs(20),"Residence Hall Meet and Greet","gwinnMap","Depart from Gwinn Commons, Third Floor"]
]

var studentFriday = [
  [Fri(7,30),Fri(8,30),"Breakfast","gwinnMap","Gwinn Commons, Second Floor"],
  [Fri(8,30),Fri(9,20),"Next Steps","gwinnMap","Gwinn Commons, Queen Anne Room"]
  ]


function Thurs(hour,minutes){
  if(!minutes){
    minutes = 0;
  }
  return new Date(year,month,thursday,hour,minutes);
}
function Fri(hour,minutes){
  if(!minutes){
    minutes = 0;
  }
  return new Date(year,month,friday,hour,minutes);
}

function LoadEvent(e){
  toggleNav();
  SetNewTarget(e);
  var jqStr = "#buildings option[value='" + e + "']";
  $(jqStr).prop('selected', true);
}


function NewEvent(title,range,location){
  var range = TimeRange(event[0],event[1]);
  var resp = "<div class=\"option-box event\" onclick=\"LoadEvent('" + event[3] + "')\"><a href=\"#\"><span class=\"title\">";
  resp += event[2];
  resp +="</span><br /><small>";
  resp += range;
  resp += "</small>&nbsp;|&nbsp;<span class=\"loc\">";
  resp += event[4];
  resp +="</span>"
  resp += "</a></div>";
  return $.parseHTML(resp);
}

function InitSchedule(){
  for(event of studentThursday){
    $("#findDiv").before(NewEvent(event))
  }
}

function LoadParentSchedule(){
  $(".resetbtn").toggle();
  $("#studentTitle").hide();
  $("#thursdayTitle").show();
  for(event of parentThursday){
    $("#fridayTitle").before(NewEvent(event[2],TimeRange(event[0],event[1]),event[3]))
  }
  $("#parentTitle").hide();
  $("#fridayTitle").show();
  for(event of parentFriday){
    $("#endDiv").before(NewEvent(event[2],TimeRange(event[0],event[1]),event[3]))
  }
}

function LoadStudentSchedule(){
  $(".resetbtn").toggle();
  $("#studentTitle").hide();
  $("#thursdayTitle").show();
  for(event of studentThursday){
    $("#fridayTitle").before(NewEvent(event[2],TimeRange(event[0],event[1]),event[3]))
  }
  $("#parentTitle").hide();
  $("#fridayTitle").show();
  for(event of studentFriday){
    $("#endDiv").before(NewEvent(event[2],TimeRange(event[0],event[1]),event[3]))
  }
}

function GetStartTime(date) {
  var d = date;
  var hh = d.getHours();
  var m = d.getMinutes();
  var h = hh;
  if (h >= 12) {
    h = hh - 12;
  }
  if (h == 0) {
    h = 12;
  }
  m = m < 10 ? "0" + m : m;

  var resp = "";
  if(m != "00"){
    resp = h + ":" + m;
  }else{
    resp = h;
  }

  return resp;
}
function GetEndTime(date) {
  var d = date;
  var hh = d.getHours();
  var m = d.getMinutes();
  var dd = "am";
  var h = hh;
  if (h >= 12) {
    h = hh - 12;
    dd = "pm";
  }
  if (h == 0) {
    h = 12;
  }
  m = m < 10 ? "0" + m : m;

  var resp = "";
  if(m != "00"){
    resp = h + ":" + m + dd;
  }else{
    resp = h + dd;
  }

  return resp;
}

function TimeRange(start,end){
  if(!end || end == ""){
    return GetEndTime(start);
  }
  var resp = GetStartTime(start) + "-" + GetEndTime(end);
  return resp;
}

function ResetSchedule(){
  $(".event").remove();
  $(".resetbtn").toggle();
  $("#studentTitle").show();
  $("#thursdayTitle").hide();
  $("#parentTitle").show();
  $("#fridayTitle").hide();
}
