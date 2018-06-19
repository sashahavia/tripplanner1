const mapboxgl = require("mapbox-gl");

const icons = {
  activity: "http://i.imgur.com/WbMOfMl.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
  hotel: "http://i.imgur.com/D9574Cu.png"
};

const buildMarker = (type, coords) => {

  console.log(coords, icons[type])
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${icons[type]})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
