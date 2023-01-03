function plotMap(yearSelected) {

  // Call the function to identify dataset based on the year selected
  data = yearDataset(yearSelected);

  // Creating our initial map object:
  // We set the longitude, latitude, and starting zoom level.
  var myMap = L.map("map", {
      center: [33, 65],
      zoom: 3
    });
    
    // Adding a tile layer (the background map image) to our map:
    // We use the addTo() method to add objects to our map.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    // Create a new marker cluster group.
    var markers = L.markerClusterGroup();
    
    // Loop through the data.
    for (var i = 0; i < data.length; i++) {

        // Set the data location property to a variable.
        var row = data[i];

        if (row.latitude != null) {
          
          // Add a new marker to the cluster group, and bind a popup.
          markers.addLayer(L.marker([row.latitude, row.longtitude])
              .bindPopup(String(row.happiness_score)).openPopup());
      
          // Add our marker cluster layer to the map.
          myMap.addLayer(markers);
        }
    
      }
    
  }    
  