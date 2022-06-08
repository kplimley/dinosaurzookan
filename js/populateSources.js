// Try populating the list of sources for Allosaurus from the dinoData object.

let elSources = document.getElementById('sources');
let thisPageDino = getUrl();
let sources = dinoData.allosaurus.sources;

elSources.innerHTML = '';
for (const source of sources) { // for each source
    console.log(source);
    let listItem = document.createElement('li');

    if (source.length === 2) {
        listItem.innerHTML = `<a href="${source[1]}">${source[0]}</a>`;
    }
    else if (source.length === 1) {
        console.log(`This source has only 1 element: ${source[0]}`);
        listItem.innerHTML = `<a href="${source[0]}">${source[0]}</a>`;
        //listItem.textContent = source;
    } else {
        console.log('Error: This source is a strange length.');
    }
    elSources.appendChild(listItem);
}