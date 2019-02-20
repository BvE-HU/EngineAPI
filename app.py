from flask import Flask, send_from_directory, jsonify
from products import popularProducts

app = Flask(__name__)

@app.route('/<path:filename>')
def download_file(filename):
    return send_from_directory('static', filename, as_attachment=False)


@app.route('/productservice/')
def productservice():
    return jsonify(popularProducts())


if __name__ == '__main__':
    app.run()
