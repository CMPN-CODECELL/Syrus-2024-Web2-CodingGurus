from flask import Flask, jsonify, request
from flask_cors import CORS  # Import the CORS module
from main2 import mainfunc
import json
import os

app = Flask(__name__)
CORS(app, origins="http://localhost:5173")  # Allow requests from http://localhost:5173

def search_by_name(name_to_search):
    script_dir = os.path.dirname(os.path.realpath(__file__))

# Specify the relative path to the data folder
    data_folder = os.path.join(script_dir, 'data')

# Specify the filename (replace 'file1.json' with the actual filename)
    file_path = os.path.join(data_folder, 'locationdata1.json')

# Open the JSON file
    with open(file_path, 'r') as json_file:
    # Load JSON data
        json_data = json.load(json_file)
   
    matches = [item for item in json_data if name_to_search.lower() in item["name"].lower()]

    return matches


@app.route('/')
def main():
    # Assuming mainfunc returns a JSON object
    return mainfunc("tourist-places-in-west-bengal")

@app.route('/data')
def getData():
    # Sample JSON data
    location_data = {"name": "Kalyan", "latitude": 1, "longitude": 2}
    return jsonify(location=location_data)

@app.route('/recommendation')
def getrecommendation():
    script_dir = os.path.dirname(os.path.realpath(__file__))

# Specify the relative path to the data folder
    data_folder = os.path.join(script_dir, 'data')

# Specify the filename (replace 'file1.json' with the actual filename)
    file_path = os.path.join(data_folder, 'locationdata1.json')

# Open the JSON file
    with open(file_path, 'r') as json_file:
    # Load JSON data
        json_data = json.load(json_file)


# Select the first 5 elements (or fewer if the file has fewer than 5 elements)
    selected_data = json_data[:5]

    return selected_data

@app.route('/search', methods=['POST'])
def search_city():
    # Assuming the data is sent as JSON
    data = request.get_json()

    # Access the 'destination' field from the JSON data
    destination = data.get('destination', '')

    # Process the data or perform a search based on 'destination'
    searched_items = search_by_name(destination)

    # Return a response, including the search results
    response_data = {'message': f'Searching for {destination}', 'data': searched_items}
    return jsonify(response_data)

@app.route('/location', methods=['GET'])
def search_location():
    destination = request.args.get('destination', '')
    
    # Call your function to search by name using the destination value
    searched_items = search_by_name(destination)

    response_data = {
        'message': f'Searching for {destination}',
        'data': searched_items
    }

    return jsonify(response_data)


if __name__ == "__main__":
    app.run(debug=True)
