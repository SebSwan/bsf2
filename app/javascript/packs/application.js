require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vic3dhbiIsImEiOiJjazlhY2ZxMG0wOGdqM25ueTcxazE3YnNhIn0.eCxqXHuJrfRcc5sQ82LUCQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});
