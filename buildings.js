// buildings.js

// Set the building layout for all buildings
var alexanderMap = [
  {lat: 47.6492405, lng: -122.3623739},
  {lat: 47.6492432, lng: -122.3621982},
  {lat: 47.6490454, lng: -122.3621888},
  {lat: 47.6490436, lng: -122.3623699}
];
var arnettMap = [
  {lat: 47.6503880, lng: -122.3655380},
  {lat: 47.6503880, lng: -122.3653040},
  {lat: 47.6503491, lng: -122.3653040},
  {lat: 47.6503482, lng: -122.3651125},
  {lat: 47.6501747, lng: -122.3651057},
  {lat: 47.6501747, lng: -122.3652500},
  {lat: 47.6500000, lng: -122.3652500},
  {lat: 47.6500000, lng: -122.3655242}
];
var ashtonMap = [
  {lat: 47.6482521, lng: -122.3655094},
  {lat: 47.6482621, lng: -122.3654678},
  {lat: 47.6482783, lng: -122.3654906},
  {lat: 47.6483018, lng: -122.3654115},
  {lat: 47.6482847, lng: -122.3653927},
  {lat: 47.6483054, lng: -122.3653337},
  {lat: 47.6481862, lng: -122.3652238},
  {lat: 47.6481708, lng: -122.3650306},
  {lat: 47.6483298, lng: -122.3649086},
  {lat: 47.6482928, lng: -122.3647530},
  {lat: 47.6481040, lng: -122.3647383},
  {lat: 47.6480380, lng: -122.3646015},
  {lat: 47.6481031, lng: -122.3644432},
  {lat: 47.6480597, lng: -122.3644097},
  {lat: 47.6480642, lng: -122.3643789},
  {lat: 47.6480091, lng: -122.3643266},
  {lat: 47.6479974, lng: -122.3643641},
  {lat: 47.6479793, lng: -122.3643413},
  {lat: 47.6479151, lng: -122.3644915},
  {lat: 47.6478212, lng: -122.3644862},
  {lat: 47.6478302, lng: -122.3646618},
  {lat: 47.6479287, lng: -122.3646645},
  {lat: 47.6479983, lng: -122.3648281},
  {lat: 47.6479684, lng: -122.3648617},
  {lat: 47.6480019, lng: -122.3650266},
  {lat: 47.6480416, lng: -122.3650306},
  {lat: 47.6480434, lng: -122.3652264},
  {lat: 47.6478853, lng: -122.3653565},
  {lat: 47.6479359, lng: -122.3655429},
  {lat: 47.6481275, lng: -122.3653941}
];
var ashtonLotMap = [
  {lat: 47.6478898, lng: -122.3660298},
  {lat: 47.6479305, lng: -122.3655429},
  {lat: 47.6478582, lng: -122.3654598},
  {lat: 47.6478618, lng: -122.3653190},
  {lat: 47.6474101, lng: -122.3652372},
  {lat: 47.6473613, lng: -122.3659131},
  {lat: 47.6476125, lng: -122.3659600},
  {lat: 47.6476351, lng: -122.3660123}
];
var beegleMap = [
  {lat:47.6487536, lng: -122.3616591},
  {lat:47.6487500, lng: -122.3620909},
  {lat:47.6486108, lng: -122.3620936},
  {lat:47.6486126, lng: -122.3616551}
];
var bertonaMap = [
  {lat:47.6503238, lng: -122.3596488},
  {lat:47.6503229, lng: -122.3595268},
  {lat:47.6503003, lng: -122.3595268},
  {lat:47.6503012, lng: -122.3594825},
  {lat:47.6503256, lng: -122.3594825},
  {lat:47.6503229, lng: -122.3593363},
  {lat:47.6500518, lng: -122.3593363},
  {lat:47.6500509, lng: -122.3596542}
];
var bookstoreMap = [
  {lat:47.6507583, lng: -122.3617101},
  {lat:47.6506951, lng: -122.3614325},
  {lat:47.6505126, lng: -122.3615237},
  {lat:47.6505126, lng: -122.3618335}
];
var crawfordMap = [
  {lat:47.6491872, lng: -122.3615626},
  {lat:47.6491945, lng: -122.3611334},
  {lat:47.6491159, lng: -122.3611213},
  {lat:47.6491122, lng: -122.3611683},
  {lat:47.6489587, lng: -122.3611642},
  {lat:47.6489614, lng: -122.3615626}
];
var cremonaMap = [
  {lat:47.6499570, lng: -122.3596314},
  {lat:47.6499561, lng: -122.3594691},
  {lat:47.6496769, lng: -122.3594624},
  {lat:47.6496760, lng: -122.3596582},
  {lat:47.6497419, lng: -122.3596609},
  {lat:47.6497429, lng: -122.3596193}
];
var demarayMap = [
  {lat: 47.6504132, lng: -122.3646766},
  {lat: 47.6504114, lng: -122.3644258},
  {lat: 47.6503807, lng: -122.3644271},
  {lat: 47.6503834, lng: -122.3640825},
  {lat: 47.6502226, lng: -122.3640610},
  {lat: 47.6502199, lng: -122.3642313},
  {lat: 47.6501648, lng: -122.3642260},
  {lat: 47.6501648, lng: -122.3642904},
  {lat: 47.6502253, lng: -122.3643011},
  {lat: 47.6502244, lng: -122.3644044},
  {lat: 47.6500670, lng: -122.3643990},
  {lat: 47.6500670, lng: -122.3644500},
  {lat: 47.6500374, lng: -122.3644500},
  {lat: 47.6500374, lng: -122.3645590},
  {lat: 47.6500670, lng: -122.3645590},
  {lat: 47.6500670, lng: -122.3646645}
];
var dravusLotMap = [
  {lat: 47.6491963, lng: -122.3633140},
  {lat: 47.6489063, lng: -122.3626341},
  {lat: 47.6488981, lng: -122.3621580},
  {lat: 47.6483253, lng: -122.3621204},
  {lat: 47.6483145, lng: -122.3628969},
  {lat: 47.6486081, lng: -122.3636439},
  {lat: 47.6487924, lng: -122.3635353},
  {lat: 47.6490246, lng: -122.3635393}
];
var eatonMap = [
  {lat:47.6502931, lng: -122.3627749},
  {lat:47.6502994, lng: -122.3620710},
  {lat:47.6501940, lng: -122.3620710},
  {lat:47.6501940, lng: -122.3621650},
  {lat:47.6500855, lng: -122.3621650},
  {lat:47.6500855, lng: -122.3622331},
  {lat:47.6500690, lng: -122.3622331},
  {lat:47.6500690, lng: -122.3622090},
  {lat:47.6500230, lng: -122.3622063},
  {lat:47.6500230, lng: -122.3625268},
  {lat:47.6500058, lng: -122.3625268},
  {lat:47.6500049, lng: -122.3626193},
  {lat:47.6500230, lng: -122.3626193},
  {lat:47.6500230, lng: -122.3627940},//
  {lat:47.6500835, lng: -122.3627940},
  {lat:47.6500835, lng: -122.3628768},
  {lat:47.6501765, lng: -122.3628822},
  {lat:47.6501765, lng: -122.3627655}
];
var emersonMap = [
  {lat:47.6511730, lng: -122.3645841},
  {lat:47.6511269, lng: -122.3643829},
  {lat:47.6510131, lng: -122.3644231},
  {lat:47.6509580, lng: -122.3641750},
  {lat:47.6510592, lng: -122.3641187},
  {lat:47.6508577, lng: -122.3632590},
  {lat:47.6506264, lng: -122.3633234},
  {lat:47.6506734, lng: -122.3635568},
  {lat:47.6507809, lng: -122.3635112},
  {lat:47.6508098, lng: -122.3636533},
  {lat:47.6507150, lng: -122.3637190},
  {lat:47.6507665, lng: -122.3639926},
  {lat:47.6508261, lng: -122.3639497},
  {lat:47.6508487, lng: -122.3640704},
  {lat:47.6507954, lng: -122.3641066},
  {lat:47.6509200, lng: -122.3646699}
];
var ffmMap = [
  {lat:47.6490851, lng: -122.3607472},
  {lat:47.6490842, lng: -122.3603435},
  {lat:47.6490716, lng: -122.3603408},
  {lat:47.6490716, lng: -122.3602282},
  {lat:47.6487969, lng: -122.3602214},
  {lat:47.6487978, lng: -122.3603475},
  {lat:47.6487798, lng: -122.3603462},
  {lat:47.6487834, lng: -122.3604240},
  {lat:47.6487996, lng: -122.3604186},
  {lat:47.6487933, lng: -122.3605004},
  {lat:47.6487689, lng: -122.3605017},
  {lat:47.6487635, lng: -122.3607445},
  {lat:47.6488439, lng: -122.3607525},
  {lat:47.6488448, lng: -122.3607056},
  {lat:47.6489885, lng: -122.3607056},
  {lat:47.6489894, lng: -122.3607418}
];
var fineCenterMap = [
  {lat:47.6494257, lng: -122.3607364},
  {lat:47.6494248, lng: -122.3601879},
  {lat:47.6492062, lng: -122.3601772},
  {lat:47.6492071, lng: -122.3602818},
  {lat:47.6491619, lng: -122.3602818},
  {lat:47.6491583, lng: -122.3607177}
];
var gwinnMap = [
  {lat:47.649885, lng: -122.364566},
  {lat:47.649880, lng: -122.364258},
  {lat:47.649464, lng: -122.364245},
  {lat:47.649464, lng: -122.364189},
  {lat:47.649410, lng: -122.364189},
  {lat:47.649408, lng: -122.364610},
  {lat:47.649695, lng: -122.364610},
  {lat:47.649695, lng: -122.364556}
];
var hillMap = [
  {lat: 47.6497700, lng: -122.3656502},
  {lat: 47.6497940, lng: -122.3655900},
  {lat: 47.6497745, lng: -122.3655698},
  {lat: 47.6497971, lng: -122.3655081},
  {lat: 47.6496787, lng: -122.3653914},
  {lat: 47.6496778, lng: -122.3651057},
  {lat: 47.6495459, lng: -122.3650950},
  {lat: 47.6495468, lng: -122.3653632},
  {lat: 47.6494176, lng: -122.3654330},
  {lat: 47.6493200, lng: -122.3651876},
  {lat: 47.6492008, lng: -122.3652452},
  {lat: 47.6492830, lng: -122.3655081},
  {lat: 47.6492550, lng: -122.3655429},
  {lat: 47.6491552, lng: -122.3654692},
  {lat: 47.6491390, lng: -122.3655131},
  {lat: 47.6491153, lng: -122.3654934},//
  {lat: 47.6491312, lng: -122.3654504},
  {lat: 47.6490499, lng: -122.3653699},
  {lat: 47.6489993, lng: -122.3655000},
  {lat: 47.6490237, lng: -122.3655255},
  {lat: 47.6490165, lng: -122.3655456},
  {lat: 47.6490758, lng: -122.3656006},
  {lat: 47.6490878, lng: -122.3655644},
  {lat: 47.6491131, lng: -122.3655872},
  {lat: 47.6490851, lng: -122.3656677},
  {lat: 47.6491981, lng: -122.3657602},
  {lat: 47.6492026, lng: -122.3660713},
  {lat: 47.6492541, lng: -122.3660687},
  {lat: 47.6492559, lng: -122.3661183},
  {lat: 47.6493363, lng: -122.3661183},
  {lat: 47.6493354, lng: -122.3657776},
  {lat: 47.6496019, lng: -122.3655577},
  {lat: 47.6497320, lng: -122.3656677},
  {lat: 47.6497470, lng: -122.3656315}
];
var hillLot1Map = [
  {lat: 47.6497121, lng:-122.3661518},
  {lat: 47.6497031, lng:-122.3656972},
  {lat: 47.6495224, lng:-122.3656420},
  {lat: 47.6493724, lng:-122.3657627},
  {lat: 47.6493706, lng:-122.3661344},
];
var hillLot2Map = [
  {lat: 47.6491574, lng:-122.3660633},
  {lat: 47.6491529, lng:-122.3657441},
  {lat: 47.6489939, lng:-122.3656958},
  {lat: 47.6489894, lng:-122.3660593}
];
var hrMap = [
  {lat:47.6512453, lng: -122.3621768},
  {lat:47.6514738, lng: -122.3620655},
  {lat:47.6515091, lng: -122.3622197},
  {lat:47.6512787, lng: -122.3623364}
];
var hillfordHouseMap = [
  {lat:47.6487978, lng: -122.3654960},
  {lat:47.6488638, lng: -122.3654987},
  {lat:47.6488656, lng: -122.3654330},
  {lat:47.6489081, lng: -122.3654383},
  {lat:47.6489081, lng: -122.3652600},
  {lat:47.6489343, lng: -122.3652305},
  {lat:47.6488150, lng: -122.3650508},
  {lat:47.6487617, lng: -122.3651339},
  {lat:47.6488033, lng: -122.3652211},
];
var libraryMap = [
  {lat: 47.6493960, lng: -122.3641415},
  {lat: 47.6493960, lng: -122.3637821},
  {lat: 47.6493643, lng: -122.3637781},
  {lat: 47.6493670, lng: -122.3636869},
  {lat: 47.6490354, lng: -122.3636641},
  {lat: 47.6490237, lng: -122.3641589},
  {lat: 47.6491692, lng: -122.3641723},
  {lat: 47.6491701, lng: -122.3640785},
  {lat: 47.6492261, lng: -122.3640838},
  {lat: 47.6492234, lng: -122.3641723},
  {lat: 47.6493598, lng: -122.3641884},
  {lat: 47.6493607, lng: -122.3641415}
];
var mailingMap = [
  {lat:47.6508306, lng: -122.3620279},
  {lat:47.6509652, lng: -122.3619702},
  {lat:47.6509318, lng: -122.3618308},
  {lat:47.6508062, lng: -122.3619005}
];
var marstonWatsonMap = [
  {lat:47.6502885, lng: -122.3633569},
  {lat:47.6502894, lng: -122.3629425},
  {lat:47.6502641, lng: -122.3629399},
  {lat:47.6502623, lng: -122.3628983},
  {lat:47.6502027, lng: -122.3628876},
  {lat:47.6502000, lng: -122.3629238},
  {lat:47.6501801, lng: -122.3629197},
  {lat:47.6501747, lng: -122.3631437},
  {lat:47.6501539, lng: -122.3631786},
  {lat:47.6494294, lng: -122.3631826},
  {lat:47.6494149, lng: -122.3633489}
];
var mckennaMap = [
  {lat:47.6508062, lng: -122.3630928},
  {lat:47.6507077, lng: -122.3626636},
  {lat:47.6505569, lng: -122.3627360},
  {lat:47.6505984, lng: -122.3629157},
  {lat:47.6505578, lng: -122.3629358},
  {lat:47.6506147, lng: -122.3631813}
];
var moyerMap = [
  {lat: 47.6491086, lng: -122.3627132},
  {lat: 47.6491068, lng: -122.3625550},
  {lat: 47.6492405, lng: -122.3625644},
  {lat: 47.6493002, lng: -122.3624825},
  {lat: 47.6493770, lng: -122.3626019},
  {lat: 47.6493173, lng: -122.3626851},
  {lat: 47.6493155, lng: -122.3631625},
  {lat: 47.6492026, lng: -122.3631585},
  {lat: 47.6492053, lng: -122.3627628},
  {lat: 47.6491764, lng: -122.3627146}
];
var musicLotMap = [
  {lat:47.6484654, lng: -122.3614526},
  {lat:47.6483045, lng: -122.3614486},
  {lat:47.6482955, lng: -122.3610757},
  {lat:47.6487057, lng: -122.3610838},
  {lat:47.6487057, lng: -122.3614445},
  {lat:47.6487382, lng: -122.3614499},
  {lat:47.6487301, lng: -122.3610543},
  {lat:47.6488520, lng: -122.3610637},
  {lat:47.6488620, lng: -122.3611374},
  {lat:47.6488873, lng: -122.3611830},
  {lat:47.6489162, lng: -122.3612192},
  {lat:47.6489117, lng: -122.3615934},
  {lat:47.6488078, lng: -122.3615988},
  {lat:47.6488096, lng: -122.3615451},
  {lat:47.6484690, lng: -122.3615330}
];
var mckinleyMap = [
  {lat:47.6491872, lng: -122.3618321},
  {lat:47.6491890, lng: -122.3617141},
  {lat:47.6491791, lng: -122.3617101},
  {lat:47.6491836, lng: -122.3616269},
  {lat:47.6491294, lng: -122.3616189},
  {lat:47.6491294, lng: -122.3616390},
  {lat:47.6488213, lng: -122.3616417},
  {lat:47.6488222, lng: -122.3618549},
  {lat:47.6491276, lng: -122.3618576},
  {lat:47.6491303, lng: -122.3618871},
  {lat:47.6491818, lng: -122.3618965},
  {lat:47.6491791, lng: -122.3618294}
];
var nickersonStudiosMap = [
  {lat:47.6515822, lng: -122.3625362},
  {lat:47.6515082, lng: -122.3622210},
  {lat:47.6512823, lng: -122.3623337},
  {lat:47.6513808, lng: -122.3627789},
  {lat:47.6515344, lng: -122.3627146},
  {lat:47.6515018, lng: -122.3625724}
];
var omhMap = [
  {lat:47.6518090, lng: -122.3620749},
  {lat:47.6515831, lng: -122.3610824},
  {lat:47.6512941, lng: -122.3610798},
  {lat:47.6515542, lng: -122.3621982}
];
var omhLot1Map = [
  {lat:47.6512886, lng: -122.3610610},
  {lat:47.6510104, lng: -122.3611616},
  {lat:47.6512046, lng: -122.3620145},
  {lat:47.6513817, lng: -122.3619112},
  {lat:47.6514088, lng: -122.3620668},
  {lat:47.6515055, lng: -122.3620078}
];
var omhLot2Map = [
  {lat:47.6516934, lng: -122.3609591},
  {lat:47.6516121, lng: -122.3609859},
  {lat:47.6518198, lng: -122.3620534},
  {lat:47.6519102, lng: -122.3619837}
];
var ossMap = [
  {lat:47.6505876, lng: -122.3653083},
  {lat:47.6507728, lng: -122.3652251},
  {lat:47.6507466, lng: -122.3651071},
  {lat:47.6505587, lng: -122.3651943}
];
var petersonMap = [
  {lat:47.6497700, lng: -122.3628180},
  {lat:47.6497700, lng: -122.3625135},
  {lat:47.6497410, lng: -122.3624900},
  {lat:47.6497103, lng: -122.3624900},
  {lat:47.6496805, lng: -122.3625135},
  {lat:47.6496796, lng: -122.3625737},
  {lat:47.6496010, lng: -122.3625737},
  {lat:47.6496010, lng: -122.3625135},
  {lat:47.6495793, lng: -122.3624900},//
  {lat:47.6495435, lng: -122.3624900},//
  {lat:47.6495135, lng: -122.3625135},
  {lat:47.6495135, lng: -122.3628180},
  {lat:47.6496010, lng: -122.3628180},
  {lat:47.6496010, lng: -122.3628820},
  {lat:47.6496182, lng: -122.3629120},
  {lat:47.6496606, lng: -122.3629120},
  {lat:47.6496820, lng: -122.3628820},
  {lat:47.6496820, lng: -122.3628180}
];
var plantMap = [
  {lat:47.6490616, lng: -122.358121},
  {lat:47.6490571, lng: -122.357853},
  {lat:47.6487572, lng: -122.357849},
  {lat:47.6487635, lng: -122.358038},
  {lat:47.6488033, lng: -122.358036},
  {lat:47.6487987, lng: -122.358303},
  {lat:47.6489135, lng: -122.358299},
  {lat:47.6489162, lng: -122.358114}
];
var rbpMap = [
  {lat:47.6514675, lng: -122.3607874},
  {lat:47.6514603, lng: -122.3602697},
  {lat:47.6514043, lng: -122.3600712},
  {lat:47.6513754, lng: -122.3600766},
  {lat:47.6513663, lng: -122.3598808},
  {lat:47.6512326, lng: -122.3598835},
  {lat:47.6512290, lng: -122.3599237},
  {lat:47.6509128, lng: -122.3599291},
  {lat:47.6509255, lng: -122.3607659}
];
var rossLotMap = [
  {lat:47.6502985, lng: -122.3607042},
  {lat:47.6502940, lng: -122.3596555},
  {lat:47.6500311, lng: -122.3596555},
  {lat:47.6500283, lng: -122.3597521},
  {lat:47.6499443, lng: -122.3597521},
  {lat:47.6499515, lng: -122.3596783},
  {lat:47.6496796, lng: -122.3596568},
  {lat:47.6496841, lng: -122.3601517},
  {lat:47.6497293, lng: -122.3601557},
  {lat:47.6497266, lng: -122.3602630},
  {lat:47.6496814, lng: -122.3602630},
  {lat:47.6496742, lng: -122.3606962},
  {lat:47.6498495, lng: -122.3606962},
  {lat:47.6498540, lng: -122.3605366},
  {lat:47.6499732, lng: -122.3605420},
  {lat:47.6499768, lng: -122.3607123}
];
var artMap = [
  {lat:47.6494610, lng: -122.3582084},
  {lat:47.6494619, lng: -122.3578571},
  {lat:47.6491294, lng: -122.3578423},
  {lat:47.6491321, lng: -122.3582098}
];
var subMap = [
  {lat:47.650273, lng: -122.361928},
  {lat:47.6499823, lng: -122.361928},
  {lat:47.6499823, lng: -122.3615263},
  {lat:47.6501033, lng: -122.3615398},
  {lat:47.6501078, lng: -122.3613681},
  {lat:47.650273, lng: -122.3613681}
];
var subwayMap = [
  {lat:47.6499777, lng: -122.3607726},
  {lat:47.6499732, lng: -122.3605688},
  {lat:47.6498576, lng: -122.3605621},
  {lat:47.6498639, lng: -122.3607713}
];

