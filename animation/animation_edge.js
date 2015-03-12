/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'road',
                            type: 'image',
                            rect: ['1px', '0px', '2000px', '503px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"road.jpg",'0px','0px']
                        },
                        {
                            id: 'car2',
                            symbolName: 'car',
                            type: 'rect',
                            rect: ['2008px', '9px', '75', '35', 'auto', 'auto'],
                            transform: [[],['-20']]
                        },
                        {
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['477', '145', '300', '284', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'Symbol_2',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['789', '145', '331', '264', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Symbol_3',
                            symbolName: 'Symbol_3',
                            type: 'rect',
                            rect: ['1217', '132', '297', '289', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Symbol_4',
                            symbolName: 'Symbol_4',
                            type: 'rect',
                            rect: ['692', '352', '268', '242', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Symbol_5',
                            symbolName: 'Symbol_5',
                            type: 'rect',
                            rect: ['1051', '348', '268', '246', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['1072px', '25px', '620px', '60px', 'auto', 'auto'],
                            text: "“Виртуоз”<br>",
                            align: "left",
                            font: ['open-sans, sans-serif', [30, "px"], "rgba(231,76,60,1.00)", "400", "none solid rgb(11, 11, 11)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['780px', '25px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Почему автошкола ",
                            align: "left",
                            font: ['open-sans, sans-serif', [30, "px"], "rgba(11,11,11,1)", "400", "none solid rgb(11, 11, 11)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['914px', '66px', 'auto', 'auto', 'auto', 'auto'],
                            text: "популярна?",
                            align: "left",
                            font: ['open-sans, sans-serif', [30, "px"], "rgba(11,11,11,1)", "400", "none solid rgb(11, 11, 11)", "normal", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '2000px', '650px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 30009,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${car2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid29",
                            "rotateZ",
                            4000,
                            585,
                            "linear",
                            "${car2}",
                            '0deg',
                            '30deg'
                        ],
                        [
                            "eid32",
                            "rotateZ",
                            4585,
                            415,
                            "linear",
                            "${car2}",
                            '30deg',
                            '60deg'
                        ],
                        [
                            "eid37",
                            "rotateZ",
                            5000,
                            500,
                            "linear",
                            "${car2}",
                            '60deg',
                            '90deg'
                        ],
                        [
                            "eid44",
                            "rotateZ",
                            5500,
                            0,
                            "linear",
                            "${car2}",
                            '90deg',
                            '90deg'
                        ],
                        [
                            "eid45",
                            "rotateZ",
                            6385,
                            765,
                            "linear",
                            "${car2}",
                            '90deg',
                            '50deg'
                        ],
                        [
                            "eid48",
                            "rotateZ",
                            7150,
                            850,
                            "linear",
                            "${car2}",
                            '50deg',
                            '0deg'
                        ],
                        [
                            "eid51",
                            "rotateZ",
                            8000,
                            1015,
                            "linear",
                            "${car2}",
                            '0deg',
                            '-40deg'
                        ],
                        [
                            "eid54",
                            "rotateZ",
                            9015,
                            795,
                            "linear",
                            "${car2}",
                            '-40deg',
                            '-80deg'
                        ],
                        [
                            "eid58",
                            "rotateZ",
                            9810,
                            690,
                            "linear",
                            "${car2}",
                            '-80deg',
                            '-50deg'
                        ],
                        [
                            "eid61",
                            "rotateZ",
                            10500,
                            500,
                            "linear",
                            "${car2}",
                            '-50deg',
                            '-20deg'
                        ],
                        [
                            "eid71",
                            "rotateZ",
                            11000,
                            435,
                            "linear",
                            "${car2}",
                            '-20deg',
                            '0deg'
                        ],
                        [
                            "eid74",
                            "rotateZ",
                            11435,
                            600,
                            "linear",
                            "${car2}",
                            '0deg',
                            '40deg'
                        ],
                        [
                            "eid77",
                            "rotateZ",
                            12035,
                            955,
                            "linear",
                            "${car2}",
                            '40deg',
                            '60deg'
                        ],
                        [
                            "eid82",
                            "rotateZ",
                            12990,
                            600,
                            "linear",
                            "${car2}",
                            '60deg',
                            '90deg'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            13590,
                            0,
                            "linear",
                            "${car2}",
                            '90deg',
                            '90deg'
                        ],
                        [
                            "eid88",
                            "rotateZ",
                            14439,
                            549,
                            "linear",
                            "${car2}",
                            '90deg',
                            '60deg'
                        ],
                        [
                            "eid91",
                            "rotateZ",
                            14988,
                            525,
                            "linear",
                            "${car2}",
                            '60deg',
                            '30deg'
                        ],
                        [
                            "eid94",
                            "rotateZ",
                            15513,
                            446,
                            "linear",
                            "${car2}",
                            '30deg',
                            '0deg'
                        ],
                        [
                            "eid99",
                            "rotateZ",
                            15959,
                            0,
                            "linear",
                            "${car2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid101",
                            "rotateZ",
                            17250,
                            500,
                            "linear",
                            "${car2}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid104",
                            "rotateZ",
                            17750,
                            515,
                            "linear",
                            "${car2}",
                            '-30deg',
                            '-60deg'
                        ],
                        [
                            "eid107",
                            "rotateZ",
                            18265,
                            557,
                            "linear",
                            "${car2}",
                            '-60deg',
                            '-90deg'
                        ],
                        [
                            "eid112",
                            "rotateZ",
                            18822,
                            0,
                            "linear",
                            "${car2}",
                            '-90deg',
                            '-90deg'
                        ],
                        [
                            "eid114",
                            "rotateZ",
                            20019,
                            495,
                            "linear",
                            "${car2}",
                            '-90deg',
                            '-50deg'
                        ],
                        [
                            "eid117",
                            "rotateZ",
                            20514,
                            495,
                            "linear",
                            "${car2}",
                            '-50deg',
                            '-20deg'
                        ],
                        [
                            "eid120",
                            "rotateZ",
                            21009,
                            475,
                            "linear",
                            "${car2}",
                            '-20deg',
                            '5deg'
                        ],
                        [
                            "eid123",
                            "rotateZ",
                            21484,
                            538,
                            "linear",
                            "${car2}",
                            '5deg',
                            '30deg'
                        ],
                        [
                            "eid126",
                            "rotateZ",
                            22022,
                            460,
                            "linear",
                            "${car2}",
                            '30deg',
                            '60deg'
                        ],
                        [
                            "eid129",
                            "rotateZ",
                            22482,
                            523,
                            "linear",
                            "${car2}",
                            '60deg',
                            '90deg'
                        ],
                        [
                            "eid132",
                            "rotateZ",
                            23005,
                            515,
                            "linear",
                            "${car2}",
                            '90deg',
                            '60deg'
                        ],
                        [
                            "eid135",
                            "rotateZ",
                            23520,
                            485,
                            "linear",
                            "${car2}",
                            '60deg',
                            '30deg'
                        ],
                        [
                            "eid138",
                            "rotateZ",
                            24005,
                            520,
                            "linear",
                            "${car2}",
                            '30deg',
                            '0deg'
                        ],
                        [
                            "eid141",
                            "rotateZ",
                            24525,
                            478,
                            "linear",
                            "${car2}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid144",
                            "rotateZ",
                            25003,
                            495,
                            "linear",
                            "${car2}",
                            '-30deg',
                            '-60deg'
                        ],
                        [
                            "eid147",
                            "rotateZ",
                            25498,
                            505,
                            "linear",
                            "${car2}",
                            '-60deg',
                            '-90deg'
                        ],
                        [
                            "eid152",
                            "rotateZ",
                            26003,
                            0,
                            "linear",
                            "${car2}",
                            '-90deg',
                            '-90deg'
                        ],
                        [
                            "eid159",
                            "rotateZ",
                            26802,
                            707,
                            "linear",
                            "${car2}",
                            '-90deg',
                            '-60deg'
                        ],
                        [
                            "eid155",
                            "rotateZ",
                            27509,
                            493,
                            "linear",
                            "${car2}",
                            '-60deg',
                            '-30deg'
                        ],
                        [
                            "eid158",
                            "rotateZ",
                            28002,
                            515,
                            "linear",
                            "${car2}",
                            '-30deg',
                            '0deg'
                        ],
                        [
                            "eid172",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Symbol_4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid173",
                            "opacity",
                            2325,
                            495,
                            "linear",
                            "${Symbol_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${car2}",
                            '-75px',
                            '343px'
                        ],
                        [
                            "eid22",
                            "left",
                            4000,
                            585,
                            "linear",
                            "${car2}",
                            '343px',
                            '399px'
                        ],
                        [
                            "eid30",
                            "left",
                            4585,
                            415,
                            "linear",
                            "${car2}",
                            '399px',
                            '434px'
                        ],
                        [
                            "eid35",
                            "left",
                            5000,
                            500,
                            "linear",
                            "${car2}",
                            '434px',
                            '447px'
                        ],
                        [
                            "eid41",
                            "left",
                            5500,
                            885,
                            "linear",
                            "${car2}",
                            '447px',
                            '448px'
                        ],
                        [
                            "eid42",
                            "left",
                            6385,
                            765,
                            "linear",
                            "${car2}",
                            '448px',
                            '473px'
                        ],
                        [
                            "eid46",
                            "left",
                            7150,
                            850,
                            "linear",
                            "${car2}",
                            '473px',
                            '528px'
                        ],
                        [
                            "eid49",
                            "left",
                            8000,
                            1015,
                            "linear",
                            "${car2}",
                            '528px',
                            '592px'
                        ],
                        [
                            "eid52",
                            "left",
                            9015,
                            795,
                            "linear",
                            "${car2}",
                            '592px',
                            '616px'
                        ],
                        [
                            "eid56",
                            "left",
                            9810,
                            690,
                            "linear",
                            "${car2}",
                            '616px',
                            '635px'
                        ],
                        [
                            "eid60",
                            "left",
                            10500,
                            500,
                            "linear",
                            "${car2}",
                            '635px',
                            '666px'
                        ],
                        [
                            "eid69",
                            "left",
                            11000,
                            435,
                            "linear",
                            "${car2}",
                            '666px',
                            '697px'
                        ],
                        [
                            "eid72",
                            "left",
                            11435,
                            600,
                            "linear",
                            "${car2}",
                            '697px',
                            '747px'
                        ],
                        [
                            "eid75",
                            "left",
                            12035,
                            955,
                            "linear",
                            "${car2}",
                            '747px',
                            '772px'
                        ],
                        [
                            "eid81",
                            "left",
                            12990,
                            600,
                            "linear",
                            "${car2}",
                            '772px',
                            '784px'
                        ],
                        [
                            "eid84",
                            "left",
                            13590,
                            849,
                            "linear",
                            "${car2}",
                            '784px',
                            '785px'
                        ],
                        [
                            "eid85",
                            "left",
                            14439,
                            549,
                            "linear",
                            "${car2}",
                            '785px',
                            '803px'
                        ],
                        [
                            "eid89",
                            "left",
                            14988,
                            525,
                            "linear",
                            "${car2}",
                            '803px',
                            '824px'
                        ],
                        [
                            "eid92",
                            "left",
                            15513,
                            446,
                            "linear",
                            "${car2}",
                            '824px',
                            '862px'
                        ],
                        [
                            "eid95",
                            "left",
                            15959,
                            1291,
                            "linear",
                            "${car2}",
                            '862px',
                            '1058px'
                        ],
                        [
                            "eid97",
                            "left",
                            17250,
                            500,
                            "linear",
                            "${car2}",
                            '1058px',
                            '1102px'
                        ],
                        [
                            "eid102",
                            "left",
                            17750,
                            515,
                            "linear",
                            "${car2}",
                            '1102px',
                            '1133px'
                        ],
                        [
                            "eid105",
                            "left",
                            18265,
                            557,
                            "linear",
                            "${car2}",
                            '1133px',
                            '1143px'
                        ],
                        [
                            "eid109",
                            "left",
                            18822,
                            1197,
                            "linear",
                            "${car2}",
                            '1143px',
                            '1146px'
                        ],
                        [
                            "eid110",
                            "left",
                            20019,
                            495,
                            "linear",
                            "${car2}",
                            '1146px',
                            '1168px'
                        ],
                        [
                            "eid115",
                            "left",
                            20514,
                            495,
                            "linear",
                            "${car2}",
                            '1168px',
                            '1202px'
                        ],
                        [
                            "eid118",
                            "left",
                            21009,
                            475,
                            "linear",
                            "${car2}",
                            '1202px',
                            '1246px'
                        ],
                        [
                            "eid121",
                            "left",
                            21484,
                            538,
                            "linear",
                            "${car2}",
                            '1246px',
                            '1282px'
                        ],
                        [
                            "eid124",
                            "left",
                            22022,
                            460,
                            "linear",
                            "${car2}",
                            '1282px',
                            '1303px'
                        ],
                        [
                            "eid127",
                            "left",
                            22482,
                            523,
                            "linear",
                            "${car2}",
                            '1303px',
                            '1313px'
                        ],
                        [
                            "eid131",
                            "left",
                            23005,
                            515,
                            "linear",
                            "${car2}",
                            '1313px',
                            '1332px'
                        ],
                        [
                            "eid133",
                            "left",
                            23520,
                            485,
                            "linear",
                            "${car2}",
                            '1332px',
                            '1366px'
                        ],
                        [
                            "eid136",
                            "left",
                            24005,
                            520,
                            "linear",
                            "${car2}",
                            '1366px',
                            '1403px'
                        ],
                        [
                            "eid139",
                            "left",
                            24525,
                            478,
                            "linear",
                            "${car2}",
                            '1403px',
                            '1446px'
                        ],
                        [
                            "eid143",
                            "left",
                            25003,
                            495,
                            "linear",
                            "${car2}",
                            '1446px',
                            '1474px'
                        ],
                        [
                            "eid146",
                            "left",
                            25498,
                            505,
                            "linear",
                            "${car2}",
                            '1474px',
                            '1481px'
                        ],
                        [
                            "eid149",
                            "left",
                            26003,
                            1001,
                            "linear",
                            "${car2}",
                            '1481px',
                            '1483px'
                        ],
                        [
                            "eid150",
                            "left",
                            27004,
                            505,
                            "linear",
                            "${car2}",
                            '1483px',
                            '1494px'
                        ],
                        [
                            "eid153",
                            "left",
                            27509,
                            493,
                            "linear",
                            "${car2}",
                            '1494px',
                            '1523px'
                        ],
                        [
                            "eid156",
                            "left",
                            28002,
                            515,
                            "linear",
                            "${car2}",
                            '1523px',
                            '1581px'
                        ],
                        [
                            "eid160",
                            "left",
                            28517,
                            1492,
                            "linear",
                            "${car2}",
                            '1581px',
                            '2008px'
                        ],
                        [
                            "eid20",
                            "top",
                            0,
                            0,
                            "linear",
                            "${car2}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid23",
                            "top",
                            4000,
                            585,
                            "linear",
                            "${car2}",
                            '10px',
                            '15px'
                        ],
                        [
                            "eid31",
                            "top",
                            4585,
                            415,
                            "linear",
                            "${car2}",
                            '15px',
                            '48px'
                        ],
                        [
                            "eid36",
                            "top",
                            5000,
                            500,
                            "linear",
                            "${car2}",
                            '48px',
                            '93px'
                        ],
                        [
                            "eid40",
                            "top",
                            5500,
                            885,
                            "linear",
                            "${car2}",
                            '93px',
                            '223px'
                        ],
                        [
                            "eid43",
                            "top",
                            6385,
                            765,
                            "linear",
                            "${car2}",
                            '223px',
                            '272px'
                        ],
                        [
                            "eid47",
                            "top",
                            7150,
                            850,
                            "linear",
                            "${car2}",
                            '272px',
                            '297px'
                        ],
                        [
                            "eid50",
                            "top",
                            8000,
                            1015,
                            "linear",
                            "${car2}",
                            '297px',
                            '268px'
                        ],
                        [
                            "eid53",
                            "top",
                            9015,
                            795,
                            "linear",
                            "${car2}",
                            '268px',
                            '213px'
                        ],
                        [
                            "eid55",
                            "top",
                            9810,
                            690,
                            "linear",
                            "${car2}",
                            '213px',
                            '160px'
                        ],
                        [
                            "eid59",
                            "top",
                            10500,
                            500,
                            "linear",
                            "${car2}",
                            '160px',
                            '136px'
                        ],
                        [
                            "eid70",
                            "top",
                            11000,
                            435,
                            "linear",
                            "${car2}",
                            '136px',
                            '129px'
                        ],
                        [
                            "eid73",
                            "top",
                            11435,
                            600,
                            "linear",
                            "${car2}",
                            '129px',
                            '142px'
                        ],
                        [
                            "eid76",
                            "top",
                            12035,
                            955,
                            "linear",
                            "${car2}",
                            '142px',
                            '173px'
                        ],
                        [
                            "eid80",
                            "top",
                            12990,
                            600,
                            "linear",
                            "${car2}",
                            '173px',
                            '209px'
                        ],
                        [
                            "eid83",
                            "top",
                            13590,
                            849,
                            "linear",
                            "${car2}",
                            '209px',
                            '386px'
                        ],
                        [
                            "eid86",
                            "top",
                            14439,
                            549,
                            "linear",
                            "${car2}",
                            '386px',
                            '430px'
                        ],
                        [
                            "eid90",
                            "top",
                            14988,
                            525,
                            "linear",
                            "${car2}",
                            '430px',
                            '450px'
                        ],
                        [
                            "eid93",
                            "top",
                            15513,
                            446,
                            "linear",
                            "${car2}",
                            '450px',
                            '463px'
                        ],
                        [
                            "eid96",
                            "top",
                            15959,
                            1291,
                            "linear",
                            "${car2}",
                            '463px',
                            '462px'
                        ],
                        [
                            "eid98",
                            "top",
                            17250,
                            500,
                            "linear",
                            "${car2}",
                            '462px',
                            '451px'
                        ],
                        [
                            "eid103",
                            "top",
                            17750,
                            515,
                            "linear",
                            "${car2}",
                            '451px',
                            '422px'
                        ],
                        [
                            "eid106",
                            "top",
                            18265,
                            557,
                            "linear",
                            "${car2}",
                            '422px',
                            '373px'
                        ],
                        [
                            "eid108",
                            "top",
                            18822,
                            1197,
                            "linear",
                            "${car2}",
                            '373px',
                            '203px'
                        ],
                        [
                            "eid111",
                            "top",
                            20019,
                            495,
                            "linear",
                            "${car2}",
                            '203px',
                            '154px'
                        ],
                        [
                            "eid116",
                            "top",
                            20514,
                            495,
                            "linear",
                            "${car2}",
                            '154px',
                            '136px'
                        ],
                        [
                            "eid119",
                            "top",
                            21009,
                            475,
                            "linear",
                            "${car2}",
                            '136px',
                            '131px'
                        ],
                        [
                            "eid122",
                            "top",
                            21484,
                            538,
                            "linear",
                            "${car2}",
                            '131px',
                            '148px'
                        ],
                        [
                            "eid125",
                            "top",
                            22022,
                            460,
                            "linear",
                            "${car2}",
                            '148px',
                            '175px'
                        ],
                        [
                            "eid128",
                            "top",
                            22482,
                            523,
                            "linear",
                            "${car2}",
                            '175px',
                            '216px'
                        ],
                        [
                            "eid130",
                            "top",
                            23005,
                            515,
                            "linear",
                            "${car2}",
                            '216px',
                            '265px'
                        ],
                        [
                            "eid134",
                            "top",
                            23520,
                            485,
                            "linear",
                            "${car2}",
                            '265px',
                            '289px'
                        ],
                        [
                            "eid137",
                            "top",
                            24005,
                            520,
                            "linear",
                            "${car2}",
                            '289px',
                            '297px'
                        ],
                        [
                            "eid140",
                            "top",
                            24525,
                            478,
                            "linear",
                            "${car2}",
                            '297px',
                            '281px'
                        ],
                        [
                            "eid142",
                            "top",
                            25003,
                            495,
                            "linear",
                            "${car2}",
                            '281px',
                            '250px'
                        ],
                        [
                            "eid145",
                            "top",
                            25498,
                            505,
                            "linear",
                            "${car2}",
                            '250px',
                            '208px'
                        ],
                        [
                            "eid148",
                            "top",
                            26003,
                            1001,
                            "linear",
                            "${car2}",
                            '208px',
                            '84px'
                        ],
                        [
                            "eid151",
                            "top",
                            27004,
                            505,
                            "linear",
                            "${car2}",
                            '84px',
                            '51px'
                        ],
                        [
                            "eid154",
                            "top",
                            27509,
                            493,
                            "linear",
                            "${car2}",
                            '51px',
                            '24px'
                        ],
                        [
                            "eid157",
                            "top",
                            28002,
                            515,
                            "linear",
                            "${car2}",
                            '24px',
                            '10px'
                        ],
                        [
                            "eid161",
                            "top",
                            28517,
                            1492,
                            "linear",
                            "${car2}",
                            '10px',
                            '9px'
                        ],
                        [
                            "eid168",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Symbol_2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            1435,
                            500,
                            "linear",
                            "${Symbol_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid167",
                            "opacity",
                            1010,
                            495,
                            "linear",
                            "${Symbol_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Symbol_3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid171",
                            "opacity",
                            1885,
                            495,
                            "linear",
                            "${Symbol_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid174",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Symbol_5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid175",
                            "opacity",
                            2750,
                            510,
                            "linear",
                            "${Symbol_5}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "car": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'car',
                            type: 'image',
                            rect: ['0px', '0px', '75px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/car.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '75px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '300px', '284px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'i1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/i1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '300px', '284px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'i2',
                            type: 'image',
                            rect: ['0px', '0px', '331px', '264px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '331px', '264px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'i3',
                            type: 'image',
                            rect: ['0px', '0px', '297px', '289px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '297px', '289px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'i4',
                            type: 'image',
                            rect: ['0px', '0px', '268px', '242px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '268px', '242px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'i5',
                            type: 'image',
                            rect: ['0px', '0px', '268px', '246px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '268px', '246px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animation_edgeActions.js");
})("EDGE-406522077");
