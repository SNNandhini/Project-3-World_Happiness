import json
import csv

with open ("2022.csv", "r") as f:
    reader = csv.reader(f)
    next(reader)
    data = {"countries": []}
    for row in reader:
        data["countries"].append({"country":
        row[0], "happiness_score2022": row[1], "gpd_per_capita2022": row[2], "social_support2022":row[3], "healthy_life_expectancy2022":row[4], "freedom_to_make_life_choices2022":row[5], "latitude":row[6], "longtitude":row[7]})
    print(data)
    
with open ("2022.json", "w") as f:
    json.dump(data, f, indent=4)


with open ("2021.csv", "r") as g:
    reader = csv.reader(g)
    next(reader)
    data1 = {"countries1": []}
    for row in reader:
        data1["countries1"].append({"country":
        row[0], "happiness_score2021": row[1], "gpd_per_capita2021": row[2], "social_support2021":row[3], "healthy_life_expectancy2021":row[4], "freedom_to_make_life_choices2021":row[5], "latitude":row[6], "longtitude":row[7]})
    print(data1)
    
with open ("2021.json", "w") as g:
    json.dump(data1, g, indent=4)


with open ("2020.csv", "r") as h:
    reader = csv.reader(h)
    next(reader)
    data2 = {"countries2": []}
    for row in reader:
        data2["countries2"].append({"country":
        row[0], "happiness_score2020": row[1], "gpd_per_capita2020": row[2], "social_support2020":row[3], "healthy_life_expectancy2020":row[4], "freedom_to_make_life_choices2020":row[5], "latitude":row[6], "longtitude":row[7]})
    print(data2)
    
with open ("2020.json", "w") as h:
    json.dump(data2, h, indent=4)


with open ("2019.csv", "r") as i:
    reader = csv.reader(i)
    next(reader)
    data3 = {"countries3": []}
    for row in reader:
        data3["countries3"].append({"country":
        row[0], "happiness_score2019": row[1], "gpd_per_capita2019": row[2], "social_support2019":row[3], "healthy_life_expectancy2019":row[4], "freedom_to_make_life_choices2019":row[5], "latitude":row[6], "longtitude":row[7]})
    print(data3)
    
with open ("2019.json", "w") as i:
    json.dump(data3, i, indent=4)