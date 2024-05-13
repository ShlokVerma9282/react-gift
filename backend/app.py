from flask import Flask, request, jsonify
from cohere import Client
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS for all origins
co = Client('UkJsf5LTHL1g0Gk1re82j50ieqdLfxWQUI2pEz4D')

@app.route('/generate', methods=['POST'])
def generate_output():
    text = request.json.get('text')
    response = co.generate(
        model='command-nightly',
        prompt=text,
        max_tokens=300,
        temperature=0.9,
        k=0,
        p=0.75,
        stop_sequences=[],
        return_likelihoods='NONE'
    )
    output = response.generations[0].text
    return jsonify({'output': output})

if __name__ == "__main__":
    app.run(debug=True)
