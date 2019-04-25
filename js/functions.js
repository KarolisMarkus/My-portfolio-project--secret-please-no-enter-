"use strict";

/* HEADER */



/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */

// waaataaafaaaak why this so bad?

/* STATISTICS and SERVICE OFFERS */
/**
 * Creates not more than 4 cards.
 * @param {array} data - array of objects with parameters {title, number, icon}
 * @returns HTML rendered cards 
 */
// function renderCards( data ) {
//     var HTML = '',
//         good_ones = 0;
    
//     if ( !Array.isArray(data) || data.length === 0 ) {
//         return HTML;
//     }

//     for ( var i=0; i<data.length; i++ ) {
//         // tikriname ar yra reikiamos reiksmes objekte
//         if ( !data[i].icon ||
//              typeof(data[i].icon) !== 'string' ||
//              data[i].icon.length < 1 ||
//              !data[i].number ||
//              (''+data[i].number).length > 9 ||
//              !data[i].title ||
//              typeof(data[i].title) !== 'string' ||
//              data[i].title.length < 1 ) {
//             continue;
//         }
//         // tikriname ar nevirsijome leistimu sugeneruoti elementu skaiciaus
//         if ( good_ones >= 4 ) {
//             break;
//         }
//         HTML += '<div class="card">\
//                     <i class="fa fa-'+data[i].icon+'"></i>\
//                     <div class="number">'+data[i].number+'</div>\
//                     <div class="title">'+data[i].title+'</div>\
//                 </div>';
//         good_ones++;
//     }
//     return HTML;
// }
function renderCards( data ){
    var HTML='';
    if (typeof data[1].blablabla === 'undefined') {
        for (var i=0; i<data.length; i++){
            HTML += '<div class="card">\
                        <div class="icon fa fa-'+data[i].icon+'"></div>\
                        <div class="number">'+data[i].number+'</div>\
                        <div class="title">'+data[i].title+'</div>\
                    </div>';
        } 
    } else {
        for (var i=0; i<data.length; i++){
                HTML += '<div class="card moving-card">\
                            <div class="icon fa fa-'+data[i].icon+'"></div>\
                            <div class="title">'+data[i].title+'</div>\
                            <div class="text-bla">'+data[i].blablabla+'</div>\
                        </div>';
            }
            // if (data[1].blablabla.length !== 0) {}   
    }
    return HTML;
}

/* SKILLS */
/**
 * Creates progress bars with percentages
 * @param {array} iconData list of percentage and title {value, title}
 * @returns HTML code of rendered progress bars
 */
function renderProgressBars ( progress_data){
    var HTML = "";
    if ( !Array.isArray(progress_data) || progress_data.length === 0 ) {
        return HTML;
    }
    for ( var i=0; i<progress_data.length; i++ ) {
        if ( !progress_data[i].title ||
             typeof(progress_data[i].title) !== 'string' ||
             progress_data[i].title.length < 1 ||
             progress_data[i].title.length > 30 ||
             !progress_data[i].value ||
             typeof(progress_data[i].value) !== 'number' ||
             progress_data[i].value < 0 ||
             progress_data[i].value > 100 ) {
            continue;
        }
        HTML += '<div class="progress-bar">\
                    <div class="title">'+progress_data[i].title+'</div>\
                    <div class="bar">\
                        <div class="value" style="width: '+progress_data[i].value+'%;">\
                            <div class="loading-part">\
                                <div class="vertical-line"></div>\
                                <div class="text-value">'+progress_data[i].value+'%</div>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
    }

    return HTML;
}

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
        if ( typeof( iconData[i] ) !== "string" || ""+iconData[i].length ===0) {
            continue;
        }
        HTML += '<div class="icon fa fa-'+iconData[i]+'"></div>';
    }
    return HTML;
}
