// console.log("THIS IS Index.js");

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker")

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FzaGEtaGF2aWEiLCJhIjoiY2pkdGN3MW1hMHpzNDJ4bnk4NzBnOXVzeSJ9.9a0w0WPYRY4qJC0dDSUnKg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activity", [-74.009151, 40.705086]);marker.addTo(map);

