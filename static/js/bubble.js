// Function to create the bubble chart
function generateBubble(yearSelected) {

    // Call the function to identify dataset based on the year selected
    data = yearDataset(yearSelected);

    // arrays used to store the countries and happiness score values
    let countries = [];
    let hscores = [];

    // Sort the data in ascending order based on the country names
    var order = data.sort((a, b) => {
        if (a.country < b.country) {
            return -1;
        }
    })

    // arrays above populated with the counties and happiness scores
    order.forEach((country) => {
        let countryStr = country.country
        countries.push(countryStr);

        let scoreStr = country.happiness_score
        hscores.push(scoreStr);
    })
    
    // Create a trace for the bubble chart
    let traceBubble = {
        x: countries,
        y: hscores,
        text: hscores,
        mode: "markers",
        marker: {
            size: hscores.map(score => score * 3),
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