var loopMap = [
  {lat:47.649552, lng: -122.361116}, //right most & start
  {lat:47.649684, lng: -122.361388},
  {lat:47.649713, lng: -122.361455},
  {lat:47.649735, lng: -122.361523},
  {lat:47.649742, lng: -122.361632}, //top most
  {lat:47.649731, lng: -122.361723}, //top of loop path
  {lat:47.649685, lng: -122.361848},
  {lat:47.649620, lng: -122.361907},
  {lat:47.649552, lng: -122.361926}, //left most
  {lat:47.649527, lng: -122.361907},
  {lat:47.649469, lng: -122.361848},
  {lat:47.649418, lng: -122.361723}, //bottom of path
  {lat:47.649405, lng: -122.361632}, //bottom most
  {lat:47.649409, lng: -122.361578},
  {lat:47.649419, lng: -122.361532},
  {lat:47.649456, lng: -122.361392}
];
var wacMap = [
  {lat:47.6503418, lng: -122.3592894},
  {lat:47.6503391, lng: -122.3592170},
  {lat:47.6500573, lng: -122.3585840},
  {lat:47.6500139, lng: -122.3585853},
  {lat:47.6500211, lng: -122.3589447},
  {lat:47.6500681, lng: -122.3589447},
  {lat:47.6500672, lng: -122.3592854}
];
var wallaceMap = [
  {lat:47.6507448, lng: -122.3598942},
  {lat:47.6512417, lng: -122.3598593},
  {lat:47.6513374, lng: -122.3596019},
  {lat:47.6512507, lng: -122.3593336},
  {lat:47.6505659, lng: -122.3577377},
  {lat:47.6504141, lng: -122.3578155},
  {lat:47.6500437, lng: -122.3578262},
  {lat:47.6500383, lng: -122.3579362},
  {lat:47.6505316, lng: -122.3590118}
];
var weterMap = [
    {lat: 47.649941, lng: -122.364057},
    {lat: 47.649945, lng: -122.363760},
    {lat: 47.649688, lng: -122.363751},
    {lat: 47.649688, lng: -122.364055}
];

