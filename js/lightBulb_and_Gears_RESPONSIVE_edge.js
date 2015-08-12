/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='img/lightbulb/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
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
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'gear3',
                            symbolName: 'gear',
                            type: 'rect',
                            rect: ['701', '651px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'flowerGear_100',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['43px', '74px', '75', '75', 'auto', 'auto']
                        },
                        {
                            id: 'flowerGear_1003Copy8',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['144px', '5px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy3',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['71px', '6px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy5',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['184px', '30px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy7',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['187px', '84px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['96px', '26px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['770'],[],['0.41304','0.41304']]
                        },
                        {
                            id: 'flowerGear_1003Copy9',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['21px', '26px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-720'],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy20',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['285px', '71px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['720'],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy21',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['-115px', '73px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-720'],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['21px', '202px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy2',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['-9px', '73px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-720'],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1002Copy',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['135px', '84px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'flowerGear_1002Copy2',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['83px', '132px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-705']]
                        },
                        {
                            id: 'flowerGear_1002Copy3',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['151px', '187px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.98','0.98']]
                        },
                        {
                            id: 'flowerGear_1003Copy6',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['161px', '239px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy11',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['88px', '184px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['780'],[],['0.47','0.47']]
                        },
                        {
                            id: 'flowerGear_1003Copy17',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['201px', '169px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-720'],[],['0.55','0.55']]
                        },
                        {
                            id: 'flowerGear_1003Copy18',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['51px', '178px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy19',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['3px', '173px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy13',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['32px', '147px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.52','0.52']]
                        },
                        {
                            id: 'flowerGear_1003Copy12',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['106px', '253px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy4',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['94px', '322px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'flowerGear_1003Copy10',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['142px', '272px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.48','0.48']]
                        },
                        {
                            id: 'flowerGear_1003Copy14',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['128px', '302px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.47','0.47']]
                        },
                        {
                            id: 'flowerGear_1003Copy15',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['106px', '216px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.55','0.55']]
                        },
                        {
                            id: 'flowerGear_1003Copy22',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['306px', '233px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.55','0.55']]
                        },
                        {
                            id: 'flowerGear_1003Copy16',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['61px', '222px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['480'],[],['0.77','0.77']]
                        },
                        {
                            id: 'flowerGear_1005',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['171px', '6px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy67',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['86px', '-17px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy68',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['119px', '-6px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy69',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['104px', '3px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy79',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['161px', '24px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.2','0.2']]
                        },
                        {
                            id: 'flowerGear_1005Copy70',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['47px', '18px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy71',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['122px', '21px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy72',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['147px', '32px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy73',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['81px', '46px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy74',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['110px', '47px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy75',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['164px', '50px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy76',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['183px', '57px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy120',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['-124px', '134px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy121',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['276px', '118px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['1440'],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy77',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['219px', '70px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy23',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['128px', '-18px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy26',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['120px', '8px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy28',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['134px', '27px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy29',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['161px', '36px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy31',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['206px', '33px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy32',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['217px', '56px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy33',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['196px', '62px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy34',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['208px', '79px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy37',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['156px', '145px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy112',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['41px', '123px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy113',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['27px', '169px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy114',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['110px', '182px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy115',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['140px', '129px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy116',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['166px', '149px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy117',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['221px', '153px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy118',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['110px', '192px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy38',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['152px', '335px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy40',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['142px', '319px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy106',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['130px', '322px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy107',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['117px', '320px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy41',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['75px', '287px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy109',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['64px', '261px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.15','0.15']]
                        },
                        {
                            id: 'flowerGear_1005Copy108',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['102px', '278px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.15','0.15']]
                        },
                        {
                            id: 'flowerGear_1005Copy110',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['191px', '210px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.19','0.19']]
                        },
                        {
                            id: 'flowerGear_1005Copy42',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['63px', '286px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy43',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['60px', '318px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy105',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['75px', '335px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.15','0.15']]
                        },
                        {
                            id: 'flowerGear_1005Copy102',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['70px', '320px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.17','0.17']]
                        },
                        {
                            id: 'flowerGear_1005Copy103',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['49px', '324px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.17','0.17']]
                        },
                        {
                            id: 'flowerGear_1005Copy104',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['152px', '324px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.17','0.17']]
                        },
                        {
                            id: 'flowerGear_1005Copy39',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['49px', '335px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy35',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['95px', '74px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy44',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['43px', '113px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy45',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['177px', '103px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy46',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['26px', '178px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy47',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['86px', '267px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.17','0.17']]
                        },
                        {
                            id: 'flowerGear_1005Copy48',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['36px', '301px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.17','0.17']]
                        },
                        {
                            id: 'flowerGear_1005Copy49',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['87px', '299px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.17','0.17']]
                        },
                        {
                            id: 'flowerGear_1005Copy50',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['167px', '301px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.17','0.17']]
                        },
                        {
                            id: 'flowerGear_1005Copy36',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['81px', '61px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy30',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['149px', '47px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy27',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['92px', '-3px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy24',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['72px', '-17px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy51',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['118px', '-21px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy25',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['53px', '-11px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy52',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['62px', '-15px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy53',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['137px', '-16px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy54',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['31px', '4px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy55',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['-2px', '31px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy56',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['45px', '33px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy57',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['97px', '46px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy58',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['140px', '44px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy59',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['9px', '45px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy60',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['5px', '55px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy122',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['-125px', '160px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy123',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['275px', '159px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy61',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['85px', '72px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy62',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['171px', '62px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['2880'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy63',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['207px', '60px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy64',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['204px', '70px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy65',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['208px', '89px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy66',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['-28px', '91px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-360'],[],['0.13','0.13']]
                        },
                        {
                            id: 'flowerGear_1005Copy',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['104px', '-16px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy2',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['44px', '-1px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy3',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['67px', '33px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy78',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['-7px', '47px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['1440'],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy4',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['207px', '46px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy21',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['126px', '39px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy22',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['97px', '60px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy5',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['223px', '88px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy6',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['170px', '115px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy7',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['122px', '150px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy8',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['180px', '151px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy12',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['194px', '195px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy13',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['32px', '247px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy16',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['129px', '230px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy15',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['51px', '275px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy17',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['35px', '286px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy18',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['167px', '286px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy111',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['70px', '303px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.35','0.35']]
                        },
                        {
                            id: 'flowerGear_1005Copy19',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['121px', '332px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy20',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['103px', '294px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy14',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['77px', '255px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy9',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['88px', '87px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy10',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['-15px', '153px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-1440'],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy84',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['4px', '147px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy85',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['111px', '168px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy86',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['180px', '221px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy87',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['134px', '247px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy88',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['167px', '267px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy89',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['116px', '279px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy90',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['25px', '230px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy91',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['35px', '266px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy92',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['51px', '257px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy93',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['71px', '273px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy94',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['51px', '293px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy95',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['49px', '310px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy96',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['88px', '283px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy97',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['153px', '295px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy98',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['153px', '311px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy99',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['138px', '332px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy100',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['62px', '332px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy11',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['154px', '127px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy80',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['28px', '117px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy81',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['126px', '133px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy82',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['141px', '143px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1005Copy83',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['171px', '134px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'flowerGear_1006',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['209px', '123px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.75','0.75']]
                        },
                        {
                            id: 'flowerGear_1006Copy',
                            symbolName: 'flowerGear_100',
                            type: 'rect',
                            rect: ['-10px', '116px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.72','0.72']]
                        },
                        {
                            id: 'lightbulb_BOTTOM_ONLY',
                            type: 'image',
                            rect: ['81px', '386px', '113px', '86px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"lightbulb%20BOTTOM%20ONLY.svg",'0px','0px']
                        },
                        {
                            id: 'fork_and_knife_modified-04',
                            type: 'image',
                            rect: ['349px', '343px', '32px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fork_and_knife_modified-04.svg",'0px','0px'],
                            transform: [[],['-360']]
                        },
                        {
                            id: 'fork_and_knife_modified-03',
                            type: 'image',
                            rect: ['365px', '380px', '29px', '28px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fork_and_knife_modified-03.svg",'0px','0px']
                        },
                        {
                            id: 'fork_and_knife_modified-02',
                            type: 'image',
                            rect: ['413px', '277px', '26px', '29px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fork_and_knife_modified-02.svg",'0px','0px']
                        },
                        {
                            id: 'fork_and_knife_modified-01',
                            type: 'image',
                            rect: ['73px', '96px', '15px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fork_and_knife_modified-01.svg",'0px','0px']
                        },
                        {
                            id: 'fork_and_knife_modified-01Copy10',
                            type: 'image',
                            rect: ['19px', '136px', '16px', '35px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fork_and_knife_modified-01.svg",'0px','0px'],
                            transform: [[],['-90'],[],['0.65','0.65']]
                        },
                        {
                            id: 'fork_and_knife_modified-01Copy6',
                            type: 'image',
                            rect: ['181px', '208px', '15px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fork_and_knife_modified-01.svg",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'fork_and_knife_modified-01Copy4',
                            type: 'image',
                            rect: ['164px', '106px', '15px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fork_and_knife_modified-01.svg",'0px','0px'],
                            transform: [[],['420']]
                        },
                        {
                            id: 'fork_and_knife_modified-01Copy5',
                            type: 'image',
                            rect: ['112px', '154px', '15px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fork_and_knife_modified-01.svg",'0px','0px'],
                            transform: [[],['208']]
                        },
                        {
                            id: 'fork_and_knife_modified-01Copy8',
                            type: 'image',
                            rect: ['93px', '248px', '11px', '23px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fork_and_knife_modified-01.svg",'0px','0px'],
                            transform: [[],['30']]
                        },
                        {
                            id: 'fork_and_knife_modified-01Copy9',
                            type: 'image',
                            rect: ['241px', '149px', '11px', '23px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fork_and_knife_modified-01.svg",'0px','0px'],
                            transform: [[],['-60']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '378px', '475px', 'auto', 'auto'],
                            sizeRange: ['','276px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,120,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2533",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${fork_and_knife_modified-01Copy6}",
                            '180deg',
                            '540deg'
                        ],
                        [
                            "eid2760",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy7}",
                            '123px',
                            '122px'
                        ],
                        [
                            "eid2842",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy53}",
                            '138px',
                            '137px'
                        ],
                        [
                            "eid1367",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy26}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2807",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy60}",
                            '6px',
                            '5px'
                        ],
                        [
                            "eid2639",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy65}",
                            '259px',
                            '89px'
                        ],
                        [
                            "eid2855",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy85}",
                            '112px',
                            '111px'
                        ],
                        [
                            "eid2558",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy82}",
                            '313px',
                            '143px'
                        ],
                        [
                            "eid2820",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy8}",
                            '145px',
                            '144px'
                        ],
                        [
                            "eid2755",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy24}",
                            '73px',
                            '72px'
                        ],
                        [
                            "eid2885",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy40}",
                            '143px',
                            '142px'
                        ],
                        [
                            "eid2759",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy55}",
                            '-1px',
                            '-2px'
                        ],
                        [
                            "eid2754",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1006Copy}",
                            '-9px',
                            '-10px'
                        ],
                        [
                            "eid2552",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy27}",
                            '167px',
                            '-3px'
                        ],
                        [
                            "eid2795",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy2}",
                            '45px',
                            '44px'
                        ],
                        [
                            "eid2640",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy81}",
                            '303px',
                            '133px'
                        ],
                        [
                            "eid2778",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy84}",
                            '5px',
                            '4px'
                        ],
                        [
                            "eid2969",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy74}",
                            '47px',
                            '47px'
                        ],
                        [
                            "eid2867",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy31}",
                            '206px',
                            '206px'
                        ],
                        [
                            "eid2962",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy23}",
                            '-18px',
                            '-18px'
                        ],
                        [
                            "eid2965",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy29}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid2801",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy37}",
                            '157px',
                            '156px'
                        ],
                        [
                            "eid2626",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy44}",
                            '283px',
                            '113px'
                        ],
                        [
                            "eid1289",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy8}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid1194",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1002Copy3}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid1301",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy81}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2537",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${fork_and_knife_modified-01Copy8}",
                            '30deg',
                            '390deg'
                        ],
                        [
                            "eid1408",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy43}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2644",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy93}",
                            '443px',
                            '273px'
                        ],
                        [
                            "eid2973",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy69}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid2629",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy5}",
                            '200px',
                            '30px'
                        ],
                        [
                            "eid2611",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy11}",
                            '354px',
                            '184px'
                        ],
                        [
                            "eid2761",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy115}",
                            '141px',
                            '140px'
                        ],
                        [
                            "eid2955",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy70}",
                            '18px',
                            '18px'
                        ],
                        [
                            "eid2549",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy107}",
                            '490px',
                            '320px'
                        ],
                        [
                            "eid2612",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy6}",
                            '409px',
                            '239px'
                        ],
                        [
                            "eid2792",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy76}",
                            '183px',
                            '183px'
                        ],
                        [
                            "eid2895",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy10}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid1359",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy60}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2744",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy103}",
                            '50px',
                            '49px'
                        ],
                        [
                            "eid1446",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy10}",
                            '0deg',
                            '720deg'
                        ],
                        [
                            "eid2887",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01}",
                            '73px',
                            '73px'
                        ],
                        [
                            "eid2818",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy17}",
                            '36px',
                            '35px'
                        ],
                        [
                            "eid2566",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy16}",
                            '400px',
                            '230px'
                        ],
                        [
                            "eid2956",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy26}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid1260",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2737",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy26}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid2881",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy68}",
                            '119px',
                            '119px'
                        ],
                        [
                            "eid2829",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy34}",
                            '209px',
                            '208px'
                        ],
                        [
                            "eid2864",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy79}",
                            '161px',
                            '161px'
                        ],
                        [
                            "eid2860",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy73}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid2828",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy61}",
                            '86px',
                            '85px'
                        ],
                        [
                            "eid2739",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy18}",
                            '168px',
                            '167px'
                        ],
                        [
                            "eid2853",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy69}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid2848",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1003Copy16}",
                            '61px',
                            '61px'
                        ],
                        [
                            "eid2845",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1003Copy15}",
                            '106px',
                            '106px'
                        ],
                        [
                            "eid2875",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy48}",
                            '37px',
                            '36px'
                        ],
                        [
                            "eid2811",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy74}",
                            '110px',
                            '110px'
                        ],
                        [
                            "eid2576",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy115}",
                            '299px',
                            '129px'
                        ],
                        [
                            "eid2790",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005}",
                            '171px',
                            '171px'
                        ],
                        [
                            "eid2720",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy62}",
                            '172px',
                            '171px'
                        ],
                        [
                            "eid2788",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy75}",
                            '164px',
                            '164px'
                        ],
                        [
                            "eid1456",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${fork_and_knife_modified-01}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid2681",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy40}",
                            '489px',
                            '319px'
                        ],
                        [
                            "eid2780",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy6}",
                            '181px',
                            '181px'
                        ],
                        [
                            "eid2672",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy48}",
                            '471px',
                            '301px'
                        ],
                        [
                            "eid2823",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy47}",
                            '87px',
                            '86px'
                        ],
                        [
                            "eid2833",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1002Copy2}",
                            '84px',
                            '83px'
                        ],
                        [
                            "eid2775",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy77}",
                            '219px',
                            '219px'
                        ],
                        [
                            "eid2690",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy35}",
                            '244px',
                            '74px'
                        ],
                        [
                            "eid1364",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy63}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2844",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy10}",
                            '143px',
                            '142px'
                        ],
                        [
                            "eid2765",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy9}",
                            '241px',
                            '241px'
                        ],
                        [
                            "eid2756",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy5}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid2745",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1003Copy14}",
                            '128px',
                            '128px'
                        ],
                        [
                            "eid2874",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy45}",
                            '178px',
                            '177px'
                        ],
                        [
                            "eid2751",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy8}",
                            '93px',
                            '93px'
                        ],
                        [
                            "eid2734",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy70}",
                            '47px',
                            '47px'
                        ],
                        [
                            "eid2531",
                            "left",
                            10000,
                            0,
                            "linear",
                            "${fork_and_knife_modified-03}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid2870",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy114}",
                            '111px',
                            '110px'
                        ],
                        [
                            "eid1430",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy91}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2592",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy38}",
                            '505px',
                            '335px'
                        ],
                        [
                            "eid2980",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy72}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1217",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid2758",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy6}",
                            '171px',
                            '170px'
                        ],
                        [
                            "eid2809",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy17}",
                            '202px',
                            '201px'
                        ],
                        [
                            "eid1300",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy80}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2979",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01}",
                            '96px',
                            '96px'
                        ],
                        [
                            "eid2821",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy36}",
                            '82px',
                            '81px'
                        ],
                        [
                            "eid2787",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy112}",
                            '42px',
                            '41px'
                        ],
                        [
                            "eid1384",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy103}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2977",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy31}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid1409",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy47}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2557",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy18}",
                            '456px',
                            '286px'
                        ],
                        [
                            "eid1230",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy78}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1163",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy7}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid2968",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy76}",
                            '57px',
                            '57px'
                        ],
                        [
                            "eid2972",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1003Copy16}",
                            '222px',
                            '222px'
                        ],
                        [
                            "eid2850",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy7}",
                            '188px',
                            '187px'
                        ],
                        [
                            "eid1267",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy66}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1354",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy27}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2970",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1003Copy4}",
                            '322px',
                            '322px'
                        ],
                        [
                            "eid2967",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid2966",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy75}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid2964",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy6}",
                            '208px',
                            '208px'
                        ],
                        [
                            "eid1390",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy30}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2648",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy10}",
                            '442px',
                            '272px'
                        ],
                        [
                            "eid2555",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy11}",
                            '297px',
                            '127px'
                        ],
                        [
                            "eid2838",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy41}",
                            '76px',
                            '75px'
                        ],
                        [
                            "eid2961",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy28}",
                            '27px',
                            '27px'
                        ],
                        [
                            "eid2960",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy9}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1161",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1002Copy}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid2622",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy17}",
                            '456px',
                            '286px'
                        ],
                        [
                            "eid2959",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy5}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid2796",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy64}",
                            '205px',
                            '204px'
                        ],
                        [
                            "eid2958",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy8}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid2666",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy66}",
                            '261px',
                            '91px'
                        ],
                        [
                            "eid2847",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy105}",
                            '76px',
                            '75px'
                        ],
                        [
                            "eid2560",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy108}",
                            '448px',
                            '278px'
                        ],
                        [
                            "eid1404",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy107}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid1717",
                            "top",
                            0,
                            0,
                            "linear",
                            "${flowerGear_1003Copy20}",
                            '71px',
                            '71px'
                        ],
                        [
                            "eid2954",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy4}",
                            '106px',
                            '106px'
                        ],
                        [
                            "eid2826",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy86}",
                            '181px',
                            '180px'
                        ],
                        [
                            "eid2858",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy71}",
                            '122px',
                            '122px'
                        ],
                        [
                            "eid1388",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy49}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2601",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy2}",
                            '169px',
                            '-1px'
                        ],
                        [
                            "eid2577",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy63}",
                            '230px',
                            '60px'
                        ],
                        [
                            "eid1283",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy77}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1252",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy67}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2794",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy8}",
                            '181px',
                            '180px'
                        ],
                        [
                            "eid2635",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy2}",
                            '243px',
                            '73px'
                        ],
                        [
                            "eid2731",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy18}",
                            '52px',
                            '51px'
                        ],
                        [
                            "eid1449",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy4}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid2528",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${fork_and_knife_modified-01Copy4}",
                            '60deg',
                            '420deg'
                        ],
                        [
                            "eid2541",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy62}",
                            '232px',
                            '62px'
                        ],
                        [
                            "eid1414",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy17}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2600",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy8}",
                            '321px',
                            '151px'
                        ],
                        [
                            "eid2871",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy33}",
                            '197px',
                            '196px'
                        ],
                        [
                            "eid2594",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy42}",
                            '456px',
                            '286px'
                        ],
                        [
                            "eid2978",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy68}",
                            '-6px',
                            '-6px'
                        ],
                        [
                            "eid2670",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy30}",
                            '217px',
                            '47px'
                        ],
                        [
                            "eid2564",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy}",
                            '154px',
                            '-16px'
                        ],
                        [
                            "eid2782",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy38}",
                            '153px',
                            '152px'
                        ],
                        [
                            "eid2802",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy52}",
                            '63px',
                            '62px'
                        ],
                        [
                            "eid2628",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy3}",
                            '176px',
                            '6px'
                        ],
                        [
                            "eid1411",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy13}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2768",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy94}",
                            '52px',
                            '51px'
                        ],
                        [
                            "eid1427",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy87}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2876",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy113}",
                            '28px',
                            '27px'
                        ],
                        [
                            "eid2619",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy67}",
                            '153px',
                            '-17px'
                        ],
                        [
                            "eid1416",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy19}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1424",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy12}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2633",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy34}",
                            '249px',
                            '79px'
                        ],
                        [
                            "eid1292",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy82}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2804",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy90}",
                            '26px',
                            '25px'
                        ],
                        [
                            "eid2605",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy46}",
                            '348px',
                            '178px'
                        ],
                        [
                            "eid1431",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy92}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2641",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy13}",
                            '417px',
                            '247px'
                        ],
                        [
                            "eid2561",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy58}",
                            '214px',
                            '44px'
                        ],
                        [
                            "eid2779",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy51}",
                            '119px',
                            '118px'
                        ],
                        [
                            "eid1259",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy69}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid1338",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy24}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1347",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy38}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2729",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy107}",
                            '118px',
                            '117px'
                        ],
                        [
                            "eid2661",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy83}",
                            '304px',
                            '134px'
                        ],
                        [
                            "eid2575",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy7}",
                            '320px',
                            '150px'
                        ],
                        [
                            "eid2825",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy5}",
                            '185px',
                            '184px'
                        ],
                        [
                            "eid2763",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy12}",
                            '195px',
                            '194px'
                        ],
                        [
                            "eid2562",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy103}",
                            '494px',
                            '324px'
                        ],
                        [
                            "eid2724",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy4}",
                            '164px',
                            '164px'
                        ],
                        [
                            "eid1377",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy114}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1181",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy17}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid2815",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1003Copy4}",
                            '94px',
                            '94px'
                        ],
                        [
                            "eid1268",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy2}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2764",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy110}",
                            '192px',
                            '191px'
                        ],
                        [
                            "eid2680",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy100}",
                            '502px',
                            '332px'
                        ],
                        [
                            "eid1406",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy108}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid1225",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy2}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid2777",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy59}",
                            '10px',
                            '9px'
                        ],
                        [
                            "eid1288",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy6}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2544",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1002Copy3}",
                            '357px',
                            '187px'
                        ],
                        [
                            "eid2886",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy15}",
                            '52px',
                            '51px'
                        ],
                        [
                            "eid2588",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy59}",
                            '215px',
                            '45px'
                        ],
                        [
                            "eid2750",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003}",
                            '97px',
                            '96px'
                        ],
                        [
                            "eid2805",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy11}",
                            '89px',
                            '88px'
                        ],
                        [
                            "eid2877",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy19}",
                            '122px',
                            '121px'
                        ],
                        [
                            "eid1350",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy110}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid1421",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy100}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1257",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy4}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2553",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy49}",
                            '469px',
                            '299px'
                        ],
                        [
                            "eid2607",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy37}",
                            '315px',
                            '145px'
                        ],
                        [
                            "eid2630",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy86}",
                            '391px',
                            '221px'
                        ],
                        [
                            "eid1434",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy97}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2684",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy4}",
                            '216px',
                            '46px'
                        ],
                        [
                            "eid2615",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy17}",
                            '339px',
                            '169px'
                        ],
                        [
                            "eid1428",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy88}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2688",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy5}",
                            '258px',
                            '88px'
                        ],
                        [
                            "eid1281",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy71}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1420",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy98}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2803",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy116}",
                            '167px',
                            '166px'
                        ],
                        [
                            "eid1405",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy109}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid1215",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy13}",
                            '0deg',
                            '720deg'
                        ],
                        [
                            "eid2836",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy81}",
                            '127px',
                            '126px'
                        ],
                        [
                            "eid1356",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy52}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid1357",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy53}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2857",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy39}",
                            '50px',
                            '49px'
                        ],
                        [
                            "eid1450",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy14}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid2863",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy54}",
                            '32px',
                            '31px'
                        ],
                        [
                            "eid1677",
                            "top",
                            0,
                            0,
                            "linear",
                            "${flowerGear_1005Copy122}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid2835",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy65}",
                            '209px',
                            '208px'
                        ],
                        [
                            "eid1256",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2872",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy50}",
                            '168px',
                            '167px'
                        ],
                        [
                            "eid2578",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy12}",
                            '365px',
                            '195px'
                        ],
                        [
                            "eid1403",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy106}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid1410",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy7}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1246",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy120}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid1419",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy95}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1435",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy99}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2957",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1003Copy14}",
                            '302px',
                            '302px'
                        ],
                        [
                            "eid2535",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${fork_and_knife_modified-01Copy10}",
                            '-90deg',
                            '270deg'
                        ],
                        [
                            "eid2583",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy21}",
                            '209px',
                            '39px'
                        ],
                        [
                            "eid1224",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1006Copy}",
                            '0deg',
                            '480deg'
                        ],
                        [
                            "eid1365",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy64}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2642",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy41}",
                            '457px',
                            '287px'
                        ],
                        [
                            "eid1276",
                            "left",
                            0,
                            0,
                            "linear",
                            "${flowerGear_1003Copy21}",
                            '-115px',
                            '-115px'
                        ],
                        [
                            "eid1366",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy65}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2799",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy46}",
                            '27px',
                            '26px'
                        ],
                        [
                            "eid2621",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy117}",
                            '323px',
                            '153px'
                        ],
                        [
                            "eid2548",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy99}",
                            '502px',
                            '332px'
                        ],
                        [
                            "eid1180",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1006}",
                            '0deg',
                            '480deg'
                        ],
                        [
                            "eid1333",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy46}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2550",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy20}",
                            '464px',
                            '294px'
                        ],
                        [
                            "eid2883",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy111}",
                            '71px',
                            '70px'
                        ],
                        [
                            "eid2840",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy93}",
                            '72px',
                            '71px'
                        ],
                        [
                            "eid1415",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy18}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2618",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy56}",
                            '203px',
                            '33px'
                        ],
                        [
                            "eid1302",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy83}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2889",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy4}",
                            '208px',
                            '207px'
                        ],
                        [
                            "eid1368",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy28}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2624",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy8}",
                            '175px',
                            '5px'
                        ],
                        [
                            "eid1355",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy51}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2730",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy20}",
                            '104px',
                            '103px'
                        ],
                        [
                            "eid1332",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy35}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1251",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy70}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2675",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy106}",
                            '492px',
                            '322px'
                        ],
                        [
                            "eid1370",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy31}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1263",
                            "left",
                            0,
                            0,
                            "linear",
                            "${flowerGear_1005Copy122}",
                            '-125px',
                            '-125px'
                        ],
                        [
                            "eid2631",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy14}",
                            '425px',
                            '255px'
                        ],
                        [
                            "eid2596",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy112}",
                            '293px',
                            '123px'
                        ],
                        [
                            "eid2653",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy3}",
                            '203px',
                            '33px'
                        ],
                        [
                            "eid1345",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy115}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid1387",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy48}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1371",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy32}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1382",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy105}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2839",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy13}",
                            '33px',
                            '32px'
                        ],
                        [
                            "eid2743",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy58}",
                            '141px',
                            '140px'
                        ],
                        [
                            "eid2894",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy5}",
                            '224px',
                            '223px'
                        ],
                        [
                            "eid2547",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy97}",
                            '465px',
                            '295px'
                        ],
                        [
                            "eid2726",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy87}",
                            '135px',
                            '134px'
                        ],
                        [
                            "eid2879",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy57}",
                            '98px',
                            '97px'
                        ],
                        [
                            "eid1297",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy73}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2593",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy9}",
                            '196px',
                            '26px'
                        ],
                        [
                            "eid2762",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy63}",
                            '208px',
                            '207px'
                        ],
                        [
                            "eid2602",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy64}",
                            '240px',
                            '70px'
                        ],
                        [
                            "eid2669",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy50}",
                            '471px',
                            '301px'
                        ],
                        [
                            "eid2657",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy91}",
                            '436px',
                            '266px'
                        ],
                        [
                            "eid1202",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy18}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid2813",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy56}",
                            '46px',
                            '45px'
                        ],
                        [
                            "eid2741",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy118}",
                            '111px',
                            '110px'
                        ],
                        [
                            "eid1710",
                            "top",
                            0,
                            0,
                            "linear",
                            "${flowerGear_1005Copy123}",
                            '159px',
                            '159px'
                        ],
                        [
                            "eid1445",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy12}",
                            '0deg',
                            '720deg'
                        ],
                        [
                            "eid2590",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy51}",
                            '149px',
                            '-21px'
                        ],
                        [
                            "eid2963",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy77}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid1278",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003}",
                            '0deg',
                            '770deg'
                        ],
                        [
                            "eid2539",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${fork_and_knife_modified-01Copy9}",
                            '-60deg',
                            '300deg'
                        ],
                        [
                            "eid2722",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy32}",
                            '218px',
                            '217px'
                        ],
                        [
                            "eid2637",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1002Copy2}",
                            '302px',
                            '132px'
                        ],
                        [
                            "eid2866",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy95}",
                            '50px',
                            '49px'
                        ],
                        [
                            "eid2971",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1003Copy15}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid2824",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy3}",
                            '72px',
                            '71px'
                        ],
                        [
                            "eid1285",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy5}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2542",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy102}",
                            '490px',
                            '320px'
                        ],
                        [
                            "eid2814",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy67}",
                            '87px',
                            '86px'
                        ],
                        [
                            "eid1261",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy8}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid2643",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy13}",
                            '317px',
                            '147px'
                        ],
                        [
                            "eid2851",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy3}",
                            '68px',
                            '67px'
                        ],
                        [
                            "eid1353",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy44}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2613",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy60}",
                            '225px',
                            '55px'
                        ],
                        [
                            "eid2551",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy18}",
                            '348px',
                            '178px'
                        ],
                        [
                            "eid2742",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy108}",
                            '103px',
                            '102px'
                        ],
                        [
                            "eid2677",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_100}",
                            '244px',
                            '74px'
                        ],
                        [
                            "eid1339",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy25}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1234",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy10}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2827",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy14}",
                            '78px',
                            '77px'
                        ],
                        [
                            "eid2662",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy54}",
                            '174px',
                            '4px'
                        ],
                        [
                            "eid2736",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy11}",
                            '155px',
                            '154px'
                        ],
                        [
                            "eid1401",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy113}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2817",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy117}",
                            '222px',
                            '221px'
                        ],
                        [
                            "eid2664",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy95}",
                            '480px',
                            '310px'
                        ],
                        [
                            "eid2627",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy47}",
                            '437px',
                            '267px'
                        ],
                        [
                            "eid2686",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy9}",
                            '257px',
                            '87px'
                        ],
                        [
                            "eid2565",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy104}",
                            '494px',
                            '324px'
                        ],
                        [
                            "eid1380",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy40}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1425",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy14}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid1439",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy22}",
                            '0deg',
                            '720deg'
                        ],
                        [
                            "eid2893",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy109}",
                            '65px',
                            '64px'
                        ],
                        [
                            "eid2540",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy89}",
                            '449px',
                            '279px'
                        ],
                        [
                            "eid2806",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy6}",
                            '162px',
                            '161px'
                        ],
                        [
                            "eid1291",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy85}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid1165",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy76}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1195",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy15}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid2671",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy45}",
                            '273px',
                            '103px'
                        ],
                        [
                            "eid1178",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_100}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid2608",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy52}",
                            '155px',
                            '-15px'
                        ],
                        [
                            "eid2975",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy73}",
                            '46px',
                            '46px'
                        ],
                        [
                            "eid2682",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy15}",
                            '445px',
                            '275px'
                        ],
                        [
                            "eid1219",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy19}",
                            '0deg',
                            '720deg'
                        ],
                        [
                            "eid2609",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy116}",
                            '319px',
                            '149px'
                        ],
                        [
                            "eid1436",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy90}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2784",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy42}",
                            '64px',
                            '63px'
                        ],
                        [
                            "eid2819",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy78}",
                            '-6px',
                            '-7px'
                        ],
                        [
                            "eid2581",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy25}",
                            '159px',
                            '-11px'
                        ],
                        [
                            "eid2679",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy111}",
                            '473px',
                            '303px'
                        ],
                        [
                            "eid2589",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy84}",
                            '317px',
                            '147px'
                        ],
                        [
                            "eid1375",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy56}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2636",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1002Copy}",
                            '254px',
                            '84px'
                        ],
                        [
                            "eid1429",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy89}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2567",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003}",
                            '196px',
                            '26px'
                        ],
                        [
                            "eid2687",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy109}",
                            '431px',
                            '261px'
                        ],
                        [
                            "eid2584",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy92}",
                            '427px',
                            '257px'
                        ],
                        [
                            "eid2673",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy113}",
                            '339px',
                            '169px'
                        ],
                        [
                            "eid1358",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy57}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2668",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy33}",
                            '232px',
                            '62px'
                        ],
                        [
                            "eid2869",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy66}",
                            '-27px',
                            '-28px'
                        ],
                        [
                            "eid2832",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1002Copy}",
                            '136px',
                            '135px'
                        ],
                        [
                            "eid1383",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy102}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2732",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy27}",
                            '93px',
                            '92px'
                        ],
                        [
                            "eid2856",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy91}",
                            '36px',
                            '35px'
                        ],
                        [
                            "eid2981",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${fork_and_knife_modified-01Copy10}",
                            '136px',
                            '136px'
                        ],
                        [
                            "eid2638",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy19}",
                            '343px',
                            '173px'
                        ],
                        [
                            "eid2733",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy49}",
                            '88px',
                            '87px'
                        ],
                        [
                            "eid1433",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy96}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2632",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy61}",
                            '242px',
                            '72px'
                        ],
                        [
                            "eid2574",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy55}",
                            '201px',
                            '31px'
                        ],
                        [
                            "eid1344",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy37}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2603",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1006}",
                            '293px',
                            '123px'
                        ],
                        [
                            "eid2645",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy88}",
                            '437px',
                            '267px'
                        ],
                        [
                            "eid2976",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy79}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid1386",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy39}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2658",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy39}",
                            '505px',
                            '335px'
                        ],
                        [
                            "eid1426",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy86}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid1452",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy111}",
                            '0deg',
                            '1028deg'
                        ],
                        [
                            "eid2634",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy}",
                            '372px',
                            '202px'
                        ],
                        [
                            "eid1258",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy3}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid2974",
                            "top",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy71}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid2892",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy9}",
                            '89px',
                            '88px'
                        ],
                        [
                            "eid2740",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy82}",
                            '142px',
                            '141px'
                        ],
                        [
                            "eid1249",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy121}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1235",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy9}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid1468",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1002Copy2}",
                            '-345deg',
                            '-705deg'
                        ],
                        [
                            "eid2719",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy89}",
                            '117px',
                            '116px'
                        ],
                        [
                            "eid1712",
                            "top",
                            0,
                            0,
                            "linear",
                            "${gear3}",
                            '651px',
                            '651px'
                        ],
                        [
                            "eid1266",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy122}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1290",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy9}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2623",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy78}",
                            '217px',
                            '47px'
                        ],
                        [
                            "eid2897",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy35}",
                            '96px',
                            '95px'
                        ],
                        [
                            "eid2843",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy12}",
                            '107px',
                            '106px'
                        ],
                        [
                            "eid1323",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy112}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1341",
                            "left",
                            0,
                            0,
                            "linear",
                            "${flowerGear_1005Copy123}",
                            '275px',
                            '275px'
                        ],
                        [
                            "eid1362",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy55}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2837",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy13}",
                            '33px',
                            '32px'
                        ],
                        [
                            "eid1299",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy84}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2878",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy106}",
                            '131px',
                            '130px'
                        ],
                        [
                            "eid2747",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy}",
                            '105px',
                            '104px'
                        ],
                        [
                            "eid2652",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy7}",
                            '254px',
                            '84px'
                        ],
                        [
                            "eid2753",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy96}",
                            '89px',
                            '88px'
                        ],
                        [
                            "eid1418",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy93}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2810",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy22}",
                            '98px',
                            '97px'
                        ],
                        [
                            "eid1391",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy54}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1201",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy11}",
                            '0deg',
                            '780deg'
                        ],
                        [
                            "eid1373",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy34}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2769",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy21}",
                            '127px',
                            '126px'
                        ],
                        [
                            "eid2884",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy100}",
                            '63px',
                            '62px'
                        ],
                        [
                            "eid2721",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy102}",
                            '71px',
                            '70px'
                        ],
                        [
                            "eid1432",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy94}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2785",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy29}",
                            '161px',
                            '161px'
                        ],
                        [
                            "eid1413",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy15}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1337",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy36}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2654",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy10}",
                            '323px',
                            '153px'
                        ],
                        [
                            "eid2800",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy80}",
                            '29px',
                            '28px'
                        ],
                        [
                            "eid1407",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy42}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2647",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy12}",
                            '423px',
                            '253px'
                        ],
                        [
                            "eid2571",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy24}",
                            '153px',
                            '-17px'
                        ],
                        [
                            "eid1376",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy59}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2797",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1006}",
                            '210px',
                            '209px'
                        ],
                        [
                            "eid2773",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy23}",
                            '128px',
                            '128px'
                        ],
                        [
                            "eid1361",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy45}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid1262",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy5}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid1422",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy11}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2667",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy114}",
                            '352px',
                            '182px'
                        ],
                        [
                            "eid1389",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy50}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2614",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy43}",
                            '488px',
                            '318px'
                        ],
                        [
                            "eid2569",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy96}",
                            '453px',
                            '283px'
                        ],
                        [
                            "eid2728",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy99}",
                            '139px',
                            '138px'
                        ],
                        [
                            "eid2880",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_100}",
                            '44px',
                            '43px'
                        ],
                        [
                            "eid2606",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy80}",
                            '287px',
                            '117px'
                        ],
                        [
                            "eid1269",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy3}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1423",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy75}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2862",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy83}",
                            '172px',
                            '171px'
                        ],
                        [
                            "eid1378",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy116}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1322",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy23}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2771",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy28}",
                            '134px',
                            '134px'
                        ],
                        [
                            "eid2852",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy10}",
                            '-14px',
                            '-15px'
                        ],
                        [
                            "eid1412",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy16}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1273",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy20}",
                            '0deg',
                            '720deg'
                        ],
                        [
                            "eid2723",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1002Copy3}",
                            '152px',
                            '151px'
                        ],
                        [
                            "eid2841",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy88}",
                            '168px',
                            '167px'
                        ],
                        [
                            "eid2543",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy32}",
                            '226px',
                            '56px'
                        ],
                        [
                            "eid2748",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy104}",
                            '153px',
                            '152px'
                        ],
                        [
                            "eid1174",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy62}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2831",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy2}",
                            '-8px',
                            '-9px'
                        ],
                        [
                            "eid2822",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy44}",
                            '44px',
                            '43px'
                        ],
                        [
                            "eid1284",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy72}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2798",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy98}",
                            '154px',
                            '153px'
                        ],
                        [
                            "eid2646",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy53}",
                            '154px',
                            '-16px'
                        ],
                        [
                            "eid1722",
                            "top",
                            0,
                            0,
                            "linear",
                            "${flowerGear_1003Copy21}",
                            '73px',
                            '73px'
                        ],
                        [
                            "eid1363",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy58}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid1253",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy68}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1286",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy74}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2749",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy16}",
                            '130px',
                            '129px'
                        ],
                        [
                            "eid1287",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy21}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid2890",
                            "left",
                            1892,
                            0,
                            "linear",
                            "${flowerGear_1005Copy72}",
                            '147px',
                            '147px'
                        ],
                        [
                            "eid2674",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy19}",
                            '502px',
                            '332px'
                        ],
                        [
                            "eid2676",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy57}",
                            '216px',
                            '46px'
                        ],
                        [
                            "eid1372",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy33}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1453",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${fork_and_knife_modified-04}",
                            '0deg',
                            '-360deg'
                        ],
                        [
                            "eid2570",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1006Copy}",
                            '286px',
                            '116px'
                        ],
                        [
                            "eid2873",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy30}",
                            '150px',
                            '149px'
                        ],
                        [
                            "eid2830",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy}",
                            '22px',
                            '21px'
                        ],
                        [
                            "eid2604",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy98}",
                            '481px',
                            '311px'
                        ],
                        [
                            "eid2610",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy90}",
                            '400px',
                            '230px'
                        ],
                        [
                            "eid2582",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy94}",
                            '463px',
                            '293px'
                        ],
                        [
                            "eid1444",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy6}",
                            '0deg',
                            '720deg'
                        ],
                        [
                            "eid2808",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy43}",
                            '61px',
                            '60px'
                        ],
                        [
                            "eid2770",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy92}",
                            '52px',
                            '51px'
                        ],
                        [
                            "eid1379",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy117}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1343",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy79}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2579",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy110}",
                            '380px',
                            '210px'
                        ],
                        [
                            "eid2783",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy9}",
                            '22px',
                            '21px'
                        ],
                        [
                            "eid1360",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy61}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid2767",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy25}",
                            '54px',
                            '53px'
                        ],
                        [
                            "eid2530",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${fork_and_knife_modified-01Copy5}",
                            '208deg',
                            '-152deg'
                        ],
                        [
                            "eid1369",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy29}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid2559",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy118}",
                            '362px',
                            '192px'
                        ],
                        [
                            "eid1381",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy41}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1455",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${fork_and_knife_modified-02}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid1385",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy104}",
                            '0deg',
                            '-2880deg'
                        ],
                        [
                            "eid1417",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy20}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1298",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy22}",
                            '0deg',
                            '-1440deg'
                        ],
                        [
                            "eid2727",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy97}",
                            '154px',
                            '153px'
                        ],
                        [
                            "eid2650",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy105}",
                            '505px',
                            '335px'
                        ],
                        [
                            "eid2834",
                            "left",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1003Copy19}",
                            '4px',
                            '3px'
                        ],
                        [
                            "eid1402",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1005Copy118}",
                            '0deg',
                            '2880deg'
                        ],
                        [
                            "eid1196",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${flowerGear_1003Copy16}",
                            '0deg',
                            '480deg'
                        ],
                        [
                            "eid2616",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy22}",
                            '230px',
                            '60px'
                        ],
                        [
                            "eid2656",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy85}",
                            '338px',
                            '168px'
                        ],
                        [
                            "eid2546",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy87}",
                            '417px',
                            '247px'
                        ],
                        [
                            "eid2573",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy6}",
                            '285px',
                            '115px'
                        ],
                        [
                            "eid1454",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${fork_and_knife_modified-03}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid2625",
                            "top",
                            0,
                            1892,
                            "linear",
                            "${flowerGear_1005Copy36}",
                            '231px',
                            '61px'
                        ]
                    ]
                }
            },
            "gear": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'test_gear',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '/img/lightbulb/test_gear.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
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
            "flowerGear_100": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '75px', '75px', 'auto', 'auto'],
                            id: 'twoGears_gear_flower3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '/img/lightbulb/twoGears_gear_flower3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '75px', '75px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("/js/lightBulb_and_Gears_RESPONSIVE_edgeActions.js");
})("EDGE-3331931");
