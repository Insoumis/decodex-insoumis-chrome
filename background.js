/*          DECODEX
            LES DECODEURS / LE MONDE
            VERSION 1 / FEVRIER 2017

              ▄▓▄
            ▄▓▓█       ▄▄▄▓▓▓▓▄╦          ▄▓▄               ▄▓▄▄
           ▓▓▓▓▄,,▄▄▓▓▓▓▓▓▓▓▓▓▓▓▓╕    ╓▄▓▓▓▓▓▓▓▄        ,▄▓▓▓▓▓▓▓▓▄╦
       ╒▌ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄  ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄▄▄▄▄▓▓▌
       ╫▓ ╙▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▀Γ ▀█▓▓▓▓▓▓▓▓▓▓▓▓▓█▀  ▀█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▀Γ
        █▓▄ Γ▀▀▀▀▀ΓΓ ,  █▓▓▓▓▓▓▓▓▓▌  Σ▓▄,╙█▓▓▓▓▓▓▓▓▓▌   ▀█▓▄,Γ▀█▓▓▓▓▓▓▓▓█
                     ▐▓ ▐▓▓▓▓▓▓▓▓▓▌    ╙▓Q ▓▓▓▓▓▓▓▓▓▌       ▀█▌  ▓▓▓▓▓▓Γ
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌          ▄▓▓▓▓▓▓▓
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌       ⌐ ▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌      ▓ ╟▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▐▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓µ     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓      ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ╟▓▓▓▓▓▓▓█       ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ▐▀ ▓▓▓▓▓█▀         ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                      ╓▓▓▓█Γ            ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                      █▀                ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
               ▄▄▓▓▓▓▓▓▓▓▓▓▓▄╦          ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▓
          ,▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄▄▓▓▌   ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▓▄,,▄▓╕
       ╓▄▓▓▓▓▓▓██████▓▓▓▓▓▓▓▓▓▓▓▓█▀     ▓▌ ▓▓▓▓▓▓▓▓▓▀     ▓▓ █▓▓▓▓▓▓▓▓▓▓▓▓█▀
     ▄▓▓██▀Γ     ≈4▄▄, ▀▓▓▓▓▓█▀Γ        ▓▌ ▓▓▓▓▓█▀Γ        ▓▌ ▀█▓▓▓▓▓▓█▀Γ
   ╙▓█Γ              █▓▄ ██▀            ▓▌ ██▀Γ             ▀█▄╦ ▀██▀
                      ╙▀                ▀`                     ▀▀
 */
var base_url = "http://decodex.insoumis.online/decodex_data.json";
var urls = "";
var note = null;
var soumission = null;
var notule = ""
var active_url = "";
var debunker = false;
var clean_url = "";

var proprietaires = '';
var interets      = '';
var conflits      = '';
var subventions   = '';
var sources       = '';

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console && console.log("Le Décodex insoumis est installé");
        loadData();
        var last_update = new Date();
        chrome.storage.local.set(
            {
                'infobulles': [false, true, true, true, false],
                'last_update': last_update.getTime(),
            }
        );
        chrome.tabs.create({url: "install.html"});

    }
});


function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success) {
                    //console && console.info("raw json");
                    //console && console.log(xhr.responseText);
                    success(JSON.parse(xhr.responseText));
                }
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


function loadData(){
    chrome.storage.local.get('last_update', function(results){
console && console.log('updating datas');
        var new_update = new Date();
        loadJSON(base_url,
             function(data) {
                chrome.storage.local.set({'urls': data['urls']}, function() {
                });
                chrome.storage.local.set({'sites': data['sites']}, function() {
                });
                chrome.storage.local.set({'last_update': new_update.getTime()}, function() {
                });

             }
        );
    });
}


function lastSlash(u){
	if(u.lastIndexOf('/') == u.length-1) {
        return u.substring(0, u.length-1);
    }
	else {
		return u;	
	}
}


function url_cleaner(u){
    return u.replace("http://", "").replace('www.', "").replace("https://", "");
}

function youtubeChannel(u){
    var elms = u.split('/');
    if(elms.length > 2){
        return elms[0] + '/' + elms[1] + "/" + elms[2];
    }
    else{
        return u;
    }
}


