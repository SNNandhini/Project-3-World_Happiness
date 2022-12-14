# World Happiness Report
Visual Display and a Statistical Analysis!

## Team
-   Badrija Khalifa
-   Farah Hayat
-   Kazimierz Lubas
-   Nandhini Nallathambi

## Technologies Used
-   Python
-   Pandas
-   PostgreSQL
-   SQLAlchemy
-   Python Flask API
-   HTML
-   Javascript, Leaflet.js, Plotly.js, Regression.js, JStat.js
-   CSS/ Bootstrap

## Introduction
The World Happiness Report is a publication that contains articles and rankings of national happiness, based on respondent ratings of their own lives, which the report also correlates with various (quality of) life factors. (wikipedia, 2022)

The pandemic brought not only pain and suffering but also an increase in social support and benevolence. As we battle the ills of disease and war, it is essential to remember the universal desire for happiness and the capacity of individuals to rally to each other’s support in times of great need. (worldhappiness, 2022)

In this project we are analysing the World Happiness Reports from 2019 up to 2022. The aim is to identify the happy places in the world and the impact of different factors on the happiness score. 

For this, we are creating a dashboard with interactive graphs and maps for the selected years.

## Data Extraction, Transformation and Load
#### - Kazimierz Lubas

We have used the datasets from
-   Kaggle (https://www.kaggle.com/datasets/mathurinache/world-happiness-report) for World Happiness Reports
-   GitHub/metal3D (https://gist.github.com/metal3d/5b925077e66194551df949de64e910f6) for country coordinates

We cleaned up the datasets and decided to analyse 4 factors (GDP per capita, social support, healthy life expectancy and freedom to make life choices) out of the 6 used in the World Happiness Report. We decided not to consider the factors generosity and perceptions of corruption, as we thought the other four might impact the happiness score the most.

Our final datasets contain the following attributes:
-   Country
-   Happiness Score
-   GDP Per Capita
-   Social Support
-   Healthy Life Expectancy
-   Freedom to make Life Choices

We created the database World_Happiness on PostgreSQL and loaded the tables for coordinates, year2019, year2020, year2021 and year2022. See Main_Python.ipynb, world_happiness.sql for details.

![image](https://user-images.githubusercontent.com/111614210/210465053-9ff64113-aaee-4986-9e50-a33613e15efe.png)

## Dashboard Designing and Wireframe
#### - Farah Hayat

We started off with a hand drawn design of the dashboard, which we created on a wireframe tool (Uizard) later. After the initial draft of the html page, we updated the design to add and remove graphs to make it look professional. After multiple reviews and updates, the dashboard has evolved to what it is today.

![image](https://user-images.githubusercontent.com/111614210/210468195-11d7e8c9-2fd0-4b0a-b21f-75eaa534d033.png)

## Python Flask API
#### - Nandhini Nallathambi, Badrija Khalifa

We've used Python Flask API to build our web application. The connection to the PostgreSQL is made using SQLAlchemy. A .env file is used to authenticate the database login. The data fetched from the database are then injected into the index.html page which serves as the landing page. See app.py for details.

## Landing Web Page
#### - Nandhini Nallathambi, Badrija Khalifa

This dashboard page is designed to hold the maps and graphs created as part of this analysis. We've used Flexbox to create a multi-column responsive layout. 
-   The page contains a Navbar at the top. 
-   The content section below the navbar is divided into three sections: two-column flexbox, three-column flexbox and a four-column flexbox.
-   There are 2 dropdpwn menus: one for filtering based on the year and the other based on country within the selected year.
-   This page uses a number of javascript files to generate the maps and graphs. 
See templates/index.html and static/js/app.js for details.

![image](https://user-images.githubusercontent.com/111614210/210488122-ca0d7cf7-d227-43b4-8b5f-332d91406b8c.png)

## Map - Leaflet.js
#### - Badrija Khalifa

The Map in the top left corner of the dashboard displays the markers based on the happiness score for the selected year. This map uses Leaflet.js library. Markers are attached to each country displaying the Happiness score for the selected year. The circles on the map are coloured based on the density of the countries and zoom used. See static/js/logic.js for details.

![image](https://user-images.githubusercontent.com/111614210/210494069-749f8bb5-cb17-4d65-922c-7a30515217c9.png)

## Charts and Graphs - Plotly.js 
#### - Nandhini Nallathambi

### Bubble Chart
The Bubble Chart in the top right corner displays the countries and their happiness scores for the year selected. See static/js/bubble.js for details.

![image](https://user-images.githubusercontent.com/111614210/210494023-a9b55302-3d46-4f0f-b8f6-11aee0c253f7.png)

### Bar Chart
The horizontal bar chart displays the top 10 countries based on the happiness score for the selected year. See static/js/bar.js for details.

![image](https://user-images.githubusercontent.com/111614210/210493976-4738d398-01cf-4990-98be-48d12cfc972a.png)

### Line Graph
The line graph displays the top ten countries based on happiness score from 2022 along with the historical data for those 10 countries. Annotations in Plotly.js are used for displaying the country names on the left each line. This graph is loaded once and remains the same throughout. See static/js/line.js for details.

![image](https://user-images.githubusercontent.com/111614210/210493933-44b330b5-cfb5-46f0-bf80-3bb7802ea9d6.png)

### Gauge Chart
The Gauge Chart displays the happiness score for the selected country in the selected year. The country dropdown menu is upated each time a different year is selcted in the year dropdown menu. See static/js/gauge.js for details.

![image](https://user-images.githubusercontent.com/111614210/210493866-1a04cfa7-5dba-4e0d-886d-1bad4b137a35.png)

## Statistical Analysis - Plotly.js, Regression.js, JStat.js
####  - Nandhini Nallathambi

Scatter plots along with Linear Regression are generated as part of this analysis. The plots show the relationship between happiness score and the four factors. 
- The scatter plots and line graphs are genrated using Plotly.js. 
- The line equations and r-squared values are generated using Regression.js. 
- The correlation coefficient (p-value) are generated using JStat.js.
- Annotations in Plotly.js are used for displaying the line equation, r-squared and p-values.
See scatter.js for details.

![image](https://user-images.githubusercontent.com/111614210/210493530-7ff3332f-7143-4b84-aa16-60e8c92cbd50.png)
![image](https://user-images.githubusercontent.com/111614210/210493583-4a94fa49-0445-463a-9ebb-65d24be8ec0e.png)
![image](https://user-images.githubusercontent.com/111614210/210493656-4619a3e3-a811-496d-adca-eef04bc5590e.png)
![image](https://user-images.githubusercontent.com/111614210/210493710-38741c0f-fb1f-4787-baa0-b5b9c5394c65.png)

## Conclusions
1.  Finland is the happiest country on all the analysed datasets from 2019 to 2022.
2.  UK - 2022 has the worst score from all years.
3.  Afghanistan took the last place in 2022 with the score of 2.4
4.  Top 10 dominated by European countries (8-9 places).
5.  Only non-European country placed in top 10 in all years : New Zealand
6.  Social Support has the highest impact on Happiness score in 2022.

## Limitations
1.  Happiness is a qualitative concept that cannot be quantified and it may depend on socioeconomic status or culture, mood or other psychological factors. Therefore it is an ambiguous and uncertain process. (White, 2014)
2.  It does not account for the many aspects of human well-being such as health, education, personal safety, social relations, work conditions, spirituality, and so on. (Stewart, 2014)
3.  Happiness surveys based on self-report can generate unreliable data due to respondents’ imperfect retrospection, vulnerability to context, and arbitrariness in measuring happiness. (Zhou, 2010)

## References
1.  Stewart, D. F., 2014. ohrh.law.ox.ac.uk. [Online] 
    Available at: https://ohrh.law.ox.ac.uk/against-happiness-why-happiness-is-not-a-good-measure-of-progress/
    [Accessed 03 January 2023].

2.  White, M. D., 2014. www.mercatus.org. [Online] 
    Available at: https://www.mercatus.org/research/research-papers/problems-measuring-and-using-happiness-policy-purposes
    [Accessed 03 January 2023].

3.  wikipedia, 2022. wikipedia. [Online] 
    Available at: https://en.wikipedia.org/wiki/World_Happiness_Report
    [Accessed 03 January 2023].

4.  worldhappiness, 2022. worldhappiness. [Online] 
    Available at: https://worldhappiness.report/
    [Accessed 03 January 2023].

5.  Zhou, H., 2010. www.monash.edu. [Online] 
    Available at: https://www.monash.edu/__data/assets/pdf_file/0008/925460/_and_produquality-adjusted_human_capitalctivity_growth_1.pdf
    [Accessed 03 January 2023].

## Files Uploaded
-   Project Scope and Final Presentation in the "Project Documents" folder.
-   Input csv files in the "Resources" folder.
-   "Main_Python" jupyter notebook used for cleaning up and uploading the data into PostgreSQL.
-   Python Flask API - "app.py" 
-   Landing page - "templates/index.html" 
-   Javascript files - "static/js/"
-   CSS - "static/css/"
-   sql used for creating tables - "world_happiness.sql"
