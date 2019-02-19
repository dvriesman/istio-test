from flask import Flask
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/xapi/hello')
def hello_world():
    app.logger.info('No metodo hello_word - v2')
    return jsonify({'message':'Hello Girl, how are you? I am a modern version of this app'})

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
