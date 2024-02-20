from flask import Flask, jsonify, render_template, request

app = Flask(__name__)


@app.route('/')
def main():
    return "hii"
@app.route('/data')
def getData():
    return jsonify(location={"name": "Kalyan", "latitude":1, "longitude":2})

if __name__ == "__main__":
    app.run(debug=True)