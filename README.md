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
The World Happiness Report is a publication that contains articles and rankings of national happiness, based on respondent ratings of their own lives, which the report also correlates with various (quality of) life factors.

The pandemic brought not only pain and suffering but also an increase in social support and benevolence. As we battle the ills of disease and war, it is essential to remember the universal desire for happiness and the capacity of individuals to rally to each other’s support in times of great need.

In this project we are analysing the World Happiness Reports from 2019 up to 2022. The aim is to identify the happy places in the world and the impact of different factors on the happiness score.

For this, we are creating a dashboard with interactive graphs and maps for the selected years.

## Data Extraction, Transformation and Load
##### Kazimierz Lubas
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

We created the database World_Happiness on PostgreSQL and loaded the tables for coordinates, year2019, year2020, year2021 and year2022. See Main_Python.ipynb for details.

![image](https://user-images.githubusercontent.com/111614210/210465053-9ff64113-aaee-4986-9e50-a33613e15efe.png)




