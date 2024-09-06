"use strict"
/* 1. Declare variables to hold: 
 *    - the image attribution, 
 *    - the current image, and 
 *    - the attribution element
 * 2. Add event listener to each thumbnail image
 * 3. When event listener fires (on hover): 
 *    - update the image attribution string
 *    - update the attribution element with this string
 */

let imageAttribution = "";
let currentImage;
const elAttribution = document.getElementById('attribution');

// Get the node list of <a> elements with the hasAttribution class
let dinoImages = document.getElementsByClassName('hasAttribution');

// Add event listeners for each <a> element with the hasAttribution class
for( let i = 0; i < dinoImages.length; i++ ) {
  console.log(`Number of images with attribution: ${dinoImages.length}`);
  dinoImages[i].addEventListener('mouseover', showAttribution, false);
  dinoImages[i].addEventListener('focus', showAttribution, false);
  dinoImages[i].addEventListener('mouseout', hideAttribution, false);
  dinoImages[i].addEventListener('blur', hideAttribution, false);
}

hideAttribution(); // Hide the attribution text to start

function hideAttribution() {
  elAttribution.style.visibility = 'hidden';
}

function showAttribution() {
  if (this.href) {
    elAttribution.innerHTML = getAttribution(this.href);
  } else {
    console.log('Error: showAttribution(): "this" does not have an href');
  }
  elAttribution.style.visibility = 'visible';
}

// Gets the text to display in the attribution div element
function getAttribution(url) {  
  let imageAttribution = '<p><small>This is the default attribution text.</small></p>';
  url = url.split('/').pop().split('.').shift();
  // console.log(`Inside getAttribution(): variable url is now ${url}`);
  if (dinoData[url] !== undefined) {
    let thisDino = dinoData[url];
    let photoLink = thisDino.photoLink; // I'm not using this value on the index page. Keep or remove?
    let photoTitle = thisDino.photoTitle;
    let artistLink = thisDino.artistLink; // I'm not using this value on the index page. Keep or remove?
    let artistName = thisDino.artistName;
    let licenseLink = thisDino.licenseLink; // I'm not using this value on the index page. Keep or remove?
    let licenseText = thisDino.licenseText;
    imageAttribution = `<p><small>Image adapted from "${photoTitle}" by ${artistName} licensed under ${licenseText}</small></p>`;
  }  
  return imageAttribution;
}
/*
function getUrl(context) {
  let url = '';
  if (context && context.href) { 
    console.log('We have a context and a context.href!');
    url = context.href;
  } else {
    console.log('We are missing either context or context.href');
    url = window.location;
  }
  url = url.replace('file:///Users/sparrowhawk/Sync/GitHub/dinosaurzookan/', '');
  url = url.replace('http://127.0.0.1:3000/', '');
  url = url.replace('file:///Volumes/32-GB%20Transcend%20USB/dinosaurzookan/', '');
  url = url.replace('.html', '');
  return url;
}
*/


