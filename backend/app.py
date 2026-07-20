from flask import Flask, request, jsonify
from flask_cors import CORS
from services.gemini_service import analyze_dream

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return {
        "status": "success",
        "message": "Welcome to EchoAtlas AI Backend 🚀"
    }


@app.route("/analyze", methods=["POST"])
def analyze():
    try:
        data = request.get_json()

        dream = data.get("dream", "")

        if not dream.strip():
            return jsonify({
                "status": "error",
                "message": "Dream cannot be empty."
            }), 400

        result = analyze_dream(dream)

        return jsonify({
            "status": "success",
            "analysis": result
        })

    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)