from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route("/")
def home():
    data19 = pd.read_csv("2019.csv")
    data19_json = data19.to_json(orient="records")
    data20 = pd.read_csv("2020.csv")
    data20_json = data20.to_json(orient="records")
    data21 = pd.read_csv("2021.csv")
    data21_json = data21.to_json(orient="records")
    data22 = pd.read_csv("2022.csv")
    data22_json = data22.to_json(orient="records")
    return render_template("index.html", data19_json=data19_json, data20_json=data20_json, data21_json=data21_json, data22_json=data22_json)



if __name__ == "__main__":
    app.run(debug=True)