// Set the description for all buildings
var alexanderDesc = "",
arnettDesc = "",
ashtonDesc = "",
ashtonLotDesc = "",
beegleDesc = "",
bertonaDesc = "",
bookstoreDesc = "",
crawfordDesc = "",
cremonaDesc = "",
demarayDesc = "",
dravusLotDesc = "",
eatonDesc = "",
emersonDesc = "",
ffmDesc = "",
fineCenterDesc = "",
gwinnDesc = "",
hillDesc = "",
hillLot1Desc = "",
hillLot2Desc = "",
hrDesc = "",
hillfordHouseDesc = "",
libraryDesc = "",
mailingDesc = "",
marstonWatsonDesc = "",
mckennaDesc = "",
mckinleyDesc = "",
moyerDesc = "",
musicLotDesc = "",
nickersonStudiosDesc = "",
omhDesc = "",
omhLot1Desc = "",
omhLot2Desc = "",
ossDesc = "",
petersonDesc = "",
plantDesc = "",
rossLotDesc = "",
rbpDesc = "",
artDesc = "",
subDesc = "",
subwayDesc = "",
loopDesc = "",
wacDesc = "",
wallaceDesc = "",
weterDesc = "";

var parkingImgSrc = "/info/buildings/images/parking-generic.jpg";

