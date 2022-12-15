function createMap(bikeStations) {

  // Create the tile layer that will be the background of our map.
  var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });


  // Create a baseMaps object to hold the streetmap layer.
  var baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the bikeStations layer.
  var overlayMaps = {
    "Bike Stations": bikeStations
  };

  // Create the map object with options.
  var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [streetmap, bikeStations]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

function createMarkers(response) {

  // Pull the "stations" property from response.data.
  var countries2 = response.data.countries2;

  // Initialize an array to hold bike markers.
  var bikeMarkers = [];

  // Loop through the stations array.
  for (var index = 0; index < countries2.length; index++) {
    var countries2 = countries2[index];

    // For each station, create a marker, and bind a popup with the station's name.
    var bikeMarker = L.marker([countries2.latitude, countries2.longitude])
      .bindPopup("<h3>" + countries2.name + "<h3><h3>Capacity: " + countries2.capacity + "</h3>");

    // Add the marker to the bikeMarkers array.
    bikeMarkers.push(bikeMarker);
  }

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  createMap(L.layerGroup(bikeMarkers));
}


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("2020.json").then(createMarkers);
