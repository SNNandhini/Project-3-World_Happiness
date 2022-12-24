// Parse the input data into json 
var year22 = JSON.parse(document.getElementById("year_2022").dataset.year2022);
var year21 = JSON.parse(document.getElementById("year_2021").dataset.year2021);
var year20 = JSON.parse(document.getElementById("year_2020").dataset.year2020);
var year19 = JSON.parse(document.getElementById("year_2019").dataset.year2019);

// Years covered in the database
var year = [2022, 2021, 2020, 2019]

// Function to populate the dropdown menu for years
function yearDropDown() {

    // Select the year dropdown menu by using the element id
    var dropdownYear = document.getElementById("selYear");

    // Populate the dropdown menu by traversing through the year array
    for (let i = 0; i < year.length; i++) {
        option = document.createElement("option");
        option.innerHTML = year[i];
        option.value = year[i];
        dropdownYear.options.add(option);
    }

    // Read the selected year
    var selectedYear = document.querySelector('#selYear');
    var displayYear = selectedYear.value;
    console.log("displayYear:", displayYear);

    // Call the function to generate line chart based on the happiness score for top 10 countries along with the historical values
    // This chart has both the current and historical values and isn't updated when the dropdown values are changed. 
    // So this is called only once before generating the other charts.
    generateline();

    // Call the function to generate charts based on the selected year
    generateCharts(displayYear);

}

// Function to identify the dataset associated with the year selected
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

// Function to generate charts based on the selected year
function generateCharts(selectedYear) {

    // Call the function to generate bubble chart based on the happiness score
    generateBubble(selectedYear);
    
    // Call the function to generate bar chart based on the happiness score for top 10 countries
    generateBar(selectedYear);

    // Call the function to populate the country dropdown menu based on the year selected
    countryDropDown(selectedYear);

}

// Function to populate the country dropdown menu based on the year selected
function countryDropDown(yearSelected) {

    // Call the function to identify dataset based on the year selected
    data = yearDataset(yearSelected);

    // Select the dropdown menu by using the element id
    var dropdownMenu = document.getElementById("selDataset");
    
    // Populate the dropdown menu by traversing through the data array
    for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.innerHTML = data[i].country;
        option.value = data[i].country;
        dropdownMenu.options.add(option);
    }

    // Read the selected country
    var selectElement = document.querySelector('#selDataset');
    var displayCountry = selectElement.value;
    console.log("displayCountry:", displayCountry);

    // Call the function to generate charts
    generateGauge(displayCountry, yearSelected);

}

// Call this function if the country dropdown menu option is changed
function optionChanged(newCountry) {
    
    // Read the selected year
    var selectedYear = document.querySelector('#selYear');
    var displayYear = selectedYear.value;
    
    // Call the function to generate the gauge chart based on the selected country and year
    generateGauge(newCountry, displayYear);
}

// Call this function if the year dropdown menu option is changed
function yearChanged(newYear) {
    
    // Call the function to generate the charts based on the selected year
    generateCharts(newYear);
}

// Call the function to populate the year dropdown menu
yearDropDown();