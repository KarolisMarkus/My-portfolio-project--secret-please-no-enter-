"use strict";

/* HEADER */



/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */
/**
 * Creates not more than 4 cards.
 * @param {array} data - array of objects with parameters {title, number, icon}
 * @returns HTML rendered cards 
 */
function renderCards( data ){
    var HTML='';
    for (var i=0; i<data.length; i++){
        HTML += '<div class="card">\
                    <div class="icon fa fa-'+data[i].icon+'"></div>\
                    <div class="number">'+data[i].number+'</div>\
                    <div class="title">'+data[i].title+'</div>\
                </div>';
    }
    return HTML;
}

/* SKILLS */



/* LATEST WORKS */



/* JOB HISTORY */



/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */

function renderSocialIcon ( iconData ) {
    var HTML = "";
    if ( !Array.isArray(iconData) || iconData.length === 0 ) {
        return HTML;
    }
    for (var i=0; i<iconData.length; i++ ){
        console.log(iconData[i]);
        
        if ( typeof( iconData[i] ) !== "string" || ""+iconData[i].length ===0) {
            continue;
        }
        HTML += '<div class="icon fa fa-'+iconData[i]+'"></div>';
    }
    return HTML;
}

/* BACKT TO TOP */