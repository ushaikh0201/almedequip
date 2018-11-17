/*
* Export required google config object and url. Node environment variable resposible to change the site url and base url
*/
function getEnvURL() {
    var site_url = "http://localhost:3000";
    var base_url = "http://127.0.0.1:4200";
    if(typeof process.env.NODE_ENV != 'undefined'){
        switch (process.env.NODE_ENV) {
            case 'prod':
                site_url = base_url = "http://adminca.herokuapp.com"
                break;
            case 'production':
                site_url = base_url = "http://adminca.herokuapp.com"
                break;
            case 'ng-dev':
                site_url = "http://localhost:3000"
                base_url = "http://localhost:4200"
                break;
            case 'node-dev':
                site_url = base_url = "http://localhost:3000"
                break;
            default:
                break;
        }
    }
    return {SITEURL:site_url, BASEURL:base_url};
}
var urlDataSet = getEnvURL();

module.exports = {
    BASEURL: urlDataSet.BASEURL,
    SITEURL: urlDataSet.SITEURL,
    status: {
        "active": "5a17c482ccc3da1af057b295",
        "inactive": "5a17c495ccc3da1af057b296",
        "pending": "5a17c4b1ccc3da1af057b297",
        "approved": "5a17c4d4ccc3da1af057b298",
        "rejected": "5a17c4e1ccc3da1af057b299",
        "success": "5a2f89b39807e298fcb63b43",
        "failed": "5a2f89be9807e298fcb63b44",
        "fund_release_request": "5a744f75e2026d0e79a18581",
        "paid":"5a7aef47e2026d764193b7a9",
        "delayed": "5a672879ccc3da0b58310e5c",
    },
    userStatusList: {
        "5a17c482ccc3da1af057b295": {
            "label": "Active",
            "value": "5a17c482ccc3da1af057b295"
        },
        "5a17c495ccc3da1af057b296": {
            "label": "Inactive",
            "value": "5a17c495ccc3da1af057b296"
        }
    },
    roles:{
        "super_admin": "5a39f1cfccc3da035831674c", 
        "admin": "5a39f1efccc3da035831674d",
        "general_user": "5a39f1f8ccc3da035831674e"
    },
    userRoleList:{
        "5a39f1cfccc3da035831674c": {
            "label": "Super Admin",
            "value": "5a39f1cfccc3da035831674c"
        },
        "5a39f1efccc3da035831674d": {
            "label": "Admin",
            "value": "5a39f1efccc3da035831674d"
        },
        "5a39f1f8ccc3da035831674e": {
            "label": "General User",
            "value": "5a39f1f8ccc3da035831674e"
        }
    },
    igp:{                       //Investment Gathering Period: stated from business approved by SA
        "igp_months": 2,        //Number of months to over igp
        "igp_days": 60,         //Number of days to over igp
        "igp_request_days": 5    //Number of days to release request behalf of BO's get the TNF
    },
    roiPayback:{
        //"next_due_date_interval": 30, //Number of days: next due date of roi payback will reminde/display after this number of days
        "next_due_date_interval": 1,    //Number of Month: next due date of roi payback will reminde/display after this number of days
        "before_due_date_interval": 5  //Number of days: to generate the invoice before the upcomming due date
    },
    transaction_type:{
        "cp_increased":"5a8282c7e2026d114ea1f6bd",
        "cp_decreased":"5a8282ece2026d114ea1f6be"
    },
    investmentOptions :{
        "normal":"5a38b3d20a4856ad34b14708",
        "pledge":"5a2a66f172c46d81390701f7",
        "insurance":"5a2a66f172c46d81390701f8",
        "system": "5a2a66f172c46d81390701f6",
        "escrow": "5a2a66f172c46d81390701f9"
    },
    instaConf: {
        clientID: 'cd16f9fa598943aaa7781319044c2b67',
        clientSecret: 'bc2d680cb31640fcb39b56f2daf0874b',
        callbackURL: urlDataSet.SITEURL + '/api/instagram/auth/callback', // whatever url creates here, it must be set in instagram app as callback url
        passReqToCallback: true
    },
    facebookConf: {
        clientID: '1791342964494191',
        clientSecret: 'f677cb07bf57c145e610ae1a44be4e57',
        callbackURL: urlDataSet.SITEURL + '/api/facebook/auth/callback' // whatever url creates here, it must be set in instagram app as callback url
    },
    linkedinConf: {
        clientID: '81x6obvdzso9os',
        clientSecret: 'NjhkmEQKjEQ7sSNm',
        callbackURL: urlDataSet.SITEURL + '/api/linkedin/auth/callback' // whatever url creates here, it must be set in instagram app as callback url
    },
    youtubeConf : {
        clientID: '1082289889103-nhcicj2oraq1985tv60dilccmcukcb93.apps.googleusercontent.com',
        clientSecret: 'RRt5KD9YHZnk2so3IyNBF_Pc', 
        callbackURL: urlDataSet.SITEURL + '/api/youtube/auth/callback', // whatever url creates here, it must be set in instagram app as callback url
        passReqToCallback: true
    }    
}