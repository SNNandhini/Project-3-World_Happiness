DROP TABLE year_2022;
DROP TABLE year_2021;
DROP TABLE year_2020;
DROP TABLE year_2019;

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

Select * from year_2022;
Select * from year_2021;
Select * from year_2020;
Select * from year_2019;