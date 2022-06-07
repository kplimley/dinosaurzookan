
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
const byNC = {
  name: 'CC&nbsp;BY-NC&nbsp;2.0',
  url: 'https://creativecommons.org/licenses/by-nc/2.0/'
}


// Gets the text to display in the attribution div element
function getAttribution(url) {
  let imageAttribution = '',
      photoLink = '',
      photoTitle = '',
      artistLink = '',
      artistName = '',
      licenseLink = '',
      licenseText = '';
  let thisDino = null;
  switch( url ) {
    case 'allosaurus.html': { thisDino = dinoData.allosaurus; break; }
    case 'edmontosaurus.html': { thisDino = dinoData.edmontosaurus; break; }  
    case 'stegosaurus.html': { thisDino = dinoData.stegosaurus; break; }  
    default:
      return '<p><small>This is the default attribution text.</small></p>';
  }
  photoLink = thisDino.photoLink;
  photoTitle = thisDino.photoTitle;
  artistLink = thisDino.artistLink;
  artistName = thisDino.artistName;
  licenseLink = thisDino.licenseLink;
  licenseText = thisDino.licenseText;
  imageAttribution = '<p><small>Image adapted from "' + photoTitle + '" by ' + artistName + ' licensed under ' + licenseText + '</small></p>';
  return imageAttribution;
}

