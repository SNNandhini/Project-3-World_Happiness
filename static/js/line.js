function generateline() {
  //var xData = [
  //    [2019, 2020, 2021, 2022],
  //    [2019, 2020, 2021, 2022],
  //    [2019, 2020, 2021, 2022],
  //    [2019, 2020, 2021, 2022],
  //    [2019, 2020, 2021, 2022],
  //    [2019, 2020, 2021, 2022],
  //    [2019, 2020, 2021, 2022],
  //    [2019, 2020, 2021, 2022],
  //    [2019, 2020, 2021, 2022],
  //    [2019, 2020, 2021, 2022],
  //  ];

  var xData_year = year.reverse();
  console.log("xData_year:", xData_year);

  let xData = [];
  for (let i = 0; i < 10; i++) {
    xData.push(xData_year);
  }
  console.log("xData:", xData);

  var lineOrder = year22.sort((a, b) => {
    if (b.happiness_score < a.happiness_score) {
        return -1;
    }
  })

  let lineCountries = [];
  let lineHscores = [];
    
  lineOrder.forEach((country) => {
    let countryStr = country.country
    lineCountries.push(countryStr);

    let scoreStr = country.happiness_score
    lineHscores.push(scoreStr);
  });

  var topTenCountries = lineCountries.slice(0,10).reverse();
  var topTenHscores2022 = lineHscores.slice(0,10).reverse();

  console.log("topTenCountries:", topTenCountries);
  console.log("topTenHscores2022:", topTenHscores2022);

  let topTenHscores2021 = [];
  for (let i = 0; i < topTenCountries.length; i++) {
    var countryData = year21.filter(ctryData => ctryData.country == topTenCountries[i]);
    console.log("countryData:", countryData[0]);
    var hScore = countryData[0].happiness_score;
    topTenHscores2021.push(hScore);
  }
  console.log("topTenHscores2021:", topTenHscores2021);

  let topTenHscores2020 = [];
  for (let i = 0; i < topTenCountries.length; i++) {
    var countryData = year20.filter(ctryData => ctryData.country == topTenCountries[i]);
    //console.log("countryData:", countryData[0]);
    var hScore = countryData[0].happiness_score;
    topTenHscores2020.push(hScore);
  }
  console.log("topTenHscores2020:", topTenHscores2020);

  let topTenHscores2019 = [];
  for (let i = 0; i < topTenCountries.length; i++) {
    var countryData = year19.filter(ctryData => ctryData.country == topTenCountries[i]);
    //console.log("countryData:", countryData[0]);
    var hScore = countryData[0].happiness_score;
    topTenHscores2019.push(hScore);
  }
  console.log("topTenHscores2019:", topTenHscores2019);

  topTenHscores2022 = topTenHscores2022.reverse();
  topTenHscores2021 = topTenHscores2021.reverse();
  topTenHscores2020 = topTenHscores2020.reverse();
  topTenHscores2019 = topTenHscores2019.reverse();

  console.log("topTenHscores2022:", topTenHscores2022);
  console.log("topTenHscores2021:", topTenHscores2021);
  console.log("topTenHscores2020:", topTenHscores2020);
  console.log("topTenHscores2019:", topTenHscores2019);

  let yData = [];
  //let yScores = [];
  for (let i = 0; i < 10; i++) {
    yScores = [];
    //for (let j = 0; j < 4; j++) {
      yScores.push(topTenHscores2019[i]);
      yScores.push(topTenHscores2020[i]);
      yScores.push(topTenHscores2021[i]);
      yScores.push(topTenHscores2022[i]);
      yData.push(yScores);
    //}
    //yData.push(xData_year);
  }
  console.log("yData:", yData);


  //var yData_1 = [
  //  [7.769, 7.8087, 7.842, 7.82],
  //  [7.6, 7.6456, 7.62, 7.64],
  //  [7.494, 7.5045, 7.554, 7.56],
  //  [7.48, 7.5599, 7.571, 7.51],
  //  [7.488, 7.4489, 7.464, 7.42],
  //  [7.09, 7.2375, 7.324, 7.4],
  //  [7.343, 7.3535, 7.363, 7.38],
  //  [7.554, 7.488, 7.392, 7.37],
  //  [7.139, 7.1286, 7.157, 7.36],
  //  [7.307, 7.2996, 7.277, 7.2]
  //];
    
    var colors = ["rgba(0, 153, 0, .5", "rgba(0, 204, 102, .5)", "rgba(102, 153, 0, .5)", "rgba(0, 102, 204, .5)", "rgba(102, 0, 255, .5)", "rgba(214, 0, 147, .5)", "rgba(128, 128, 0, .5)", 
    "rgba(255, 153, 0, .5)", "rgba(153, 0, 0, .5)", "rgba(255, 0, 0, 0.5)"
    ];
    
    //var lineSize = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    
    //var labels = ['Finland', 'Denmark', 'Iceland', 'Switzerland', 'Netherlands', 'Luxembourg*', 'Sweden', 'Norway', 'Israel', 'New Zealand'];
    var labels = topTenCountries.reverse();
    console.log("labels:", labels)
    
    var data = [];
    
    for ( var i = 0 ; i < xData.length ; i++ ) {
      var result = {
        x: xData[i],
        y: yData[i],
        type: 'scatter',
        mode: 'lines',
        line: {
          color: colors[i],
          //width: lineSize[i]
        }
      };
      console.log("i:", i);
      console.log("xData[i][0]:", xData[i][0]);
      console.log("yData[i][0]:", yData[i][0]);
      var result2 = {
        //x: [xData[i][0], xData[i][3]],
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
    
    var layout = {
      title: `<b> Top 10 Countries' Happiness Score History </b>`,
      showlegend: false,
      height: 600,
      width: 600,
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
        //tickfont: {
        //  family: 'Arial',
        //  size: 12,
        //  color: 'rgb(82, 82, 82)'
        //}
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
      annotations: [
      //  {
      //    xref: 'paper',
      //    yref: 'paper',
      //    x: 0.0,
      //    y: 1.05,
      //    xanchor: 'left',
      //    yanchor: 'bottom',
      //    text: 'Main Source for News',
      //    showarrow: false
      //  },
        //{
        //  xref: 'paper',
        //  yref: 'paper',
        //  x: 0.5,
        //  y: -0.1,
        //  xanchor: 'center',
        //  yanchor: 'top',
        //  text: 'Source: Pew Research Center & Storytelling with data',
        //  showarrow: false,
        //  font: {
        //    family: 'Arial',
        //    size: 12,
        //    color: 'rgb(150,150,150)'
        //  }
        //}
      ]
    };
    
    for( var i = 0 ; i < xData.length ; i++ ) {
      var result = {
        xref: 'paper',
        x: 0.05,
        y: yData[i][0],
        xanchor: 'right',
        yanchor: 'middle',
        text: labels[i],
        //text: labels[i] + ' ' + yData[i][0] +'%',
        showarrow: false,
        //font: {
        //  family: 'Arial',
        // size: 16,
        //  color: 'black'
        //}
      };
      //var result2 = {
      //  xref: 'paper',
      //  x: 0.95,
      //  y: yData[i][3],
      //  xanchor: 'left',
      //  yanchor: 'middle',
      //  text: yData[i][3] +'%',
        //font: {
        //  family: 'Arial',
        //  size: 16,
        //  color: 'black'
        //},
      //  showarrow: false
      //};
    
      layout.annotations.push(result);
    }
    
    Plotly.newPlot('line', data, layout);
}