function createMarkers() {


  // Initialize an array to hold bike markers.
  var bikeMarkers = [];

  // Loop through the stations array.
  for (var index = 0; index < data.length; index++) {
    var row = data[index]
    var country = row.country

    // For each station, create a marker, and bind a popup with the station's name.
    var bikeMarker = L.marker([row.latitude, row.longtitude])
      .bindPopup();

    // Add the marker to the bikeMarkers array.
    bikeMarkers.push(bikeMarker);
  }

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  createMap(L.layerGroup(bikeMarkers));
}

<script>
    var data = {{data_json | tojson}}
    var data = JSON.parse(data)
  </script>

  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Basic Map</title>

  <!-- Leaflet CSS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin="" />

  <!-- Leaflet JavaScript code -->
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
    crossorigin=""></script>
    

  <!-- Our CSS -->
  <link rel="stylesheet" type="text/css" href="{{url_for('static', filename='style.css')}}">
</head>

<body>
  <!-- The div where we'll insert our map -->
  <div id="map"></div>

  <!-- JavaScript file -->
  <script type="text/javascript" src="{{url_for('static', filename='logic.js')}}"></script>
</body>

</html>
