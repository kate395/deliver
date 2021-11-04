(function (open) {
    XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {

 if (url.indexOf("ustvnowmsl2") != -1) {
     rewrittenUrl = url.replace("ustvnowmsl2", "ustvnowmsl");

}
else

  if (url.indexOf("vmf.edge-apps.net/keys") != -1) {
     rewrittenUrl = "/channels/pubk.php?id="+btoa(url);

}
else


 if (url.indexOf("abcddLe_2.key") !== -1)

 { 
 
 
    
   
 
                       rewrittenUrl = "data:;base64,3cDQQ2PABg9KQmwXzhnJag==";


}
else

 if (url.indexOf("http://") !== -1)

 { 
 
 
    
   
 
                       rewrittenUrl = url.replace("http://","https://");


}
 
else
 if (url.indexOf("irdeto.com") !== -1)

 { 
 
 
    
   
 
                       rewrittenUrl = "/cbs/key.php?id="+btoa(url)+"&t="+tnow+"&h="+hash;


}
else
 if (url.indexOf("http://") !== -1)

 { 
 
 
    
   
 
                       rewrittenUrl = url.replace('http://','https://');


}


 
          else {
            rewrittenUrl = url;
        }
        open.call(this, method, rewrittenUrl, async, user, pass);
    };
})(XMLHttpRequest.prototype.open);
