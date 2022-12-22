function generateBubble(yearSelected) {

    // Call the function to identify dataset based on the year selected
    data = yearDataset(yearSelected);

    let countries = [];
    let hscores = [];

    //var order = _.sortBy(require('./country'), function (el) { return el.country, el.happiness_score2022 });
    var order = data.sort((a, b) => {
        if (a.country < b.country) {
            return -1;
        }
    })
    console.log("order:", order)

    order.forEach((country) => {
        let countryStr = country.country
        countries.push(countryStr);

        let scoreStr = country.happiness_score
        hscores.push(scoreStr);
    })
    console.log("countries:", countries);
    console.log("hscores:", hscores);

    // Create a trace for the bubble chart
    let traceBubble = {
        x: countries,
        y: hscores,
        text: hscores,
        //type: "scatter",
        mode: "markers",
        marker: {
            size: hscores.map(score => score * 3),
            //sizemode: 'area',
            color: countries,
            colorscale: "Earth"
          
        }
    }

    // Assign the trace to a data array
    let dataBubble = [traceBubble];

    // Create the layout for bubble chart
    let layoutBubble = {
        title: `<b> ${yearSelected} World Happiness Score </b>`,
        xaxis: {title: `Country`, showticklabels: false, nticks: 5},
        yaxis: {title: `Happiness Score`}
    }

    // Render the plot to the div tag with id "bubble"
    Plotly.newPlot("bubble", dataBubble, layoutBubble);
    
    
}