// Set the image sources for all buildings
var alexanderImgSrc = "/info/buildings/images/alexander.jpg",
arnettImgSrc = "/info/buildings/images/Arnett2-350x300.jpg",
ashtonImgSrc = "/info/buildings/images/ashtonhall.jpg",
ashtonLotImgSrc = parkingImgSrc,
beegleImgSrc = "/info/buildings/images/beegle.jpg",
bertonaImgSrc = "/info/buildings/images/bertona.jpg",
bookstoreImgSrc = "/info/buildings/images/bookstore.jpg",
crawfordImgSrc = "/info/buildings/images/crawford2016.jpg",
cremonaImgSrc = "/info/buildings/images/cremona-classrooms.jpg",
demarayImgSrc = "/info/buildings/images/Demaray.jpg",
dravusLotImgSrc = "/info/buildings/images/dravus-parking-lot1.jpg",
eatonImgSrc = "/info/buildings/images/science.jpg",
emersonImgSrc = "/info/buildings/images/emerson.jpg",
ffmImgSrc = "/info/buildings/images/firstfree.jpg",
fineCenterImgSrc = "/info/buildings/images/firstfree.jpg",
gwinnImgSrc = "/info/buildings/images/Gwinn.jpg",
hillImgSrc = "/info/buildings/images/hillhall.jpg",
hillLot1ImgSrc = parkingImgSrc,
hillLot2ImgSrc = parkingImgSrc,
hrImgSrc = "/info/buildings/images/human-res.jpg",
hillfordHouseImgSrc = "/info/buildings/images/hilford.jpg",
libraryImgSrc = "/info/buildings/images/Library.jpg",
mailingImgSrc = "/info/buildings/images/mailing-and-copying.jpg",
marstonWatsonImgSrc = "/info/buildings/images/marston.jpg",
mckennaImgSrc = "/info/buildings/images/mckenna.jpg",
mckinleyImgSrc = "/info/buildings/images/mckinley.jpg",
moyerImgSrc = "/info/buildings/images/moyer.jpg",
musicLotImgSrc = parkingImgSrc,
nickersonStudiosImgSrc = "/info/buildings/images/nickerson-studios.jpg",
omhImgSrc = "/info/buildings/images/ottomiller.jpg",
omhLot1ImgSrc = parkingImgSrc,
omhLot2ImgSrc = parkingImgSrc,
ossImgSrc = "/info/buildings/images/safetysecurity.jpg",
petersonImgSrc = "/info/buildings/images/peterson.jpg",
plantImgSrc = "/info/buildings/images/facility-building.jpg",
rossLotImgSrc = parkingImgSrc,
rbpImgSrc = "/info/buildings/images/royal-brougham.jpg",
artImgSrc = "/info/buildings/images/art-center.jpg",
subImgSrc = "/info/buildings/images/sub.jpg",
subwayImgSrc = parkingImgSrc,
loopImgSrc = "/info/buildings/images/tiffany-loop.jpg"
wacImgSrc = "/info/buildings/images/walls-advancement.jpg",
wallaceImgSrc = "/info/buildings/images/wallace_field.jpg",
weterImgSrc = "/info/buildings/images/weter.jpg";

