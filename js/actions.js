"use strict";

/* HEADER */
window.onscroll = function() {stickToTop()};

$('#header .hamburger').click(function(){
    $(this).toggleClass('open');
});

/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */

document.getElementById('stats_cards').innerHTML = renderCards( statistics );

/* SKILLS */

document.getElementById('skills_bars').innerHTML = renderProgressBars( skills );


/* LATEST WORKS */



/* JOB HISTORY */


document.getElementById('offerings').innerHTML = renderCards( services );

/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */

document.getElementById('social').innerHTML = renderSocialIcon( icons );


/* BACKT TO TOP */