function showAttribution() {
  // Get the relative URL from the absolute URL
  // Instead of using replace(), what can I do?
  let url = this.href;
  url = url.replace('file:///Users/sparrowhawk/Sync/GitHub/dinosaurzookan/', '');
  url = url.replace('http://127.0.0.1:3000/', '');
  url = url.replace('file:///Volumes/32-GB%20Transcend%20USB/dinosaurzookan/', '');
  
  // Modified function to not pass the relative url, but rather the dinosaur name taken from the url
  // url = url.replace('.html', '');
  elAttribution.innerHTML = getAttribution(url);
  /*
  elAttribution.innerHTML = '<p><small>Image adapted from <a href="https://www.flickr.com/photos/7515797@N06/3868672514">"Allosaurus"</a> by <a href="https://www.flickr.com/photos/7515797@N06">mulf</a> licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html">CC&nbsp;BY-NC-ND&nbsp;2.0</a></small></p>';
  */
}
function hideAttribution() {
  elAttribution.innerHTML = '';
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


/*
let pattern = /allosaurus/;
let hrefString = dinoImages[0].href;
if ( hrefString.search(pattern) )
  console.log('True');
*/

const dinoData = {
  allosaurus: {
    sciName: "Allosaurus fragilis",
    japaneseName: "アロサウルス",
    period: "Jurassic",
    found: "North America, Germany, Tanzania",
    group: "Theropod",
    diet: "meat",
    dinoLength: "8 to 13 m",
    dinoHeight: "4.5 to 5 m",
    dinoWeight: "3300 lbs",
    topSpeed: "30 to 55 kph",
    features: "",
    photoTitle: "Allosaurus",
    photoLink: "https://www.flickr.com/photos/7515797@N06/3868672514", 
    artistName: "mulf",
    artistLink: "https://www.flickr.com/photos/7515797@N06",
    licenseText: byNCnd.name,
    licenseLink: byNCnd.link
  },
  edmontosaurus: {
    sciName: "Edmontosaurus regalis",
    japaneseName: "エドモントサウルス",
    period: "Late Cretaceous",
    found: "North America",
    group: "Hadrosaur",
    diet: "plants",
    dinoLength: "",
    dinoHeight: "",
    dinoWeight: "",
    features: "Hundreds of diamond-shaped teeth, used to grind tough plants",
    photoTitle: "Edmontosaurus",
    photoLink: "https://wordpress.org/openverse/image/acbad9fe-472e-4e34-a4a5-6714ffdad5cf/?referrer:creativecommons.org",
    artistName: "Dan Arndt",
    artistLink: "https://www.flickr.com/photos/63052589@N00",
    licenseText: byNCsa.name,
    licenseLink: byNCsa.link
  },
  pachycephalosaurus: {
    sciName: "",
    japaneseName: "パキケファロサウルス",
    period: "Late Cretaceous",
    found: "",
    group: "",
    diet: "plants",
    dinoLength: "",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "Very hard head",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["Little Kids First Big Book of Dinosaurs (National Geographic Kids)"]
  },
  parasaurolophus: {
    sciName: "Parasaurolophus walker",
    japaneseName: "パラサウロロフス",
    period: "Late Cretaceous",
    found: "North America",
    group: "Ornithopod",
    diet: "plants",
    dinoLength: "9 m",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "large crests",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null
  },
  pentaceratops: {
    sciName: "Pentaceratops sternbergi",
    japaneseName: "ペンタケラトプス",
    period: "Late Cretaceous",
    found: "",
    group: "",
    diet: "",
    dinoLength: "",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "Five horns on its head, large frill",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["Little Kids First Big Book of Dinosaurs (National Geographic Kids)"]
  },
  plesiosaur: {
    sciName: "Plesiosaurus dolichodeirus",
    japaneseName: "プレシオサウルス",
    period: "",
    found: "",
    group: "",
    diet: "plants",
    dinoLength: "",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null
  },
  protoceratops: {
    sciName: "Protoceratops andrewsi",
    japaneseName: "プロトケラトプス",
    period: "Late Cretaceous",
    found: "Mongolia",
    group: "",
    diet: "plants",
    dinoLength: "1-2 m",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null
  },
  pteradactyl: {
    sciName: "Pterodactylus antiquus",
    japaneseName: "プテロダクティルス",
    period: "",
    found: "",
    group: "",
    diet: "",
    wingspan: "",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null
  },
  pteranodon: {
    sciName: "Pteranodon sternbergi",
    japaneseName: "プテラノドン",
    period: "Late Cretaceous",
    found: "USA",
    group: "Pterosaur",
    diet: "meat",
    wingspan: "3 m wingspan",
    dinoHeight: "",
    dinoWeight: "32 kg",
    features: "",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null
  },  
  quetzalcoatlus: {
    sciName: "Quetzalcoatlus northropi",
    japaneseName: "ケツァルコアトルス",
    period: "Cretaceous",
    found: "USA",
    group: "Pterosaur",
    diet: "meat",
    wingspan: "12 m wingspan",
    dinoWeight: "200 to 250 kg",
    topSpeed: "",
    features: "",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["https://museumsvictoria.com.au/melbournemuseum/resources/dinosaur-walk/", "https://en.wikipedia.org/wiki/Quetzalcoatlus"]
  },
  riojasaurus: {
    sciName: "Riojasaurus incertus",
    japaneseName: "リオハサウルス",
    period: "Late Triassic",
    found: "Argentina",
    group: "Sauropod",
    diet: "plants",
    dinoLength: "10 m ?",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null
  },
  spinosaurus: {
    sciName: "Spinosaurus aegyptiacus",
    japaneseName: "スピノサウルス",
    period: "Late Cretaceous",
    found: "",
    group: "Theropod",
    diet: "meat (fish)",
    dinoLength: "15 to 17 m",
    dinoHeight: "6 to 7 m",
    dinoWeight: "",
    topSpeed: "",
    features: "Large sail on its back, long jaw filled with sharp teeth",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["Little Kids First Big Book of Dinosaurs (National Geographic Kids)"]
  },
  stegosaurus: {
    sciName: "Stegosaurus armatus",
    japaneseName: "ステゴザウルス",
    period: "Late Jurassic",
    found: "North America &amp; Europe",
    group: "",
    diet: "plants",
    dinoLength: "8 to 9 m",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "6 to 7 km/h max",
    features: "Spiked tail, plates on its back",
    photoTitle: "Stegosaurus",
    photoLink: "https://www.flickr.com/photos/95575701@N00/1344393606",
    artistName: "fractalx",
    artistLink: "https://www.flickr.com/photos/95575701@N00",
    licenseText: byNC.name,
    licenseLink: byNC.link
  },
  struthiomimus: {
    sciName: "Struthiomimus altus",
    japaneseName: "ストルティオミムス",
    period: "Late Cretaceous",
    found: "",
    group: "",
    diet: "both plants and meat",
    dinoLength: "",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "One of the fastest dinosaurs.",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["https://en.wikipedia.org/wiki/Struthiomimus"]
  },
  styracosaurus: {
    sciName: "Styracosaurus albertensis",
    japaneseName: "",
    period: "Late Cretaceous",
    found: "Canada",
    group: "",
    diet: "plants",
    dinoLength: "",
    dinoHeight: "",
    dinoWeight: "3 T",
    topSpeed: "",
    features: "Large horn on its nose, and a big frill adorned with spikes",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["Little Kids First Big Book of Dinosaurs (National Geographic Kids)"]
  },
  talarurus: {
    sciName: "Talarurus plicatospineus",
    japaneseName: "",
    period: "Late Cretaceous",
    found: "Mongolia",
    group: "",
    diet: "",
    dinoLength: "5 m",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "Armor, clubbed tail, 4 horns sticking out of head",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null
  },
  tarbosaurus: {
    sciName: "Tarbosaurus bataar",
    japaneseName: "",
    period: "Late Cretaceous",
    found: "Mongolia",
    group: "Theropod",
    diet: "meat",
    dinoLength: "8 m",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null
  },
  triceratops: {
    sciName: "Triceratops horridus",
    japaneseName: "トリケラトプス",
    period: "Cretaceous",
    found: "",
    group: "",
    diet: "plants",
    dinoLength: "",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["Little Kids First Big Book of Dinosaurs (National Geographic Kids)"]
  },
  tsintaosaurus: {
    sciName: "Tsintaosaurus spinorhinus",
    japaneseName: "ティラノサウルス",
    period: "Late Cretaceous",
    found: "China",
    group: "Ornithopod",
    diet: "plants",
    dinoLength: "10 m",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "funny-looking crest (&ldquo;unicorn skull&rdquo;)",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["Little Kids First Big Book of Dinosaurs (National Geographic Kids)", "https://en.wikipedia.org/wiki/Tsintaosaurus"]
  },
  tyrannosaurus: {
    sciName: "Tyrannosaurus rex",
    japaneseName: "ティラノサウルス",
    period: "Cretaceous",
    found: "North America",
    group: "Theropod",
    diet: "meat",
    dinoLength: "",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "Likely had feathers at some point during its life cycle",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["Little Kids First Big Book of Dinosaurs (National Geographic Kids)", "https://www.thoughtco.com/things-to-know-tyrannosaurus-1093804"]
  },
  utahraptor: {
    sciName: "Utahraptor ostrommaysi",
    japaneseName: "ユタラプトル",
    period: "Early Cretaceous",
    found: "USA",
    group: "",
    diet: "meat",
    dinoLength: "",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "30-cm long claws on feet",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["Little Kids First Big Book of Dinosaurs (National Geographic Kids)", "https://en.wikipedia.org/wiki/Utahraptor"]
  },
  velociraptor: {
    sciName: "Velociraptor mongoliensis",
    japaneseName: "ヴェロキラプトル",
    period: "Cretaceous",
    found: "Mongolia, China, Russia",
    group: "Theropod",
    diet: "meat",
    dinoLength: "2 m",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "Feathered",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["https://en.wikipedia.org/wiki/Velociraptor"]
  },
  yangchuanosaurus: {
    sciName: "Yangchuanosaurus shangyouensis",
    japaneseName: "ヤンチュアノサウルス",
    period: "Late Jurassic",
    found: "China",
    group: "",
    diet: "meat",
    dinoLength: "",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null,
    sources: ["Little Kids First Big Book of Dinosaurs (National Geographic Kids)"]
  },
  dinoTemplate: {
    sciName: "",
    japaneseName: "",
    period: "",
    found: "",
    group: "",
    diet: "",
    dinoLength: "",
    dinoHeight: "",
    dinoWeight: "",
    topSpeed: "",
    features: "",
    photoTitle: "",
    photoLink: "", 
    artistName: "",
    artistLink: "",
    licenseText: null,
    licenseLink: null
  }
}
console.log(`Allosaurus's scientific name is ${dinoData.allosaurus.sciName}.`)
console.log(JSON.stringify(dinoData));