function debunkSite(u, t, d){
    console && console.log('debunk site ', u);
	// TODO: rajouter les champs manquants
    chrome.storage.local.get(['urls', "sites", "already_visited", "infobulles", "last_update"], function(results){
		console && console.info("debunkSite : var results");
		console && console.log(results);
        urls = results.urls;
        sites = results.sites;
        debunker = urls.hasOwnProperty(u);
        if(debunker == true){
            site_id = urls[u];
            try {
                site_actif = sites[site_id][2];                // nom du site
                note_decodex = parseInt(sites[site_id][0]);    // note decodex
                soumission = parseInt(sites[site_id][4]);      // note insoumis
                notule = sites[site_id][1];                    // description originale
                slug = sites[site_id][3];                      // nom normalisé
                proprietaires = sites[site_id][5];             // propriétaires
                interets = sites[site_id][6];                  // intérets
                conflits = sites[site_id][7];                  // exemple de conflits / complicité idéologique
                subventions = sites[site_id][8];               // Montant des subventions d'état
                sources = sites[site_id][9];                   // Nos sources (urls séparés par virgule et/ou espace)
            } catch(e) {
                console && console.error(e);
            }

            chrome.browserAction.setIcon({
                path: "img/icones/icon" + (soumission) + ".png", // note
                tabId: t
            });
            if(results.infobulles[soumission] == true && d == true){  // note
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {text: "soumission"+soumission}, function(response) { // note
                    });
                });
            }
        }
        else {
            chrome.browserAction.setIcon({
                path: "icone.png",
                tabId: t
            });
        }
        var today = new Date();
        if((today.getTime() - results.last_update)/1000/60/60 >= 1) {
			console && console.log("refresh every hour");
            loadData();
        } else {
			console && console.log("data found in cache");
		}
    });
}


function checkSite(do_display){
    chrome.tabs.getSelected(null,function(tab) {
        active_url = lastSlash(tab.url);
        if(active_url.indexOf("chrome-extension://") == 0) { return;}
            // YOUTUBE
            if(active_url.indexOf("youtube.com/") > -1){
                if(active_url.indexOf("channel") == -1){
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, {text: 'report_back'}, function(response){
                            clean_url = response.farewell.replace('https://www.', "");
                            debunkSite(clean_url, tab.id, do_display);
                        });
                    });
                }
                else {
                    clean_url = youtubeChannel(url_cleaner(active_url));
                    debunkSite(clean_url, tab.id, do_display);
                }
            }
            // SOCIAL NETWORKS HOMEPAGE
            else if(active_url == 'https://www.facebook.com' || active_url == 'https://twitter.com' || active_url == 'https://www.youtube.com'){
                clean_url = url_cleaner(active_url);
                debunkSite(clean_url, tab.id, do_display);
            }
            // OTHER URLS
            else {
                matches = []
                for (var key in urls) {
                    if (!urls.hasOwnProperty(key)) continue;
                    var index = active_url.indexOf(key);
                    if(index != -1) {
                    console.log(active_url + " --- " + key);
                        if((active_url.indexOf('http://www.'+ key) == 0 || active_url.indexOf('https://www.'+ key) == 0 || active_url.indexOf('http://'+ key) == 0 || active_url.indexOf('https://'+ key) == 0)
                            && index != 0
                            && (active_url[index-1] == "/" || active_url[index-1] == ".")
                            && key != "facebook.com"
                            && key != "twitter.com") {
                                matches.push(key);
                        }
                    }
                }
                tampon = "";
                for(var url_i=0;url_i<matches.length;url_i++){
                    if(matches[url_i].length > tampon.length){
                        tampon = matches[url_i];
                    }
                }
                clean_url = tampon;
                debunkSite(clean_url, tab.id, do_display);
            }
    });
}


chrome.tabs.onActivated.addListener(function (tabId, tab) {
    checkSite(false);
});

chrome.windows.getCurrent(function (tabId, tab) {
    checkSite(false);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    checkSite(changeInfo.status && changeInfo.status == "complete");
});

chrome.windows.onFocusChanged.addListener(function (tabId, tab) {
    checkSite(false);
});


chrome.browserAction.onClicked.addListener(function (tabId, tab) {
    checkSite(false);
});

chrome.tabs.onCreated.addListener(function (tabId, tab) {
    checkSite(true);
});
