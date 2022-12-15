import pandas as pd
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from flask import Flask, render_template

app = Flask(__name__)

# setup PostgreSQL connection
def get_db_connection():

    # Create a connection string for the Employee Database
    load_dotenv()

    protocol = os.getenv("PROTOCOL")
    username = os.getenv("USER_NAME")
    password = os.getenv("PASSWORD")
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

    # Query All Records in the "year_2022" table
    sql = "SELECT * from year_2022;"

    year_2022 = pd.read_sql(sql, conn)
    countries = year_2022.country
    year_2022 = year_2022.to_json(orient="records")

    #print(year_2022)
    
    # Close the database connection
    conn.close()

    return render_template("index.html", year_2022=year_2022, countries=countries)


if __name__ == "__main__":
    app.run(debug=True)