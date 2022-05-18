
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

const byNCsa = {
  name: 'CC&nbsp;BY-NC-SA&nbsp;2.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/2.0/'
};
const byNCnd = {
  name: 'CC&nbsp;BY-NC-ND&nbsp;2.0',
  url: 'https://creativecommons.org/licenses/by-nc-nd/2.0/'
};


// Gets the text to display in the attribution div element
function getAttribution(url) {
  let imageAttribution = '',
      photoLink = '',
      photoTitle = '',
      artistLink = '',
      artistName = '',
      licenseLink = '',
      licenseText = '';
  switch( url ) {
    case 'allosaurus.html': {
      photoLink = 'https://www.flickr.com/photos/7515797@N06/3868672514';
      photoTitle = 'Allosaurus';
      artistLink = 'https://www.flickr.com/photos/7515797@N06';
      artistName = 'mulf';
      licenseLink = 'https://creativecommons.org/licenses/by-nc-nd/2.0/';
      licenseText = 'CC&nbsp;BY-NC-ND&nbsp;2.0';
      break;
    }
    case 'edmontosaurus.html': {
      photoLink = 'https://wordpress.org/openverse/image/acbad9fe-472e-4e34-a4a5-6714ffdad5cf/?referrer=creativecommons.org';
      photoTitle = 'Edmontosaurus';
      artistLink = 'https://www.flickr.com/photos/63052589@N00';
      artistName = 'Dan Arndt';
      licenseLink = byNCsa.url;
      licenseText = byNCsa.name;
      break;
    }  
    default:
      return '<p><small>This is the default attribution text.</small></p>';
  }
  imageAttribution = '<p><small>Image adapted from <a href="' + photoLink + '">"' + photoTitle + '"</a> by <a href="' + artistLink + '">' + artistName + '</a> licensed under <a href="' + licenseLink + '">' + licenseText + '</a></small></p>';
  return imageAttribution;
}

function showAttribution() {
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
  elAttribution.innerHTML = '';
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
