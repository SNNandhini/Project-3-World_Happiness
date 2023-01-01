function generateBar(yearSelected) {

    // Call the function to identify dataset based on the year selected
    data = yearDataset(yearSelected);

    // arrays used to store the countries and happiness score values
    let barCountries = [];
    let barHscores = [];

    // Sort the latest (year22) data in the descending order based on the happiness score
    var barOrder = data.sort((a, b) => {
        if (b.happiness_score < a.happiness_score) {
            return -1;
        }
    })

    // arrays above populated with the counties and happiness scores
    barOrder.forEach((country) => {
        let countryStr = country.country
        barCountries.push(countryStr);

        let scoreStr = country.happiness_score
        barHscores.push(scoreStr);
    });

    // Get and format the top 10 Countries and data as required. Sort the values in descending order for the horizontal bar chart
    var topTenCountries = barCountries.slice(0,10).reverse();
    var topTenHscores = barHscores.slice(0,10).reverse();

    // Create a trace for the bar chart
    let traceBar = {
        x: topTenHscores,
        y: topTenCountries,
        text: topTenCountries,
        type: "bar",
        orientation: "h"
    }

    // Assign the trace to a data array
    let dataBar = [traceBar];

    // Create the layout for bar chart
    let layoutBar = {
        title: `<b> ${yearSelected} Top 10 Happy Countries <br></b>`,
        xaxis: {title: `Happiness Score`},
    //    yaxis: {title: `Country`}
    }

    // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", dataBar, layoutBar);

}