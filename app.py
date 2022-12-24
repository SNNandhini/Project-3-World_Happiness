import pandas as pd
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from flask import Flask, render_template
from urllib import parse
import urllib.parse

app = Flask(__name__)

# setup PostgreSQL connection
def get_db_connection():

    # Create a connection string for World Happiness Database using the parameters from .env file
    load_dotenv()

    protocol = os.getenv("PROTOCOL")
    username = os.getenv("USER_NAME")
    password = os.getenv("PASSWORD")
    password=parse.quote(password)
    port = os.getenv("PORT")
    hostname = os.getenv("HOST")
    database = os.getenv("DATABASE")

    con_str = f"{protocol}://{username}:{password}@{hostname}:{port}/{database}"

    # Create an engine instance
    engine = create_engine(con_str)

    # Connect to PostgreSQL server
    conn = engine.connect()

    return conn

@app.route("/")
def index():
    conn = get_db_connection()

    #----------Year 2022------------------
    # Query All records in the "year_2022" table joining the latitude and longitude details from "coordinates" table
    sql_2022 = "SELECT Y.country, Y.freedom_to_make_life_choices, Y.gpd_per_capita, Y.happiness_score, Y.healthy_life_expectancy, Y.social_support, \
                    C.latitude, C.longtitude \
                    from year_2022 Y \
                    LEFT JOIN coordinates C ON C.country = Y.country;"

    # Read the sql contents into a dataframe
    year_2022 = pd.read_sql(sql_2022, conn)

    # Convert the dataframe contents to json
    year_2022 = year_2022.to_json(orient="records")

    #----------Year 2021------------------
    # Query All records in the "year_2021" table joining the latitude and longitude details from "coordinates" table
    sql_2021 = "SELECT Y.country, Y.freedom_to_make_life_choices, Y.gpd_per_capita, Y.happiness_score, Y.healthy_life_expectancy, Y.social_support, \
                    C.latitude, C.longtitude \
                    from year_2021 Y \
                    LEFT JOIN coordinates C ON C.country = Y.country;"

    # Read the sql contents into a dataframe
    year_2021 = pd.read_sql(sql_2021, conn)

    # Convert the dataframe contents to json
    year_2021 = year_2021.to_json(orient="records")

    #----------Year 2020------------------
    # Query All records in the "year_2020" table joining the latitude and longitude details from "coordinates" table
    sql_2020 = "SELECT Y.country, Y.freedom_to_make_life_choices, Y.gpd_per_capita, Y.happiness_score, Y.healthy_life_expectancy, Y.social_support, \
                    C.latitude, C.longtitude \
                    from year_2020 Y \
                    LEFT JOIN coordinates C ON C.country = Y.country;"

    # Read the sql contents into a dataframe
    year_2020 = pd.read_sql(sql_2020, conn)

    # Convert the dataframe contents to json
    year_2020 = year_2020.to_json(orient="records")

    #----------Year 2019------------------
    # Query All records in the "year_2019" table joining the latitude and longitude details from "coordinates" table
    sql_2019 = "SELECT Y.country, Y.freedom_to_make_life_choices, Y.gpd_per_capita, Y.happiness_score, Y.healthy_life_expectancy, Y.social_support, \
                    C.latitude, C.longtitude \
                    from year_2019 Y \
                    LEFT JOIN coordinates C ON C.country = Y.country;"

    # Read the sql contents into a dataframe
    year_2019 = pd.read_sql(sql_2019, conn)

    # Convert the dataframe contents to json
    year_2019 = year_2019.to_json(orient="records")
    #--------------------------------------

    # Close the database connection
    conn.close()

    # Inject the data extracted in to index.html file
    return render_template("index.html", year_2022=year_2022, year_2021=year_2021, year_2020=year_2020, year_2019=year_2019)

if __name__ == "__main__":
    app.run(debug=True)