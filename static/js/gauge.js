// function to create the gauge chart
function generateGauge(countrySelected, yearSelected) {

    // Call the function to identify dataset based on the year selected
    data = yearDataset(yearSelected);

    var countryData = data.filter(ctryData => ctryData.country == countrySelected);

    //var happinessScore = `countryData[0].happiness_score${year}`
    var score = countryData[0].happiness_score;

    // determine angle for each score segment on the chart
    var angle = (score / 10) * 180;

    // Trig to calc meter point
    var degrees = 180 - angle,
        radius = .5;
    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    // Path to create the shape of the needle (triangle)
    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
    pathX = String(x),
    space = ' ',
    pathY = String(y),
    pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);

    // Needle Position on the Gauge
    var traceNeedlePosition = {
        type: 'scatter',
        showlegend: false,
        x: [0],
        y: [0],
        marker: { size: 28, color: '850000' },
        //name: score,
        hoverinfo: 'none'
    }

    // create a trace for the gauge chart
    // type: "pie" is used here as the chart is based on pie concept
    // values: 50% of the pie divided into 10 parts, the remaining 50% (so 10 values in total)
    // text: the text to be displayed on each part. The unused 50% is assigned wit a blank here
    // rotation: the angle to rotate the pie, so the used 50% is at the top. Calculated the degrees that include the used segment and then halved that. ((360*0.5)/2)
    var traceGauge = {
        type: "pie",   
        showlegend: false,
        hole: 0.5,
        rotation: 90,  
        values: [50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50 / 10, 50],
        text: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", ""],
        direction: "clockwise",
        textinfo: "text",
        textposition: "inside",
        hoverinfo: "none",
        marker: {
            //colors: ["rgba(240, 236, 220, 0.5)", "rgba(232, 226, 202, .5)", "rgba(210, 206, 145, .5)", 
            //        "rgba(202, 209, 95, .5)", "rgba(170, 202, 42, .5)", "rgba(110, 154, 22, .5)", 
            //        "rgba(14, 127, 0, .5)", "rgba(10, 105, 0, .5)", "rgba(14, 127, 0, .5)", "rgba(6, 80, 0, .5)", "white"]
            colors: ["rgba(255, 0, 0, 0.5)", "rgba(255, 102, 0, .5)", "rgba(255, 153, 102, .5)", "rgba(255, 204, 153, .5)", "rgba(255, 255, 102, .5)", "rgba(255, 255, 10, .5)", 
                    "rgba(255, 255, 153, .5)", "rgba(204, 255, 51, .5)", "rgba(153, 204, 0, .5)", "rgba(102, 153, 0, .5)", "white"]
            
            }
    }

    // Assign the traces for the needle position and gauge chart to a data array
    var dataGauge = [traceNeedlePosition, traceGauge];

    // Create the layout for gauge chart
    // shapes: this is used for the needle shape and colour
    var layoutGauge = {
        shapes: [{
            type: "path",
            path: path,
            fillcolor: "850000",
            line: {
                color: "850000"
                }
        }],
        title: `<b>${countrySelected} ${yearSelected} <br> Happiness Score - ${score}</b> <br>`,
        height: 475,
        width: 475,
        xaxis: {
            zeroline:false, 
            showticklabels:false,
            showgrid: false, 
            range: [-1, 1]
        },
        yaxis: {
            zeroline:false, 
            showticklabels:false,
            showgrid: false, 
            range: [-1, 1]
        }
    }
    
    // Render the plot to the ID in div tag
    Plotly.newPlot("gaugeHappiness", dataGauge, layoutGauge);

}