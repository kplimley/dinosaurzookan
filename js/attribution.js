
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
  let imageAttribution = '';
  let photoLink = '';
  let photoTitle = '';
  let artistLink = '';
  let licenseLink = '';
  let licenseText = '';
  switch( url ) {
    case 'allosaurus.html': {
      photoLink = 'https://www.flickr.com/photos/7515797@N06/3868672514';
      photoTitle = 'Allosaurus';
      artistLink = 'https://www.flickr.com/photos/7515797@N06';
      licenseLink = 'https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html';
      licenseText = 'CC&nbsp;BY-NC-ND&nbsp;2.0';
      break;
    }
      
    default:
      return 'This is the default attribution text.';
  }
  console.log(photoLink);
  console.log(photoTitle);
  console.log(artistLink);
  console.log(licenseLink);
  console.log(licenseText);
  // Next line is broken:
  imageAttribution = '<p><small>Image adapted from <a href="' + photoLink + '">"' + photoTitle + '"</a> by <a href="' + artistLink + '">mulf</a> licensed under <a href="' + licenseLink + '">' + licenseText + '</a></small></p>';
  
  // imageAttribution = '<p><small>Image adapted from <a href=" ';
  return imageAttribution;
}

function showAttribution() {
  // console.log('Full URL: ' + this.href );

  // Get the relative URL from the absolute URL
  let url = this.href;
  url = url.replace('file:///Users/sparrowhawk/Sync/GitHub/dinosaurzookan/', '');
  // console.log('Relative URL: ' + url );
  elAttribution.innerHTML = getAttribution(url);
  /*
  elAttribution.innerHTML = '<p><small>Image adapted from <a href="https://www.flickr.com/photos/7515797@N06/3868672514">"Allosaurus"</a> by <a href="https://www.flickr.com/photos/7515797@N06">mulf</a> licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html">CC&nbsp;BY-NC-ND&nbsp;2.0</a></small></p>';
  */
}
function hideAttribution() {
  elAttribution.innerHTML = 'Not hovering over a dino right now';
}
// Hide the attribution text to start
hideAttribution(); 

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


/*
let pattern = /allosaurus/;
let hrefString = dinoImages[0].href;
if ( hrefString.search(pattern) )
  console.log('True');
*/
