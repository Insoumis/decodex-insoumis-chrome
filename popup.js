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

function bulleStore(e){
    var infobulles;
    var id = parseInt(this.id.replace("check-alert", ""));
    var checked = this.checked;
    chrome.storage.local.get('infobulles', function(results){
        infobulles = results.infobulles;
        if(checked) {
            infobulles[id] = true;
        }
        else {
            infobulles[id] = false;
        }
        chrome.storage.local.set({
            'infobulles': infobulles,
            }
        );
    });
}


function main() {
	console && console.log('start main in popup.js');

    var messages = [
        // gris
        "Attention, nous n'avons pas encore évalué ce média, ou nous n'avons pas pu trouver d'information suffisamment fiable pour nous prononcer. Si vous avez des informations concernant le mode de financement ou l'orientation politique de ce média, n'hésitez pas à nous contacter.",
        // rouge
        "Attention, ce média n'est pas du tout indépendant. Cette catégorie regroupe les médias recevant de grandes subventions publiques (nous notons ainsi tous les médias ayant reçu plus de 1 000 000 €/an de l'état) ou appartenant a de grands groupes industriels/puissance financières qui peuvent influencer le traitement de l'informationm leur ligne éditoriale ou dans certains cas de l'auto-censure. Nous vous conseillons de chercher une source alternative à l'information que vous lisez, voir opposée, pour avoir au moins une seconde source moins partiale.",
        // jaune
        "Attention, ce média n'est pas vraiment indépendant. Cette catégorie regroupe les médias recevant des subventions publique entre 200 000 € et 1 000 000 € / an de la part de l'état, ou qui défendent des intérêts financiers de grands groupes à travers leur ligne éditoriale, ou encore dépendent en grande partie de la publicité (qui oriente souvent la ligne éditoriale ou peut conduire à de l'auto-censure de la part des journalistes). Nous vous conseillons de chercher une source alternative à l'information que vous lisez, voir opposée, pour avoir au moins une seconde source moins partiale.",
        // bleu
        "Ce média reçoit peu de subvention de la part de l'état et ne dépend pas ou peu de recettes publicitaires. Aucun média n'est indépendant ou neutre à 100%, mais celui là est peut être moins influencé par les sphères financières ou politique que les autres. Vous pouvez si vous le souhaitez comparer la même information avec un média un peu plus soumis à l'oligarchie ou au capital, ça peut vous surprendre !",
        // vert
        "Bravo ! Ce média appartient en totalité à ses rédacteurs et ne fait aucune recette publicitaire ! De plus, il ne bénéficie pas ou très peu de subventions publicitaires (inférieures à 20 000 € / an). L'indépendance éditoriale est nécessaire pour une information de qualité. Merci à eux, et merci à vous de les lire ! Vous pouvez si vous le souhaitez comparer la même information avec un média un peu plus soumis à l'oligarchie ou au capital, ça peut vous surprendre !",
        // insoumis !
        "Hé hé, on va pas vous mentir hein : Vous êtes sur un site clairement partisan des Insoumis ! Donc de notre point de vue, c'est un chouette site, vous pouvez lire tout ce que vous y trouvez, et comparer les informations avec des sites un peu plus soumis à l'oligarchie pour voir la différence de traitement !"
    ];

    var icones = [
        // gris
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAH1SURBVHjapNRLiM5hFMfxz5jXzMLKYhYsXCaXIsMkt+xGWYwlRhxKaoopY2M2ysLGwrBhIRuXzEOTDCVlZTVNUSgbSkLJJZeUjcZlbJ63Hn/vzChnc57b+Z7fczlP08TEhEaWUurADnRhPh5hb0R8MIXVGoBacQL70VJMzcFq3JkK2FQqTCnNwjC25KG3aMuJX2N5Vrwb7fiMixExVGfMqCQ4XsBOZpU1/EAfjuIGtqITm3A5pXTwL2BKaWUOgrMRMYDbOJRVrcfh+jy2YST3B1NKK6oK9xRbOwIR8TMiTuMlBvK6UxHRFxHXsRMP0Zp38wdwY/Y3I+JL5Sj6MRNvcKw+GBHjuFLGl8D27J9Wbr2G7iLZ10qyF9nPrQKbs/9eCViIxbk90uCl1OMmqsB3xXsrrTNv9wseNwAuKeNL4Gj23ZWANcXWPlaOoxnbc/d+FTiUZa9NKfUW4wuyfx4R1Trtw0r8woU/gBExmqsEzqSUenK7rQ6sqAsM1sVExFijWu7HMnRgOKW0GYvy3KeUUgs24ED+OOBefvx/13LOPC/L76oke4VvWFqM3UJvRLyfFFgc9r6sZBWaiulxPMC5iLg05W/TAFzDWL7pazifL+fZP31fk0CH0YOrEbHLNDbD9PYk+3X5Uv4beDd/pDXMnm7x7wEA2Vudl/vKGmcAAAAASUVORK5CYII=',
        // rouge
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIESURBVHjapNRLiI9RGMfxz5g/FlYWFizcciliSO9BdqMsWLwLt4SSUkwZGzbKwsbCZcNCNi6RmmQ4SVlZSXnfUDaUhJJLLk3ZiGFszr+Od/7+Fs7mObfn+/zO5Xl6xsbGdGpVWSzFVvRjFh5jV4j1R11aqwNoMo5jLyZlS9OxAne6AXtyhVVZTMEQNqSpd5iWAr/B4qR4B+biCy6GWF9pMyY0AhzLYCeTyhZGMYAjuIGNWI61uFyVxf5xwKos+pITnA2xPoTbOJBUrcLB9jo2YTiNT1RlsaSpcGd2tMMQYv0zxPo0XuFQ2ncqxHogxPo6tuERJqfT/AFck+zNEOuRxlUMYiLe4mh7MsT6O67m/jlwbrLPGq/ewvos2NdGsJfJzmgCe5P90XCYg/mpP9zhp7T9xprA99l/y9vydNwRPOkAXJD758B7ya5vOBTZ0T41rqMXm9vDJvBKkh2qstiTzc9O9kWIdTNPB9CHX7jwBzDE+l7KEjhTlcWW1J/WBjbUbceJtpgQ6/udcnkQi7AUQ1VZrMO8tPa5KotJWI19qXDAg/T5x+dyijwzye9vBHuNb1iYzd3CnhDrD38FZpe9OylZhp5s+Tse4lyI9aWu1aYDuIX76aWv4Xx6nOd/85nQrbaFWI9mmTAaYn2nG+yfwNSeJrsyPYr/Bd5NhbSFqf/a/HsAGnieeoDVMFcAAAAASUVORK5CYII=",
        // jaune
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAH8SURBVHjapNQ7aFRREMbx303WWNhokULBV/AByk0UiSKCRQqR2AkqqIUIAY0QGys7W00jQYKNDwhCEESxSaONIaAYhL2FgoiI4gMfBGw0Bo/FHtezN5tN4YFl7p3Z+c93ztw5WQhB01Vk3TiCPqzFM5yQh89arEoT0FJcxCl0JJGV2IGJVsCsQWGRLcM4DkTPB3TGwu+wNSo+ji58ww15GFsIeBlD8W0Yj3APcziIvTjXRNiQPIw0AousB0+jmlF5GFRk7TgTz28/zkfAKB7gaCz0E73yUAgh1H5Vw6EqhKq3oWp53V+LrQ5VszE+nPg7QtV09F8JIWhLZO+J9q48zMzbEkvwHhfq3jzM4laanwK7on1R6noF/Umx76Vir6NdVQa2R/urlLAeG+PznSYN+ZsXysCPyfeWru1xuzOoNgFuSvNT4GS0/aWE3mRrX0rH0Y5D8e1JGTgWZe9UZAOJf120r+Tz5nQQPfiN643APEzGKYERRXY4PnfWgY3qjuFSXUwepprN8hC2oBvjimwfNsTYV0XWgd04HS8OeIyzzUevVnlNlN9XKvYGP7A58d3HgDx8Whj477BPRiXbkCXRWUzjqjzcbH3bzAdXMBU7fRvXYnNeLpTS1upuk4e5ZBLm5GGiFWxxYG09j3ZXbIr/BT6MF2kFKxb7858BAMnDvzDzyJQxAAAAAElFTkSuQmCC",
        // bleu
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIHSURBVHjapNQ9iJVHFMbx3+veaJEqxRZJoWaJCkr8mOBHCFhsIYx2wSiSBIKwYLbYNNqks3W1UIslTaKwCIsoCSFcKxtlIYKvYGMghCQQYoIaFmzErI7NWZh9vXstnObM1/mfZ+bMmaaUYlBr+u1WHMY41uEOvig5PTCk9QaA1uAUjmF1tfQ2PsC1YcCmVtj02zcxhwMxdR+jEfgvbAnFn2EM/+FCyWl2JeBZTMXwNG7gByziY+zF8QHCpkpO52FVBduGyRjOlJxO4Cd8Far2VLAZHMTVGE83/fb9ZUB8Xh3tayg5PSs5ncMfOBH7zpScJktOV3AELdbEnS8DfhT2+5LTQvdIeAN/4+TSZMnpKS7V/jVwLOwvnaz3sL8K9rgT7Pew73SBI2H/7zi8iw3RvzogIUt+pQv8p3pvddsRx13A3QHAjbV/DbwZdn/HYWd1tIed6xjBJzG81QXOhuxdTb+dqObXh/2t5NSt00lsw3N8twxYcroZVQLnm357KPqjS8COuk8xvSSm5DQ/qJansBlbMdf02314L9YeNf12NT7El/FxwM/x+F8uvYi8NuSPd4L9iSfYVM39iImS078rAqvLPhpKtqOplp/iNr4pOV0c+tsMAPcwH5m+jG8jOb+u5LNq2N9WclqsKmGx5HRtGOyVwGj3wu6OpHhd4PX4SHt461WbXwwABPGiThCuZUYAAAAASUVORK5CYII=",
        // vert
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIGSURBVHjapNQ5aBVRFMbxX/RpCiuLDGjhElxAMTGIG3YKFrFUI24gQuAaMDbayFgIg4XRRgvHxgWDEsQoiGBlFQIKKtgoiKggLuNCwEbiEpv7YDJ5SQRPc+52/ue7y7lNY2NjGlmWJ23Yhc1YiKc4kIbisyms1gDUjNMImF2amoc1uD8VsKmsMMuTORjAtjj0AS0x8TusjIr3oRXfcCUNRX+dMaOS4FQJdiaqrOEXenACt7EdHdiCa1meHJ4AzPKkPQbBhTQUx3APR6KqDThan8cODMZ+X5Ynq6oK95e2dhzSUPxOQ3EOb3AsrjubhqInDcUt7MYTNMfdjANuiv5OGoqRylH0Yhbe42R9MA3FKK6X48vA1uhfVG69hs5Ssu+VZK+jn18Fzoz+ZyVgMZbG9mCDl1KPG6sCP5beW9k64nZH8KwBcFk5vgwcir6zErC2tLUvleOYiZ2x+6gK7I+y12V50l0aXxT9qzQU1TrtQTv+4PI4YBqKoVglcD7Lk67YbqkDK+r2oq8uJg3FcKNa7sUKtGEgy5OtWBLnvmZ5MhsbcSh+HPAwPv6JtRwzL4jyN1eSvcUPLC+N3UV3GopPkwJLh30wKlmNptL0KB7jYhqKq1P+Ng3ANQzHm76JS/FyXv7T9zUJdABduJGGYo9pbIbp7Xn06+Ol/DfwQfxIa5g73eK/AwCsf5zapnlOZAAAAABJRU5ErkJggg==",
        // vert
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIGSURBVHjapNQ5aBVRFMbxX/RpCiuLDGjhElxAMTGIG3YKFrFUI24gQuAaMDbayFgIg4XRRgvHxgWDEsQoiGBlFQIKKtgoiKggLuNCwEbiEpv7YDJ5SQRPc+52/ue7y7lNY2NjGlmWJ23Yhc1YiKc4kIbisyms1gDUjNMImF2amoc1uD8VsKmsMMuTORjAtjj0AS0x8TusjIr3oRXfcCUNRX+dMaOS4FQJdiaqrOEXenACt7EdHdiCa1meHJ4AzPKkPQbBhTQUx3APR6KqDThan8cODMZ+X5Ynq6oK95e2dhzSUPxOQ3EOb3AsrjubhqInDcUt7MYTNMfdjANuiv5OGoqRylH0Yhbe42R9MA3FKK6X48vA1uhfVG69hs5Ssu+VZK+jn18Fzoz+ZyVgMZbG9mCDl1KPG6sCP5beW9k64nZH8KwBcFk5vgwcir6zErC2tLUvleOYiZ2x+6gK7I+y12V50l0aXxT9qzQU1TrtQTv+4PI4YBqKoVglcD7Lk67YbqkDK+r2oq8uJg3FcKNa7sUKtGEgy5OtWBLnvmZ5MhsbcSh+HPAwPv6JtRwzL4jyN1eSvcUPLC+N3UV3GopPkwJLh30wKlmNptL0KB7jYhqKq1P+Ng3ANQzHm76JS/FyXv7T9zUJdABduJGGYo9pbIbp7Xn06+Ol/DfwQfxIa5g73eK/AwCsf5zapnlOZAAAAABJRU5ErkJggg=="
    ];
    var msg_bandeau = [
        "Inconnu",
        "Média carrément soumis !",
        "Média plutôt soumis",
        "Média plutôt insoumis",
        "Média Insoumis : Bravo !",
        "France Insoumise  \\o/"
    ];


    var colors = [
        "#A2A9AE", // gris
        "#F5A725", // rouge
        "#D50303", // jaune
        "#129AF0", // bleu
        "#468847", // vert
        "#468847"  // INSOUMIS AUSSI :)
    ];

    var background = browser.extension.getBackgroundPage();
    if(background.soumis == true) {
        document.querySelector(".content #site-name").innerText = background.site_actif;
        document.querySelector("#notule").innerText = background.notule;
        document.querySelector("#our-opinion").style["color"] = colors[background.soumission];
        document.querySelector("#our-opinion").innerText = messages[background.soumission];
        document.querySelector("#decodex-window").style.display = "block";
        document.querySelector("#verif").classList.remove("active");
        document.querySelector("#decodex-window").classList.add('active');
        document.querySelector("#more-info").href = "http://decodex.insoumis.online/about.html";
    }
    else {
        document.querySelector("#verif").style.display = "block";
        document.querySelector("#decodex-window").classList.remove('active');
        document.querySelector("#verif").classList.add("active");
        document.querySelector("#decodex-window").style.display = "none";

    }

    var params = document.querySelector("#params");
    params.addEventListener("click", function(){
        var parameters = document.querySelector("#parameters");
        if(params.classList.contains("active-p")){
            params.classList.remove("active-p");
            parameters.style.display = "none";
            document.querySelector(".active").style.display = "block";
        }
        else {
            params.classList.add("active-p");
            document.querySelector(".active").style.display = "none";
            parameters.style.display = "block";
        }
    });
    chrome.storage.local.get('infobulles', function(results){
        for(var i=0;i<5;i++){
                if(results.infobulles[i] == true){
                    document.getElementById("check-alert" + i).checked = true;
                }
                else {
                    document.getElementById("check-alert" + i).checked = false;
                }
            }
    });
    document.querySelector('#more-info').addEventListener('click', function(e){
        if(e.target.href!==undefined){
            chrome.tabs.create({url:e.target.href});
        }
        e.preventDefault();
        window.close();
    });
    for(var i=0;i<5;i++){
        document.querySelector("#alert"+i).style.color = colors[i];
    }
}

document.addEventListener('DOMContentLoaded', function () {
    main();
    for(var i=0;i<5;i++){
        document.querySelector('#check-alert'+i).addEventListener('click', bulleStore);
    }
});

