/*          DECODEX INSOUMIS
            LES INSOUMIS NUMERIQUES
            VERSION 1 / MARS 2017
            REMERCIEMENT A L'EQUIPE LES DECODEURS DU MONDE


                           ;#+###.
                        '#+##+###++
                     `#++##########:
                    ##+'++##########
                  +###+'+####+######
                 #####;++####+###+'#
                ######:++#++++#####:        .,,.
               +;#####+'+###+'+####      +++######:
              +'+++#+#;'+ +#++####:    #++######'+##
             ##+#######. +########   '##++######++###
            :'+'+###++   +###+###   ####+++####++#####
            ###+#####    ####+##   ###########++++#####
           '+++'''''      ###+#   ######++;###+#''+####'
           ++##'#++        #++   ;+##++++++,   +++######
          ;++++':+               +++++++''      `##+#####
          +##+#+++              ++++++++;        ,##+##++
         .''''';'               ++++++++          ##++#++;
         +#++#+'+              ########            #++++##
         +''+++'               ##+++++;            ##+#+#+
         #++##++              ,##::###             ;#+#++#
         '+++++'              ###:;##'              ######;
        ,++##++;              ###+###               ###+###
        '+##+#+.             .#######               #######
        #######              ####'##:               ###'###
        #+#####              +######                #######
        #+#####              +###++#                ###+###
        #+#+###             ,+###+++                +######
        '+'####.            #####:;`                +##;###
        ,+#####;            #'+##::                ,#+#+##;
         +++###+            #+###+#                ##+#'##
         ######+            #######                ##+#;##
         '+++++'           .#+###+'                ##+#:##
         ;+#####+          +#+####.               #++##+#'
          '+++#+#          ##+####                #+#+#;#
          +####+##         #######               +#######
          .''''+##.        ##+####              ;#####+:`
           ####+###        ##+###+              ++####++
           `'+'''++#       #######             #++##+++
            ###+#####      ##+####            ####+++++
             ##+######`   .##+###+          ,###++####
             `######@@#'  '##+###;         #####'+###
              ;+####++'##,#######:       ';####++###.
               '#######+#####+###,    ,#########++#,
                +#####++#####+###::#####+#####+#++.
                 :#####+#########';#####+++#####+
                   ##########+###++#####++######
                    '#+''+++#'###+'+#+++++;++#,
                      '++####+###:;####++++#;
                        :#######++'####+++
                          :##+###+++##;
                           ##+###'
                           #######
                           ##+####
                           ##+++##
                           ##++###
                           +#+####.
                           .++####'
                            #+#####
                            +####+#
                            #+#####
                            '+####+
                             +#####
                             ######
                             .####+
                               ,:`
*/

var _debug = 0; // 0=quiet, 1=verbose, 2=more verbose, 3= very very verbose
if (_debug) {
    console && console.warn("DEBUG LEVEL", _debug);
}
var base_url = "http://decodex.insoumis.online/decodex_data.json";
var always_refresh = true;
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
                    if (3 <= _debug) {
                        console && console.info("raw json");
                        console && console.log(xhr.responseText);
                    }
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

    if (1 <= _debug)
r       console && console.log('start loadData');
    chrome.storage.local.get('last_update', function(results){
        var new_update = new Date();
        loadJSON(base_url,
                function(data) {
                    if (1 <= _debug)
                        console && console.info("set urls to", data['urls']);
                    chrome.storage.local.set({'urls': data['urls']}, function() {
                    });
                    if (1 <= _debug)
                        console && console.info("set sites to", data['sites']);
                    chrome.storage.local.set({'sites': data['sites']}, function() {
                    });
                    if (1 <= _debug)
                        console && console.info("set last_update to", new_update.getTime());
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
    if (1 <= _debug)
        console && console.log('debunk site ', u);
    // TODO: rajouter les champs manquants
    chrome.storage.local.get(['urls', "sites", "already_visited", "infobulles", "last_update"], function(results){
        if (1 <= _debug) {
            console && console.info("debunkSite : var results");
            console && console.log(results);
        }
        urls = results.urls;
        sites = results.sites;
        debunker = urls.hasOwnProperty(u);
        if (debunker == true) {
            site_id = urls[u];
            if (1 <= _debug) {
                console && console.log('site FOUND ! ', site_id);
            }
            try {
                site_actif     = sites[site_id][2];                // nom du site
                note_decodex   = parseInt(sites[site_id][0]);    // note decodex
                soumission     = parseInt(sites[site_id][4]);      // note insoumis
                notule         = sites[site_id][1];                    // description originale
                slug           = sites[site_id][3];                      // nom normalisé
                proprietaires  = sites[site_id][5];             // propriétaires
                interets       = sites[site_id][6];                  // intérets
                conflits       = sites[site_id][7];                  // exemple de conflits / complicité idéologique
                subventions    = sites[site_id][8];               // Montant des subventions d'état
                sources        = sites[site_id][9];                   // Nos sources (urls séparés par virgule et/ou espace)
                if (2 <= _debug) {
                    console && console.group("tout s'est bien passé");
                    console && console.log('site_actif     =',site_actif     );
                    console && console.log('note_decodex   =',note_decodex   );
                    console && console.log('soumission     =',soumission     );
                    console && console.log('notule         =',notule         );
                    console && console.log('slug           =',slug           );
                    console && console.log('proprietaires  =',proprietaires  );
                    console && console.log('interets       =',interets       );
                    console && console.log('conflits       =',conflits       );
                    console && console.log('subventions    =',subventions    );
                    console && console.log('sources        =',sources        );
                    console && console.groupEnd();

                }
            } catch(e) {
                if (1 <= _debug) {
                    console && console.error("ERREUR DEBUNKER");
                    console && console.error(e);
                    console && console.log(sites[site_id]);
                }
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
            if (1 <= _debug) {
                console && console.log("site non trouvé", u);
            }
            chrome.browserAction.setIcon({
                path: "icone.png",
                tabId: t
            });
        }
        var today = new Date();
        if(always_refresh || (today.getTime() - results.last_update)/1000/60/60 >= 1) {

            if (1 <= _debug) {
                console && console.log("refresh every hour");
            }
            loadData();
        } else {
            if (1 <= _debug) {
                console && console.log("data found in cache");
            }
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
