"use strict";

/* VARIABILI GLOBALI */

/* *** SPINNER *** */


const SPINNER_TITLE_LEFT = document.querySelector(".spinner-title-from-left");
const SPINNER_TITLE_RIGHT = document.querySelector(".spinner-title-from-right");


//  KEYFRAMES

const SPINNER_LEFT_KEYFRAME = [
  { opacity: '0', left: '0' },
  { opacity: '1', left: '50%' }

];

const SPINNER_RIGHT_KEYFRAME = [
  { opacity: '0', right: '0' },
  { opacity: '1', right: '50%' }

];

// TIMING

const SPINNER_LEFT_KEYFRAME_TIMING = {
  duration: 800,
 fill: "forwards"
}

const SPINNER_RIGHT_KEYFRAME_TIMING = {
  duration: 800,
 fill: "forwards"
}

SPINNER_TITLE_LEFT.animate(SPINNER_LEFT_KEYFRAME, SPINNER_LEFT_KEYFRAME_TIMING);
SPINNER_TITLE_RIGHT.animate(SPINNER_RIGHT_KEYFRAME, SPINNER_RIGHT_KEYFRAME_TIMING);