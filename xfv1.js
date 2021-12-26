

var url = new URL(window.location.href);
var ids =  url.searchParams.get("id");
 var cdcsd =  url.hostname;
  if  (cdcsd !== "mygoodstream.pw")
window.location.replace("https://mygoodstream.pw");

  


        var hlsUri =   (ids) ;

      var manifestUri =  (hlsUri.replace('.m3u8','.mpd'));
 
         var certificateURLx= '/hulu/fairplay_certhulu.der';
 
  
 
 var cdmData = function () {
    var tmp = null;
    $.ajax({
        'async': false,
        'type': "GET",
       // 'global': false,
    //  'dataType' : 'json' ,
         'url': manifestUri,
         'success': function (dataw) {
            tmp = dataw;
        }
    });
    return tmp;
}();


 if (getCookie("mg_auth"))
 var mypost = getCookie("mg_auth") ;
else
 var mypost = "" ;

 var xcx = function () {
    var tmp = null;
    $.ajax({
        'async': false,
        'type': "POST",
       // 'global': false,
    'dataType' : 'json' ,
         'url': "/check.php",
                'data': mypost ,

         'success': function (dataw) {
            tmp = dataw;
        }
    });
    return tmp;
}();

        


function string2Bin(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i));
  }
  return result;
}

function bin2String(array) {
  return btoa(String.fromCharCode.apply(String, array));
}

 

 function ArrayBufferfromBase64(t) {
                         t = atob(t.replace(/-/g, "+").replace(/_/g, "/"));
                        for (var n = new Uint8Array(t.length), i = 0; i < t.length; ++i)
                            n[i] = t.charCodeAt(i);
                        return n
                    } 

 
 
function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
   
    return binary_string;
}

 
 
 
function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
   
    return binary_string;
}

     var drmtype  = browserCheck() ;
    var encrypted = "yes" ;
    
    const container = document.getElementById('pal-player');
const playerConfig = {
    key: '0d994263-ec7e-4590-a821-c7ed3ff02f0b',


 

 
    style : {
        width       : '100%',
        height      : '100%',
        controls    : true
    },
    
    advertising: {
  client          : 'vast',
  tag             : 'https://services.vlitag.com/vpaid/?q=85dc19135b81e13a2043c2442b5ae469&defaultVolume=&page_url=http://mygoodstream.pw'
},

    playback:{
        autoplay: true
    }
}
function base64DecodeUint8Array(input) {
    var raw = window.atob(input);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for(i = 0; i < rawLength; i++)
        array[i] = raw.charCodeAt(i);

    return array;
}






 
const player = new bitmovin.player.Player(container, playerConfig);

const source = {
       title : 'MyGoodStream.pw',
    description : 'Watch all Sports in HD' ,
    watermarkConfig: {
    "top": 10,
    "left": 10,
    "image": "https://i.imgur.com/KFfB8jS.jpg"
},

  
    drm:{}
};
if(encrypted == "no")
{
     //   source.hls = hlsUri;
     //   source.smooth =  smmothp ;
   
   source.dash = manifestUri;


}
else
if( drmtype == 'Widevine'){


 
         jsonAsString = $.xml2json(cdmData);
jsonAsString = jsonAsString.Period.AdaptationSet['0'].ContentProtection["1"].pssh
             var str = atob(jsonAsString)
 
               var sdx =  (str.substring(str.indexOf('eyJ') + 1)); // 01-2020)
sdx  = btoa('e'+sdx )


     var wv="key.php?content="+ sdx +"&drm=widevine&token="+xcx.token+"&t="+tnow+"&h="+hash;



 
    source.dash = manifestUri;
    source.drm.widevine = {
        LA_URL: wv,
  
 
   
    }
}else if( drmtype ==  'PlayReady'){




         jsonAsString = $.xml2json(cdmData);
jsonAsString = jsonAsString.Period.AdaptationSet['0'].ContentProtection["1"].pssh
             var str = atob(jsonAsString)
 
               var sdx =  (str.substring(str.indexOf('eyJ') + 1)); // 01-2020)
sdx  = btoa('e'+sdx )


     var pr="key.php?content="+ sdx +"&drm=widevine&token="+xcx.token+"&t="+tnow+"&h="+hash;

      


    source.dash = manifestUri;
    source.drm.widevine = {
        LA_URL: pr,
        headers : {
          //  'pallycon-customdata-v2': 'eyJkcm1fdHlwZSI6IldpZGV2aW5lIiwic2l0ZV9pZCI6IklOS0EiLCJ1c2VyX2lkIjoieW5xNjM0cjIiLCJjaWQiOiJiaWdidWNrYnVubnkiLCJwb2xpY3kiOiIwNDV5ejUvK3BKbGpBWXRWYWpXZjlWd2c1MTFHekdtcTUrV1V4Y29JOHg4OHhkWHdFQnNvQW1HZHVoWkF6UXU2ZDQ4M3dpaXJOS0tVOWtpenRDRmRnUT09IiwicmVzcG9uc2VfZm9ybWF0Ijoib3JpZ2luYWwiLCJ0aW1lc3RhbXAiOiIyMDIwLTExLTE1VDAxOjIxOjA1WiIsImhhc2giOiJZN0dlcmpPZUNPVXpoejd1UFlQTUlsd283SEtpWUFscGd4WkpqT3F0OHFvPSIsImtleV9yb3RhdGlvbiI6ZmFsc2V9'
        },
        // customData: document.getElementById('customdata').value,
       
    };
}else
if( drmtype ==  'FairPlay'){
    source.hls = hlsUri ;

   source.drm.fairplay = {
    LA_URL: "key.php?content="+ sdx +"&drm=fairplay&token="+xcx.token+"&t="+tnow+"&h="+hash,

  certificateURL: 'cer.cer',
  prepareContentId: function(contentId) {
    alert(contentId)
    var uri = contentId;
    var uriParts = uri.split('://', 1);
    var protocol = uriParts[0].slice(-3);
    uriParts = uri.split(';', 2);
    contentId = uriParts.length>1?uriParts[1]:'';
    return protocol.toLowerCase()=='skd'?contentId:'';
  },
  prepareLicenseAsync: function(ckc) {
    return new Promise(function(resolve, reject) {
      var reader = new FileReader();
      reader.addEventListener('loadend', function() {
        var array = new Uint8Array(reader.result);
        resolve(array);
      });
      reader.addEventListener('error', function() {
        reject(reader.error);
      });
      reader.readAsArrayBuffer(ckc);
    });
  },
  prepareMessage: function(event, session) {
    return new Blob([event.message], {type: 'application/octet-binary'});
  },
  
  useUint16InitData: true,
  licenseResponseType: 'blob'


     
     }
}
 
 


    
    
player.load(source).then(
    function(player) {
        console.log('Successfully created Bitmovin Player instance')
    },
    function(reason) {
        console.log('Error while creating Bitmovin Player instance')
    }
);
