let playButton = document.getElementById('play-stop');
let audio = document.getElementById('audio');
let slider = document.getElementById('slide');
let backButton = document.getElementById('back');
let nextButton = document.getElementById('next');
let img = document.querySelector('img');
let songName = document.getElementById('sura-name');
let contanier = document.getElementById('box');
let currentTimeDisplay = document.getElementById('current-time');

var s001="ٱلْفَاتِحَة";
var s002="ٱلْبَقَرَة";
var s003="آلِ عِمْرَان";
var s004="ٱلنِّسَاء";
var s005="ٱلْمَائِدَة";
var s006="ٱلْأَنْعَام";
var s007="ٱلْأَعْرَاف";
var s008="ٱلْأَنْفَال";
var s009="ٱلتَّوْبَة";
var s010="يُونُس";
var s011="هُود";
var s012="يُوسُف";
var s013="ٱلرَّعْد";
var s014="إِبْرَاهِيم";
var s015="ٱلْحِجْر";
var s016="ٱلنَّحْل";
var s017="اٌلاِسْرٰاء";
var s018="ٱلْكَهْف";
var s019="مَرْيَم";
var s020="طه";
var s021="ٱلْأَنْبِيَاء";
var s022="ٱلْحَجّ";
var s023="ٱلْمُؤْمِنُون";
var s024="ٱلنُّور";
var s025="ٱلْفُرْقَان";
var s026="ٱلشُّعَرَاء";
var s027="ٱلنَّمْل";
var s028="ٱلْقَصَص";
var s029="ٱلْعَنْكَبُوت";
var s030="ٱلرُّوم";
var s031="لُقْمَان";
var s032="ٱلسَّجْدَة";
var s033="ٱلْأَحْزَاب";
var s034="سَبَأ";
var s035="فَاطِر";
var s036="يس";
var s037="ٱلصَّافَّات";
var s038="ص";
var s039="ٱلزُّمَر";
var s040="غَافِر";
var s041="فُصِّلَت";
var s042="ٱلشُّورىٰ";
var s043="ٱلْزُّخْرُف";
var s044="ٱلدُّخَان";
var s045="ٱلْجَاثِيَة";
var s046="ٱلْأَحْقَاف";
var s047="مُحَمَّد";
var s048="ٱلْفَتْح";
var s049="ٱلْحُجُرَات";
var s050="ق";
var s051="ٱلذَّارِيَات";
var s052="ٱلطُّور";
var s053="ٱلنَّجْم";
var s054="ٱلْقَمَر";
var s055="ٱلرَّحْمَٰن";
var s056="ٱلْوَاقِعَة";
var s057="ٱلْحَدِيد";
var s058="ٱلْمُجَادِلَة";
var s059="ٱلْحَشْر";
var s060="ٱلْمُمْتَحَنَة";
var s061="ٱلصَّفّ";
var s062="ٱلْجُمُعَة";
var s063="ٱلْمُنَافِقُون";
var s064="ٱلتَّغَابُن";
var s065="ٱلطَّلَاق";
var s066="ٱلتَّحْرِيم";
var s067="ٱلْمُلْك";
var s068="ٱلْقَلَم";
var s069="ٱلْحَاقَّة";
var s070="ٱلْمَعَارِج";
var s071="نُوح";
var s072="ٱلْجِنّ";
var s073="ٱلْمُزَّمِّل";
var s074="ٱلْمُدَّثِّر";
var s075="ٱلْقِيَامَة";
var s076="ٱلْإِنْسَان";
var s077="ٱلْمُرْسَلَات";
var s078="ٱلنَّبَأ";
var s079="ٱلنَّازِعَات";
var s080="عَبَسَ";
var s081="ٱلتَّكْوِير";
var s082="ٱلْإِنْفِطَار";
var s083="ٱلْمُطَفِّفِين";
var s084="ٱلْإِنْشِقَاق";
var s085="ٱلْبُرُوج";
var s086="ٱلطَّارِق";
var s087="ٱلْأَعْلَىٰ";
var s088="ٱلْغَاشِيَة";
var s089="ٱلْفَجْر";
var s090="ٱلْبَلَد";
var s091="ٱلشَّمْس";
var s092="ٱللَّيْل";
var s093="ٱلضُّحَىٰ";
var s094="ٱلشَّرْح";
var s095="ٱلتِّين";
var s096="ٱلْعَلَق";
var s097="ٱلْقَدْر";
var s098="ٱلْبَيِّنَة";
var s099="ٱلزَّلْزَلَة";
var s100="ٱلْعَادِيَات";
var s101="ٱلْقَارِعَة";
var s102="ٱلتَّكَاثُر";
var s103="ٱلْعَصْر";
var s104="ٱلْهُمَزَة";
var s105="ٱلْفِيل";
var s106="قُرَيْش";
var s107="ٱلْمَاعُون";
var s108="ٱلْكَوْثَر";
var s109="ٱلْكَافِرُون";
var s110="ٱلنَّصْر";
var s111="ٱلْمَسَد";
var s112="ٱلْإِخْلَاص";
var s113="ٱلْفَلَق";
var s114="ٱلنَّاس";











