from flask import Flask, jsonify, render_template, request
# import mainfunc from 'main (1)'
from main2 import mainfunc
app = Flask(__name__)


@app.route('/')
def main():
    return mainfunc("tourist-places-in-west-bengal")
@app.route('/data')
def getData():
    return jsonify(location={"name": "Kalyan", "latitude":1, "longitude":2})

if __name__ == "__main__":
    app.run(debug=True)