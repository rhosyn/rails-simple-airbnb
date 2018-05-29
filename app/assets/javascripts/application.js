// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
// require jquery
// require jquery_ujs
// require bootstrap-sprockets
// require_tree .

import GMaps from 'gmaps';

const latField = document.getElementById("lat");
const longField = document.getElementById("long");


const showCoordinates = (data) => {
  latField.innerText = data.results[0].geometry.location.lat;
  longField.innerText = data.results[0].geometry.location.lng;
  const latInput = latField.innerText;
  const longInput = longField.innerText;
  const map = new GMaps({ el: '#map', lat: latInput, lng: longInput, zoom: 14 });
  const marker = { lat: latInput, lng: longInput };
  map.addMarkers([marker]);
};

const fetchData = (address) => {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=32 Ben Yehuda Tel Aviv`)
    .then(response => response.json())
    .then((data) => {
      showCoordinates(data);
    });
};

document.getElementById('geo-submit').addEventListener('click', () => {
  const address = document.getElementById("inlineFormInputName2").value;
  console.log(address);
  fetchData(address);
});
