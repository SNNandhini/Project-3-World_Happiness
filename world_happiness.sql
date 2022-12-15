DROP TABLE year_2022;
DROP TABLE year_2021;
DROP TABLE year_2020;
DROP TABLE year_2019;
DROP TABLE coordinates;

CREATE TABLE year_2022 (
	country VARCHAR NOT NULL PRIMARY KEY,
	happiness_score2022 FLOAT,
	gpd_per_capita2022 FLOAT,
	social_support2022 FLOAT,
	healthy_life_expectancy2022 FLOAT,
	freedom_to_make_life_choices2022 FLOAT	
);			



CREATE TABLE year_2021 (
	country VARCHAR NOT NULL PRIMARY KEY,
	happiness_score2021 FLOAT,
	gpd_per_capita2021 FLOAT,
	social_support2021 FLOAT,
	healthy_life_expectancy2021 FLOAT,
	freedom_to_make_life_choices2021 FLOAT	
);		

CREATE TABLE year_2020 (
	country VARCHAR NOT NULL PRIMARY KEY,
	happiness_score2020 FLOAT,
	gpd_per_capita2020 FLOAT,
	social_support2020 FLOAT,
	healthy_life_expectancy2020 FLOAT,
	freedom_to_make_life_choices2020 FLOAT	
);

CREATE TABLE year_2019 (
	country VARCHAR NOT NULL PRIMARY KEY,
	happiness_score2019 FLOAT,
	gpd_per_capita2019 FLOAT,
	social_support2019 FLOAT,
	healthy_life_expectancy2019 FLOAT,
	freedom_to_make_life_choices2019 FLOAT	
);

CREATE TABLE coordinates (
	country VARCHAR NOT NULL PRIMARY KEY,
	latitude FLOAT,
	longtitude FLOAT
);


SELECT 
 *
  FROM year_2019
   JOIN coordinates
    USING (country);

SELECT 
 *
  FROM year_2020
   JOIN coordinates
    USING (country);
	
SELECT 
 *
  FROM year_2021
   JOIN coordinates
    USING (country);

SELECT 
 *
  FROM year_2022
   JOIN coordinates
    USING (country);


Select * from year_2022;
Select * from year_2021;
Select * from year_2020;
Select * from year_2019;
Select * from coordinates;