import fetch from "node-fetch";

function getObjectFromUrl(url) {
    return new Promise(resolve => {
        fetch(url)
            .then(response => response.text())
            .then(text => resolve(JSON.parse(text)));
    });
}

function getCountryBounds(country) {
    return new Promise(resolve => {
        getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
            .then(object => resolve({
                minLatitude: parseFloat(object[0].boundingbox[0]),
                maxLatitude: parseFloat(object[0].boundingbox[1]),
                minLongitude: parseFloat(object[0].boundingbox[2]),
                maxLongitude: parseFloat(object[0].boundingbox[3])
            }));
    });
}

function getPlanesOverCountry(country) {
    return getCountryBounds(country)
        .then(bounds => {
            const url = `https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lamax=${bounds.maxLatitude}&lomin=${bounds.minLongitude}&lomax=${bounds.maxLongitude}`;
            return getObjectFromUrl(url);
        })
        .then(data => data.states);
}

// Test
getPlanesOverCountry('Romania').then(planes => {
    console.log(`Avioane deasupra României: ${planes ? planes.length : 0}`);
    console.log(planes);
});
