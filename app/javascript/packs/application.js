require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

import { initMapbox } from '../plugins/init_mapbox';

initMapbox()

// document.addEventListener('turbolinks:load', () => {
//   ;
// })
// il semble que ce bout de code soit le pb de chargement de la map (map blanche)



// mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vic3dhbiIsImEiOiJjazlhY2ZxMG0wOGdqM25ueTcxazE3YnNhIn0.eCxqXHuJrfRcc5sQ82LUCQ';
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });

