//Name: Matthew Lee
//Due: 2/19/2016
// Assignment: Project 3

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.9527111, lng: -83.0321989},
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoom: 17
  });
}
