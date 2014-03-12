
var map = L.map('map').setView([46.6554751,-92.3602175], 14);
var marker = L.marker([46.6549375,-92.3726499]).addTo(map);
marker.bindPopup("The southern-most point of the SHT.").openPopup();


L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(map);