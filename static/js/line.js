function generateline() {
  
  //--- x-axis data
  // Reverse the data in the year list to start from the oldest to the latest
  var xData_year = year.reverse();
  
  // Push the list above into the multidimensional array (10 times here as this line graph displays the history for top 10 countries)
  let xData = [];
  for (let i = 0; i < 10; i++) {
    xData.push(xData_year);
  }
  
  //--- y-axis data
  // Sort the latest (year22) data in the descending order based on the happiness score
  var lineOrder = year22.sort((a, b) => {
    if (b.happiness_score < a.happiness_score) {
        return -1;
    }
  })
  
  // arrays used to store the countries and happiness score values
  let lineCountries = [];
  let lineHscores = [];
  
  // arrays above populated with the counties and happiness scores
  lineOrder.forEach((country) => {
    let countryStr = country.country
    lineCountries.push(countryStr);

    let scoreStr = country.happiness_score
    lineHscores.push(scoreStr);
  });

  // slice the top 10 values
  var topTenCountries = lineCountries.slice(0,10).reverse();
  var topTenHscores2022 = lineHscores.slice(0,10).reverse();

  // year21 happiness scores for the current top 10 countries
  let topTenHscores2021 = [];
  for (let i = 0; i < topTenCountries.length; i++) {
    var countryData = year21.filter(ctryData => ctryData.country == topTenCountries[i]);
    var hScore = countryData[0].happiness_score;
    topTenHscores2021.push(hScore);
  }
  
  // year20 happiness scores for the current top 10 countries
  let topTenHscores2020 = [];
  for (let i = 0; i < topTenCountries.length; i++) {
    var countryData = year20.filter(ctryData => ctryData.country == topTenCountries[i]);
    var hScore = countryData[0].happiness_score;
    topTenHscores2020.push(hScore);
  }
  
  // year19 happiness scores for the current top 10 countries
  let topTenHscores2019 = [];
  for (let i = 0; i < topTenCountries.length; i++) {
    var countryData = year19.filter(ctryData => ctryData.country == topTenCountries[i]);
    var hScore = countryData[0].happiness_score;
    topTenHscores2019.push(hScore);
  }
  
  topTenHscores2022 = topTenHscores2022.reverse();
  topTenHscores2021 = topTenHscores2021.reverse();
  topTenHscores2020 = topTenHscores2020.reverse();
  topTenHscores2019 = topTenHscores2019.reverse();

  // Push the list above into the multidimensional array 
  let yData = [];
  for (let i = 0; i < 10; i++) {
    yScores = [];
    yScores.push(topTenHscores2019[i]);
    yScores.push(topTenHscores2020[i]);
    yScores.push(topTenHscores2021[i]);
    yScores.push(topTenHscores2022[i]);
    yData.push(yScores);
  }
  
  // Colours for the 10 lines in the graph
  var colors = ["rgba(0, 153, 0, .5", "rgba(0, 204, 102, .5)", "rgba(102, 153, 0, .5)", "rgba(0, 102, 204, .5)", 
                "rgba(102, 0, 255, .5)", "rgba(214, 0, 147, .5)", "rgba(128, 128, 0, .5)", 
                "rgba(255, 153, 0, .5)", "rgba(153, 0, 0, .5)", "rgba(255, 0, 0, 0.5)"
  ];
    
  // Labels (Country names) for each line  
  var labels = topTenCountries.reverse();
  
  // Data part used in Plotly for the graph
  var data = [];
    
  for ( var i = 0 ; i < xData.length ; i++ ) {
    
    // Data for the lines in the graph
    var result = {
      x: xData[i],
      y: yData[i],
      type: 'scatter',
      mode: 'lines',
      line: {
        color: colors[i],
      }
    };
    
    // Data for the markers in the graph
    var result2 = {
      x: xData[i],
      y: yData[i],
      type: 'scatter',
      mode: 'markers',
      hoverinfo: "none",
      marker: {
        color: colors[i],
        size: 5
      }
    };
    data.push(result, result2);
  }
    
  // Layout part used in Plotly for the graph 
  var layout = {
    title: `<b> Top 10 Countries' Happiness Score History </b>`,
    showlegend: false,
    xaxis: {
      showline: true,
      showgrid: true,
      showticklabels: true,
      linecolor: 'rgb(204,204,204)',
      linewidth: 2,
      autotick: false,
      ticks: 'outside',
      tickcolor: 'rgb(204,204,204)',
      tickwidth: 2,
      ticklen: 5,
    },
    yaxis: {
      showgrid: false,
      zeroline: false,
      showline: false,
      showticklabels: false
    },
    autosize: false,
    margin: {
      autoexpand: false,
      l: 100,
      r: 20,
      t: 100
    },
    annotations: []
  };
  
  // annonations to include the labels (country names) to the left of the lines
  for( var i = 0 ; i < xData.length ; i++ ) {
    var result = {
      xref: 'paper',
      x: 0.05,
      y: yData[i][0],
      xanchor: 'right',
      yanchor: 'middle',
      text: labels[i],
      showarrow: false,
    };
    
    layout.annotations.push(result);
  }
  
  // Render the plot to the div tag with id "line"
  Plotly.newPlot("line", data, layout);
}