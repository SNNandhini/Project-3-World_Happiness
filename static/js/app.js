var year22 = JSON.parse(document.getElementById("year_2022").dataset.year2022);
var year21 = JSON.parse(document.getElementById("year_2021").dataset.year2021);
var year20 = JSON.parse(document.getElementById("year_2020").dataset.year2020);
var year19 = JSON.parse(document.getElementById("year_2019").dataset.year2019);

//let yr22 = Object.values(year22);
//let yr21 = Object.values(year21);
//let yr20 = Object.values(year20);
//let yr19 = Object.values(year19);
console.log("year21:", year21);

var year = [2022, 2021, 2020, 2019]

function yearDropDown() {

    // Select the country dropdown menu by using the element id
    var dropdownYear = document.getElementById("selYear");

    // Populate the dropdown menu by traversing through the year array
    for (let i = 0; i < year.length; i++) {
        //let yr22 = year22[i]
        console.log("i:", i);
        console.log("year:", year[i]);
        option = document.createElement("option");
        option.innerHTML = year[i];
        option.value = year[i];
        dropdownYear.options.add(option);
    }

    // Read the selected year
    var selectedYear = document.querySelector('#selYear');
    var displayYear = selectedYear.value;
    console.log("displayYear:", displayYear);

    // Call the function to identify dataset based on the year selected
    //data = yearDataset(displayYear);

    // Call the function to generate charts
    generateCharts(displayYear);

}

function yearDataset(selectedYear) {
    if (selectedYear == '2022') {
        yearData = year22;
    }
    else if (selectedYear == '2021') {
        yearData = year21;
    }
    else if (selectedYear == '2020') {
        yearData = year20;
    }
    else if (selectedYear == '2019') {
        yearData = year19;
    }
    return yearData;
}

function generateCharts(selectedYear) {

    // Call the function to generate bubble chart based on the happiness score
    generateBubble(selectedYear);
    
    // Call the function to generate bar chart based on the happiness score for top 10 countries
    generateBar(selectedYear);

    // Call the function to generate line chart based on the happiness score for top 10 countries
    generateline();

    // Call the function to populate the country dropdown menu based on the year selected
    countryDropDown(selectedYear);

}

function countryDropDown(yearSelected) {

    // Call the function to identify dataset based on the year selected
    data = yearDataset(yearSelected);

    // Select the dropdown menu by using the element id
    var dropdownMenu = document.getElementById("selDataset");
    
    // Populate the dropdown menu by traversing through the year22 array
    for (let i = 0; i < data.length; i++) {
        //let yr22 = year22[i]
        //console.log(yr22.country)
        option = document.createElement("option");
        option.innerHTML = data[i].country;
        option.value = data[i].country;
        dropdownMenu.options.add(option);
    }

    // Read the selected country
    var selectElement = document.querySelector('#selDataset');
    var displayCountry = selectElement.value;
    console.log("displayCountry:", displayCountry);

    //var countryData = data.filter(ctryData => ctryData.country == dispCountry);

    //var happinessScore = `countryData[0].happiness_score${year}`
    //var hScore = countryData[0].happiness_score;

    // Call the function to generate gauge chart based on the happiness score
    //var title = `<b>${displayCountry} ${yearSelected} <br> Happiness Score - ${hScore}</b> <br>`
    //var text = ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", ""]
    //var divTag = "gaugeHappiness"

    // Call the function to generate charts
    generateGauge(displayCountry, yearSelected);

    // Call the function to generate charts
    //gaugeCharts(displayCountry);
}

//function gaugeCharts(dispCountry) {

    // Call the function to generate bar chart based on the happiness score for top 10 countries
    //generateBar();

    // Call the function to generate line chart based on the happiness score for top 10 countries
    //generateline();

    // Call the function to generate bubble chart based on the happiness score
    //generateBubble();

    //var countryData = year22.filter(ctryData => ctryData.country == dispCountry);

    //var happinessScore = `countryData[0].happiness_score${year}`
    //var hScore = countryData[0].happiness_score;
    //console.log("hScore:", hScore)
    //var gdpScore = countryData[0].gpd_per_capita;
    //var supportScore = countryData[0].social_support;
    //var lifeScore = countryData[0].healthy_life_expectancy;
    //var freedomScore = countryData[0].freedom_to_make_life_choices;
   
    // Call the function to generate gauge chart based on the happiness score
    //var title = `<b>${dispCountry} 2022 <br> Happiness Score - ${hScore}</b> <br>`
    //var text = ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", ""]
    //var divTag = "gaugeHappiness"
    //generateGauge(hScore, title, divTag);

    // Call the function to generate gauge chart based on GDP per capita score
    //var title = `<b>${dispCountry} 2022 <br> GDP per Capita - ${gdpScore}</b> <br>`
    //var text = ["0-0.3", "0.3-0.6", "0.6-0.9", "0.9-1.2", "1.2-1.5", "1.5-1.8", "1.8-2.1", "2.1-2.4", "2.4-2.7", "2.7-3", ""]
    //var divTag = "gaugeGDP"
    //generateGauge(gdpScore, title, divTag);

    // Call the function to generate gauge chart based on Social Support score
    //var title = `<b>${dispCountry} 2022 <br> Social Support - ${supportScore}</b> <br>`
    //var text = ["0-0.3", "0.3-0.6", "0.6-0.9", "0.9-1.2", "1.2-1.5", "1.5-1.8", "1.8-2.1", "2.1-2.4", "2.4-2.7", "2.7-3", ""]
    //var divTag = "gaugeSupport"
    //generateGauge(supportScore, title, divTag);

    // Call the function to generate gauge chart based on Healthy Life Expectancy score
    //var title = `<b>${dispCountry} 2022 <br> Healthy Life Expectancy - ${lifeScore}</b> <br>`
    //var text = ["0-0.3", "0.3-0.6", "0.6-0.9", "0.9-1.2", "1.2-1.5", "1.5-1.8", "1.8-2.1", "2.1-2.4", "2.4-2.7", "2.7-3", ""]
    //var divTag = "gaugeLife"
    //generateGauge(lifeScore, title, divTag);

    // Call the function to generate gauge chart based on Freedom to make life choices score
    //var title = `<b>${dispCountry} 2022 <br> Freedom to make life choices - ${freedomScore}</b> <br>`
    //var text = ["0-0.3", "0.3-0.6", "0.6-0.9", "0.9-1.2", "1.2-1.5", "1.5-1.8", "1.8-2.1", "2.1-2.4", "2.4-2.7", "2.7-3", ""]
    //var divTag = "gaugeFreedom"
    //generateGauge(freedomScore, title, divTag);
        
//}

// Call this function if the dropdown menu option is changed
function optionChanged(newCountry) {
    console.log("newCountry:", newCountry)
    
    // Read the selected year
    var selectedYear = document.querySelector('#selYear');
    var displayYear = selectedYear.value;
    console.log("displayYear:", displayYear);

    generateGauge(newCountry, displayYear);
}

// Call this function if the year dropdown menu option is changed
function yearChanged(newYear) {
    console.log("newYear:", newYear)
    generateCharts(newYear);
}

yearDropDown();