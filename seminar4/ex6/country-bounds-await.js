import fetch from "node-fetch";

async function getObjectFromUrl(url) {
    const response = await fetch(url);
    const text = await response.text();
    return JSON.parse(text);
}

export async function getCountryBounds(country) {
    const object = await getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`);
    return {
        minLatitude: parseFloat(object[0].boundingbox[0]),
        maxLatitude: parseFloat(object[0].boundingbox[1]),
        minLongitude: parseFloat(object[0].boundingbox[2]),
        maxLongitude: parseFloat(object[0].boundingbox[3])
    };
}

export async function getPlanesOverCountry(country) {
    const bounds = await getCountryBounds(country);
    const url = `https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lamax=${bounds.maxLatitude}&lomin=${bounds.minLongitude}&lomax=${bounds.maxLongitude}`;
    const data = await getObjectFromUrl(url);
    return data.states;
}

// Test
getPlanesOverCountry('Romania').then(planes => {
    console.log(`Avioane deasupra României: ${planes ? planes.length : 0}`);
    console.log(planes);
});
