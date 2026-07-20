import google.generativeai as genai
from config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def analyze_dream(dream):

    prompt = f"""
You are EchoAtlas AI, an expert dream interpretation assistant.

Analyze the following dream in a friendly and insightful way.

Dream:
{dream}

Respond in this format:

🌙 Dream Summary

🧠 Hidden Meaning

🔑 Important Symbols

❤️ Emotional Analysis

🌱 Guidance

⭐ Dream Score (out of 10)
"""

    response = model.generate_content(prompt)

    return response.text