// Categories
var a = "a",  d = "d", l = "l", o = "o", p = "p", r = "r";

// Combine the traits of buildings for export.
var bld = [["Alexander Hall",a,alexanderDesc,"alexanderMap",alexanderMap,{lat: 47.649120, lng:  -122.362208}, alexanderImgSrc],
    ["Ames Library",l,libraryDesc,"libraryMap",libraryMap,{lat: 47.649176, lng: -122.363852},libraryImgSrc],
    ["Arnett Hall",r,arnettDesc,"arnettMap",arnettMap,{lat: 47.650182, lng: -122.365239}, arnettImgSrc],
    ["Art Center",a,artDesc,"artMap",artMap,{lat: 47.649266, lng: -122.358002},artImgSrc],
    ["Ashton Hall",r,ashtonDesc,"ashtonMap",ashtonMap,{lat: 47.648102, lng:  -122.364809}, ashtonImgSrc],
    ["Ashton Parking Lot",p,ashtonLotDesc,"ashtonLotMap",ashtonLotMap,{lat: 47.647641, lng:  -122.365472}, ashtonLotImgSrc],
    ["Beegle Hall",a,beegleDesc,"beegleMap",beegleMap,{lat: 47.648668, lng: -122.361816},beegleImgSrc],
    ["Bertona Classrooms",a,bertonaDesc,"bertonaMap",bertonaMap,{lat: 47.650177, lng: -122.359465},bertonaImgSrc],
    ["Bookstore",a,bookstoreDesc,"bookstoreMap",bookstoreMap,{lat: 47.650608, lng: -122.361578},bookstoreImgSrc],
    ["Crawford Music Hall",a,crawfordDesc,"crawfordMap",crawfordMap,{lat: 47.649069, lng: -122.361333},crawfordImgSrc],
    ["Crawford Parking Lot",p,musicLotDesc,"musicLotMap",musicLotMap,{lat: 47.649065, lng: -122.361355},musicLotImgSrc],
    ["Cremona Classrooms",a,cremonaDesc,"cremonaMap",cremonaMap,{lat: 47.649789, lng: -122.359501},cremonaImgSrc],
    ["Demaray Hall",a,demarayDesc,"demarayMap",demarayMap,{lat: 47.650205, lng: -122.364336},demarayImgSrc],
    ["Dravus Parking Lot",p,dravusLotDesc,"dravusLotMap",dravusLotMap,{lat: 47.648638, lng: -122.362924},dravusLotImgSrc],
    ["Eaton Hall",a,eatonDesc,"eatonMap",eatonMap,{lat: 47.650134, lng: -122.362406},eatonImgSrc],
    ["Emerson Hall",r,emersonDesc,"emersonMap",emersonMap,{lat: 47.650861, lng: -122.363944},emersonImgSrc],
    ["First Free Methodist Church",o,ffmDesc,"ffmMap",ffmMap,{lat: 47.648900, lng: -122.360409},ffmImgSrc],
    ["Fine Center",o,fineCenterDesc,"fineCenterMap",fineCenterMap,{lat: 47.649260, lng:  -122.360434},fineCenterImgSrc],
    ["Gwinn Commons",d,gwinnDesc,"gwinnMap",gwinnMap,{lat: 47.649610, lng: -122.364431},gwinnImgSrc],
    ["Hill Hall",r,hillDesc,"hillMap",hillMap,{lat: 47.649405, lng: -122.365470},hillImgSrc],
    ["Hill Lower Parking Lot",p,hillLot1Desc,"hillLot1Map",hillLot1Map,{lat: 47.649536, lng: -122.365865},hillLot1ImgSrc],
    ["Hill Upper Parking Lot",p,hillLot2Desc,"hillLot2Map",hillLot2Map,{lat: 47.649088, lng: -122.365886},hillLot2ImgSrc],
    ["Human Resources",a,hrDesc,"hrMap",hrMap,{lat: 47.651344, lng: -122.362166},hrImgSrc],
    ["Hillford House",o,hillfordHouseDesc,"hillfordHouseMap",hillfordHouseMap,{lat: 47.648854, lng: -122.365213},hillfordHouseImgSrc],
    ["Mailing Services",a,mailingDesc,"mailingMap",mailingMap,{lat: 47.650881, lng: -122.361918},mailingImgSrc],
    ["Marston-Watson Hall",a,marstonWatsonDesc,"marstonWatsonMap",marstonWatsonMap,{lat: 47.649846, lng: -122.363238},marstonWatsonImgSrc],
    ["McKenna Hall",a,mckennaDesc,"mckennaMap",mckennaMap,{lat: 47.650627, lng: -122.362847},mckennaImgSrc],
    ["McKinley Hall",a,mckinleyDesc,"mckinleyMap",mckinleyMap,{lat: 47.648979, lng: -122.361711},mckinleyImgSrc],
    ["Moyer Hall",r,moyerDesc,"moyerMap",moyerMap,{lat: 47.649256, lng: -122.362774},moyerImgSrc],
    ["Nickerson Studios",a,nickersonStudiosDesc,"nickersonStudiosMap",nickersonStudiosMap,{lat: 47.651402, lng: -122.362486},nickersonStudiosImgSrc],
    ["Otto Miller Hall",a,omhDesc,"omhMap",omhMap,{lat: 47.651505, lng: -122.361486},omhImgSrc],
    ["Otto Miller Parking Lot",p,omhLot1Desc,"omhLot1Map",omhLot1Map,{lat: 47.651170, lng: -122.361363},omhLot1ImgSrc],
    ["Otto Miller Back Parking Lot",p,omhLot2Desc,"omhLot2Map",omhLot2Map,{lat: 47.651761, lng: -122.361477},omhLot2ImgSrc],
    ["Safety and Security",a,ossDesc,"ossMap",ossMap,{lat: 47.650654, lng: -122.365176},ossImgSrc],
    ["Peterson Hall",a,petersonDesc,"petersonMap",petersonMap,{lat: 47.649617, lng: -122.362602},petersonImgSrc],
    ["PLANT Services",a,plantDesc,"plantMap",plantMap,{lat: 47.650654, lng: -122.365176},plantImgSrc],
    ["Ross Parking Lot",p,rossLotDesc,"rossLotMap",rossLotMap,{lat: 47.649975, lng: -122.360122},rossLotImgSrc],
    ["Royal Brougham Pavilion",d,rbpDesc,"rbpMap",rbpMap,{lat: 47.651145, lng: -122.360411},rbpImgSrc],
    ["Student Union Building",d,subDesc,"subMap",subMap,{lat: 47.650117, lng: -122.361626},subImgSrc],
    ["Subway",d,subwayDesc,"subwayMap",subwayMap,{lat: 47.649908, lng: -122.360658},subwayImgSrc],
    ["Tiffany Loop",d,loopDesc,"loopMap",loopMap,{lat: 47.649571, lng: -122.361605},loopImgSrc],
    ["Walls Advancement Center",a,wacDesc,"wacMap",wacMap,{lat: 47.650123, lng: -122.358924},wacImgSrc],
    ["Wallace Field",d,wallaceDesc,"wallaceMap",wallaceMap,{lat: 47.650123, lng: -122.358924},wallaceImgSrc],
    ["Weter Memorial Hall",d,weterDesc,"weterMap",weterMap,{lat: 47.649812, lng: -122.363908},weterImgSrc]
];
