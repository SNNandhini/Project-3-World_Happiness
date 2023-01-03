function generateScatter(yearSelected) {

    // Call the function to plot the graph for Happiness Score Vs. GDP per Capita
    var tag = "scatterGDP";
    var column = "gpd_per_capita";
    var title = "GDP per Capita";
    plotScatter(tag, column, title, yearSelected);

    // Call the function to plot the graph for Happiness Score Vs. Freedom to make Life Choices
    var tag = "scatterFreedom";
    var column = "freedom_to_make_life_choices";
    var title = "Freedom to make Life Choices";
    plotScatter(tag, column, title, yearSelected);

    // Call the function to plot the graph for Happiness Score Vs. Healthy Life Expectancy
    var tag = "scatterHealthy";
    var column = "healthy_life_expectancy";
    var title = "Healthy Life Expectancy";
    plotScatter(tag, column, title, yearSelected);

    // Call the function to plot the graph for Happiness Score Vs. Social Support
    var tag = "scatterSupport";
    var column = "social_support";
    var title = "Social Support";
    plotScatter(tag, column, title, yearSelected);

}

// Function to plot the scatter charts with linear regression
function plotScatter(htmlTag, sqlColumn, axisTitle, selectedYear) {

    // Call the function to identify dataset based on the year selected
    var data = yearDataset(selectedYear);

    // Arrays to hold the X and Y axes data
    var xData = [];
    var yData = [];

    // Populating the X and Y arrays
    for (let i = 0; i < data.length; i++) {
        x = data[i].happiness_score;
        y = data[i][sqlColumn];
        xData.push(x);
        yData.push(y);
    }

    // Map the data in the required format
    const datoa = xData.map((x, i) => {
        return {
        x: x,
        y: yData[i]
        };
    });

    // Clean up the data and map as required
    const cleanData = datoa
    .filter(({ x, y }) => {
    return (
        typeof x === typeof y &&  // filter out one string & one number
        !isNaN(x) &&              // filter out `NaN`
        !isNaN(y) &&
        Math.abs(x) !== Infinity && 
        Math.abs(y) !== Infinity
    );
    })
    .map(({ x, y }) => {
    return [x, y];             // we need a list of [[x1, y1], [x2, y2], ...]
    });    

    // Calculate the points and equation for the line along with R-squared value
    const dataRegression = regression.linear(
        cleanData
    );

    // Calculate the p-value for the 2 distributions
    var pValue = jStat.corrcoeff(xData, yData);
    var pRounded = Math.round((pValue + Number.EPSILON) * 100) / 100
    console.log("pValue:", pValue);
    console.log("pRounded:", pRounded);
    
    // Data for the scatter plot
    var traceScatter = {
        x: xData,
        y: yData,
        mode: 'markers',
        type: 'scatter'
    };

    // Data for the line plot
    var lineX = [];
    var lineY = [];
    
    for ( var i = 0 ; i < dataRegression.points.length ; i++ ) {
        // Data for the lines in the graph
        var x1 = dataRegression.points[i][0];
        var y1 = dataRegression.points[i][1];
        lineX.push(x1);
        lineY.push(y1);
        //console.log("pointsx:", dataRegression.points[i][0]);
        //console.log("pointsy:", dataRegression.points[i][1]);
    };

    var traceScatter2 = {
        x: lineX,
        y: lineY,
        type: 'scatter',
        mode: 'lines'

    }
    
    var dataScatter = [traceScatter, traceScatter2];

    // Layout for the scatter and line plots
    let layoutScatter = {
        title: `<b> ${selectedYear} <br>Happiness Score Vs. ${axisTitle}</b><br>`,
        xaxis: {title: `Happiness Score`},
        yaxis: {title: `${axisTitle}`},
        showlegend: false,
        annotations: [
            {
                xref: 'paper',
                yref: 'paper',
                x: 0.8,
                y: 0.2,
                xanchor: 'center',
                yanchor: 'top',
                text: `The line equation is <br> ${dataRegression.string}`,
                showarrow: false
                
            },
            {
                xref: 'paper',
                yref: 'paper',
                x: 0.5,
                y: -0.2,
                xanchor: 'center',
                yanchor: 'top',
                text: `p-value: ${pRounded} | r-squared value: ${dataRegression.r2}`,
                showarrow: false
                
            }
        ]
    }

    // Render the plot to the div tag with id for each plot
    Plotly.newPlot(htmlTag, dataScatter, layoutScatter);
}