const quran = [
    {
        id: 1,
        name: "سورة"+" "+s001 ,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/001.mp3`
    },
    {
        id: 2,
        name: "سورة"+" "+s002,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/002.mp3`
    },
    {
        id:3,
        name: "سورة"+" "+s003,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/003.mp3`
    },
    {
        id:4,
        name:"سورة"+" "+s004,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/004.mp3`
    },
    {
        id:5,
        name:"سورة"+" "+s005,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/005.mp3`
    },
    {
        id:6,
        name:"سورة"+" "+s006,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/006.mp3`
    },
    {
        id:7,
        name:"سورة"+" "+s007,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/007.mp3`,
    },
    {
        id:8,
        name:"سورة"+" "+s008,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/008.mp3`,
    },
    {
        id:9,
        name:"سورة"+" "+s009,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/009.mp3`,
    },
    {
        id:10,
        name:"سورة"+" "+s010,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/010.mp3`,
    },
    {
        id:11,
        name:"سورة"+" "+s011,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/011.mp3`,
    },
    {
        id:12,
        name:"سورة"+" "+s012,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/012.mp3`,
    },
    {
        id:13,
        name:"سورة"+" "+s013,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/013.mp3`,
    },
    {
        id:14,
        name:"سورة"+" "+s014,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/014.mp3`,
    },
    {
        id:15,
        name:"سورة"+" "+s015,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/015.mp3`,
    },

    {
        id:16,
        name:"سورة"+" "+s016,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/016.mp3`,
    },
    {
        id:17,
        name:"سورة"+" "+s017,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/017.mp3`,
    },
    {
        id:18,
        name:"سورة"+" "+s018,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/018.mp3`,
    },
    {
        id:19,
        name:"سورة"+" "+s019,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/019.mp3`,
    },
    {
        id:20,
        name:"سورة"+" "+s020,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/020.mp3`,
    },
    {
        id:21,
        name:"سورة"+" "+s021,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/021.mp3`,
    },
    {
        id:22,
        name:"سورة"+" "+s022,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/022.mp3`,
    },
    {
        id:23,
        name:"سورة"+" "+s023,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/023.mp3`,
    },
    {
        id:24,
        name:"سورة"+" "+s024,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/024.mp3`,
    },

    {
        id:25,
        name:"سورة"+" "+s025,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/025.mp3`,
    },
    {
        id:26,
        name:"سورة"+" "+s026,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/026.mp3`,
    },
    {
        id:27,
        name:"سورة"+" "+s027,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/027.mp3`,
    },
    {
        id:28,
        name:"سورة"+" "+s028,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/028.mp3`,
    },
    {
        id:29,
        name:"سورة"+" "+s029,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/029.mp3`,
    },
    {
        id:30,
        name:"سورة"+" "+s030,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/030.mp3`,
    },

    {
        id:31,
        name:"سورة"+" "+s031,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/031.mp3`,
    },
    {
        id:32,
        name:"سورة"+" "+s032,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/032.mp3`,
    },
    {
        id:33,
        name:"سورة"+" "+s033,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/033.mp3`,
    },
    {
        id:34,
        name:"سورة"+" "+s034,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/034.mp3`,
    },

    {
        id:35,
        name:"سورة"+" "+s035,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/035.mp3`,
    },
    {
        id:36,
        name:"سورة"+" "+s036,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/036.mp3`,
    },
    {
        id:37,
        name:"سورة"+" "+s037,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/037.mp3`,
    },
    {
        id:38,
        name:"سورة"+" "+s038,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/038.mp3`,
    },
    {
        id:39,
        name:"سورة"+" "+s039,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/039.mp3`,
    },
    {
        id:40,
        name:"سورة"+" "+s040,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/040.mp3`,
    },
    {
        id:41,
        name:"سورة"+" "+s041,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/041.mp3`,
    },
    {
        id:42,
        name:"سورة"+" "+s042,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/042.mp3`,
    },
    {
        id:43,
        name:"سورة"+" "+s043,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/043.mp3`,
    },
    {
        id:44,
        name:"سورة"+" "+s044,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/044.mp3`,
    },
    {
        id:45,
        name:"سورة"+" "+s045,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/045.mp3`,
    },
    {
        id:46,
        name:"سورة"+" "+s046,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/046.mp3`,
    },
    {
        id:47,
        name:"سورة"+" "+s047,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/047.mp3`,
    },
    {
        id:48,
        name:"سورة"+" "+s048,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/048.mp3`,
    },
    {
        id:49,
        name:"سورة"+" "+s049,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/049.mp3`,
    },
    {
        id:50,
        name:"سورة"+" "+s050,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/050.mp3`,
    },
    {
        id:51,
        name:"سورة"+" "+s051,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/051.mp3`,
    },
    {
        id:52,
        name:"سورة"+" "+s052,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/052.mp3`,
    },
    {
        id:53,
        name:"سورة"+" "+s053,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/053.mp3`,
    },
    {
        id:54,
        name:"سورة"+" "+s054,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/054.mp3`,
    },
    {
        id:55,
        name:"سورة"+" "+s055,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/055.mp3`,
    },
    {
        id:56,
        name:"سورة"+" "+s056,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/056.mp3`,
    },
    {
        id:57,
        name:"سورة"+" "+s057,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/057.mp3`,
    },
    {
        id:58,
        name:"سورة"+" "+s058,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/058.mp3`,
    },
    {
        id:59,
        name:"سورة"+" "+s059,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/059.mp3`,
    },
    {
        id:60,
        name:"سورة"+" "+s060,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/060.mp3`,
    },
    {
        id:61,
        name:"سورة"+" "+s061,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/061.mp3`,
    },
    {
        id:62,
        name:"سورة"+" "+s062,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/062.mp3`,
    },
    {
        id:63,
        name:"سورة"+" "+s063,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/063.mp3`,
    },
    {
        id:64,
        name:"سورة"+" "+s064,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/064.mp3`,
    },
    {
        id:65,
        name:"سورة"+" "+s065,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/065.mp3`,
    },
    {
        id:66,
        name:"سورة"+" "+s066,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/066.mp3`,
    },
    {
        id:67,
        name:"سورة"+" "+s067,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/067.mp3`,
    },
    {
        id:68,
        name:"سورة"+" "+s068,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/068.mp3`,
    },
    {
        id:69,
        name:"سورة"+" "+s069,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/069.mp3`,
    },
    {
        id:70,
        name:"سورة"+" "+s070,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/070.mp3`,
    },
    {
        id:71,
        name:"سورة"+" "+s071,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/071.mp3`,
    },
    {
        id:72,
        name:"سورة"+" "+s072,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/072.mp3`,
    },
    {
        id:73,
        name:"سورة"+" "+s073,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/073.mp3`,
    },
    {
        id:74,
        name:"سورة"+" "+s074,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/074.mp3`,
    },
    {
        id:75,
        name:"سورة"+" "+s075,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/075.mp3`,
    },
    {
        id:76,
        name:"سورة"+" "+s076,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/076.mp3`,
    },
    {
        id:77,
        name:"سورة"+" "+s077,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/077.mp3`,
    },
    {
        id:78,
        name:"سورة"+" "+s078,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/078.mp3`,
    },
    {
        id:79,
        name:"سورة"+" "+s079,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/079.mp3`,
    },
    {
        id:80,
        name:"سورة"+" "+s080,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/080.mp3`,
    },
    {
        id:81,
        name:"سورة"+" "+s081,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/081.mp3`,
    },
    {
        id:82,
        name:"سورة"+" "+s082,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/082.mp3`,
    },
    {
        id:83,
        name:"سورة"+" "+s083,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/083.mp3`,
    },
    {
        id:84,
        name:"سورة"+" "+s084,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/084.mp3`,
    },
    {
        id:85,
        name:"سورة"+" "+s060,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/085.mp3`,
    },
    {
        id:86,
        name:"سورة"+" "+s086,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/086.mp3`,
    },
    {
        id:87,
        name:"سورة"+" "+s087,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/087.mp3`,
    },
    {
        id:88,
        name:"سورة"+" "+s088,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/088.mp3`,
    },
    {
        id:89,
        name:"سورة"+" "+s089,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/089.mp3`,
    },
    {
        id:90,
        name:"سورة"+" "+s090,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/090.mp3`,
    },
    {
        id:91,
        name:"سورة"+" "+s091,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/091.mp3`,
    },
    {
        id:92,
        name:"سورة"+" "+s092,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/092.mp3`,
    },
    {
        id:93,
        name:"سورة"+" "+s093,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/093.mp3`,
    },
    {
        id:94,
        name:"سورة"+" "+s094,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/094.mp3`,
    },
    {
        id:95,
        name:"سورة"+" "+s095,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/095.mp3`,
    },
    {
        id:96,
        name:"سورة"+" "+s096,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/096.mp3`,
    },
    {
        id:97,
        name:"سورة"+" "+s097,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/097.mp3`,
    },
    {
        id:98,
        name:"سورة"+" "+s098,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/098.mp3`,
    },
    {
        id:99,
        name:"سورة"+" "+s099,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/099.mp3`,
    },
    {
        id:100,
        name:"سورة"+" "+s100,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/100.mp3`,
    },
    {
        id:101,
        name:"سورة"+" "+s101,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/101.mp3`,
    },
    {
        id:102,
        name:"سورة"+" "+s102,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/102.mp3`,
    },
    {
        id:103,
        name:"سورة"+" "+s103,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/103.mp3`,
    },
    {
        id:104,
        name:"سورة"+" "+s104,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/104.mp3`,
    },
    {
        id:105,
        name:"سورة"+" "+s105,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/105.mp3`,
    },
    {
        id:106,
        name:"سورة"+" "+s106,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/106.mp3`,
    },
    {
        id:107,
        name:"سورة"+" "+s107,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/108.mp3`,
    },
    {
        id:108,
        name:"سورة"+" "+s100,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/108.mp3`,
    },
    {
        id:109,
        name:"سورة"+" "+s109,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/109.mp3`,
    },
    {
        id:110,
        name:"سورة"+" "+s110,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/110.mp3`,
    },
    {
        id:111,
        name:"سورة"+" "+s111,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/111.mp3`,
    },
    {
        id:112,
        name:"سورة"+" "+s112,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/112.mp3`,
    },
    {
        id:113,
        name:"سورة"+" "+s113,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/113.mp3`,
    },
    {
        id:114,
        name:"سورة"+" "+s114,
        imgsrc: `img/download.jpg`,
        audiosrc: `https://server12.mp3quran.net/maher/114.mp3`,
    },

];

let currentTrackIndex = 0;

// Update player UI and play audio
function updatePlayer() {
    let currentTrack = quran[currentTrackIndex];
    audio.src = currentTrack.audiosrc;
    img.src = currentTrack.imgsrc;
    songName.textContent = currentTrack.name;
    slider.value = 0; // Reset slider

    // Wait for metadata to load before updating slider max
    audio.onloadedmetadata = () => {
        slider.max = audio.duration;
    };

    playAudio(); // Auto-play the new track
}

// Play/pause the audio
function playAudio() {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

// Update slider as audio plays
audio.addEventListener('timeupdate', () => {
    slider.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    calcValue();
});

// Update audio current time when slider moves
slider.addEventListener('input', () => {
    audio.currentTime = slider.value;
    calcValue();
});

// Move to the previous song
backButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + quran.length) % quran.length;
    updatePlayer();
});

// Move to the next song
nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % quran.length;
    updatePlayer();
});

// Play button event listener
playButton.addEventListener('click', playAudio);

// Initialize the player
updatePlayer();

// Format time display
function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Update slider background
function calcValue() {
    let valuePercentage = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.38) ${valuePercentage}%, #ebe9e7 ${valuePercentage}%)`;
}
