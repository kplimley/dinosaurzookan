
// Print window width (at time of loading) to footer (dev only)
let winWidth = window.screen.width;
let footOutput = '<i>Window width: ';
footOutput += winWidth;
footOutput += ' </i>';
// console.log(footOutput);
let elFootOutput = document.getElementById('foot-output');
elFootOutput.innerHTML = footOutput;

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



// Gets the text to display in the attribution div element
function getAttribution(url) {  
  let imageAttribution = '<p><small>This is the default attribution text.</small></p>';
  if (dinoData[url] !== undefined) {
    let thisDino = dinoData[url];
    let photoLink = thisDino.photoLink; // I'm not using this value on the index page. Keep or remove?
    let photoTitle = thisDino.photoTitle;
    let artistLink = thisDino.artistLink; // I'm not using this value on the index page. Keep or remove?
    let artistName = thisDino.artistName;
    let licenseLink = thisDino.licenseLink; // I'm not using this value on the index page. Keep or remove?
    let licenseText = thisDino.licenseText;
    imageAttribution = '<p><small>Image adapted from "' + photoTitle + '" by ' + artistName + ' licensed under ' + licenseText + '</small></p>';
  }  
  return imageAttribution;
}

function getUrl(context) {
  let url = '';
  if (context && context.href) { 
    url = context.href;
  } else {
    url = window.location;
  }
  url = url.replace('file:///Users/sparrowhawk/Sync/GitHub/dinosaurzookan/', '');
  url = url.replace('http://127.0.0.1:3000/', '');
  url = url.replace('file:///Volumes/32-GB%20Transcend%20USB/dinosaurzookan/', '');
  url = url.replace('.html', '');
  return url;
}

function showAttribution() {
  // Get the relative URL from the absolute URL
  // Instead of using replace(), what can I do?
  //let url = this.href || window.location;
  
  let context = this;
  // getUrl(context);
  /*
  url = url.replace('file:///Users/sparrowhawk/Sync/GitHub/dinosaurzookan/', '');
  url = url.replace('http://127.0.0.1:3000/', '');
  url = url.replace('file:///Volumes/32-GB%20Transcend%20USB/dinosaurzookan/', '');
  
  // Modified function to not pass the relative url, but rather the dinosaur name taken from the url
  url = url.replace('.html', '');
  */

  elAttribution.innerHTML = getAttribution( getUrl(context) );
  elAttribution.style.visibility = 'visible';
}

function hideAttribution() {
  elAttribution.style.visibility = 'hidden';
}
hideAttribution(); // Hide the attribution text to start

// Get the node list of <a> elements with the hasAttribution class
let dinoImages = document.getElementsByClassName('hasAttribution');

// Add event listeners for each <a> element with the hasAttribution class
for( let i = 0; i < dinoImages.length; i++ ) {
  console.log(dinoImages.length);
  dinoImages[i].addEventListener('mouseover', showAttribution, false);
  dinoImages[i].addEventListener('focus', showAttribution, false);
  dinoImages[i].addEventListener('mouseout', hideAttribution, false);
  dinoImages[i].addEventListener('blur', hideAttribution, false);
}

