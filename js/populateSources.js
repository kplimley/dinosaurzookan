// Try populating the list of sources for Allosaurus from the dinoData object.
"use strict"
let elSources = document.getElementById('sources');

let sources = dinoData[thisPageDino].sources;

elSources.innerHTML = ''; // blank out sources in case they were hard-coded in the html
for (const source of sources) { // for each source
    console.log(source);
    let listItem = document.createElement('li');

    if (source.length === 2) {
        listItem.innerHTML = `<a href="${source[1]}">${source[0]}</a>`;
        // alert( source[1].search(/http/i) );
    }
    else if (source.length === 1) {
        console.log(`This source has only 1 element: ${source[0]}`);

        // if source is a URL, then make it a link; otherwise just display text
        if (source[0].search(/http/i) ) {
            listItem.innerHTML = `<a href="${source[0]}">${source[0]}</a>`;
        } else {
            listItem.textContent = source;
        }

    } else {
        console.log('Error: This source is a strange length.');
    }
    elSources.appendChild(listItem);
}