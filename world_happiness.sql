DROP TABLE year_2022;
DROP TABLE year_2021;
DROP TABLE year_2020;
DROP TABLE year_2019;
DROP TABLE coordinates;

CREATE TABLE year_2022 (
	country VARCHAR NOT NULL PRIMARY KEY,
	happiness_score FLOAT,
	gpd_per_capita FLOAT,
	social_support FLOAT,
	healthy_life_expectancy FLOAT,
	freedom_to_make_life_choices FLOAT	
);			



CREATE TABLE year_2021 (
	country VARCHAR NOT NULL PRIMARY KEY,
	happiness_score FLOAT,
	gpd_per_capita FLOAT,
	social_support FLOAT,
	healthy_life_expectancy FLOAT,
	freedom_to_make_life_choices FLOAT	
);		

CREATE TABLE year_2020 (
	country VARCHAR NOT NULL PRIMARY KEY,
	happiness_score FLOAT,
	gpd_per_capita FLOAT,
	social_support FLOAT,
	healthy_life_expectancy FLOAT,
	freedom_to_make_life_choices FLOAT	
);

CREATE TABLE year_2019 (
	country VARCHAR NOT NULL PRIMARY KEY,
	happiness_score FLOAT,
	gpd_per_capita FLOAT,
	social_support FLOAT,
	healthy_life_expectancy FLOAT,
	freedom_to_make_life_choices FLOAT	
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