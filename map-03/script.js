document.addEventListener("DOMContentLoaded", async function () {
   
    // setup the map
    const map = L.map("singaporeMap");
    map.setView([1.3521, 103.8198], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

    // load the hdb.json and create a layer group and the markers for each of time
    const hdbResponse = await axios.get("hdb.json");
    const hdbLayer = L.layerGroup();
    hdbLayer.addTo(map);
    for (let hdb of hdbResponse.data) {
        // this technique is known as function chaining
        // this works because .bindPopup also returs the marker
        L.marker(hdb.coordinates).bindPopup(`<h1>${hdb.name}</h1>`).addTo(hdbLayer);
    }

    // load in the mall.json and create a layer group and the markers for each mall
    const mallResponse = await axios.get('mall.json');
    const mallLayer = L.layerGroup();
    mallLayer.addTo(map);
    for (let mall of mallResponse.data) {
        L.marker(mall.coordinates).bindPopup(`<h1>${mall.name}</h1>`).addTo(mallLayer);
    }

    const natureResponse = await axios.get('nature.json');
    const naturelayer = L.layerGroup();
    naturelayer.addTo(map);
    for (let mall of natureResponse.data) {
        L.marker(nature.coordinates).bindPopup(`<h1>${nature.name}</h1>`).addTo(naturelayer);
    }


});

