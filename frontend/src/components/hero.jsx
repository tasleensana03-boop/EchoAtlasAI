import { useState } from "react";

function Hero() {
  const [dream, setDream] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeDream = async () => {
    if (!dream.trim()) {
      alert("Please enter your dream first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dream: dream,
        }),
      });

      const data = await response.json();

      setAnalysis(data.analysis);
    } catch (error) {
      console.error(error);
      setAnalysis("❌ Unable to connect to the backend.");
    }

    setLoading(false);
  };

  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

      <span className="mb-5 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-md">
        ✨ AI Powered Dream Interpretation
      </span>

      <h1 className="bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-7xl font-extrabold text-transparent">
        EchoAtlas AI
      </h1>

      <p className="mt-6 text-2xl text-gray-300">
        Every dream tells a hidden story.
      </p>

      <p className="mt-4 max-w-2xl text-gray-400">
        Decode hidden meanings, emotions, and symbols inside your dreams
        with the power of Artificial Intelligence.
      </p>

      <div className="mt-12 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

        <textarea
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          placeholder="Describe your dream..."
          className="h-44 w-full resize-none bg-transparent text-lg text-white placeholder-gray-400 outline-none"
        />

        <div className="mt-5 flex justify-end">
          <button
            onClick={analyzeDream}
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            {loading ? "Analyzing..." : "✨ Analyze Dream"}
          </button>
        </div>

        {analysis && (
          <div className="mt-8 rounded-2xl border border-purple-500/20 bg-white/5 p-6 text-left">
            <h2 className="mb-3 text-xl font-bold text-purple-300">
              🌙 Dream Analysis
            </h2>

            <p className="text-gray-300 whitespace-pre-wrap">
              {analysis}
            </p>
          </div>
        )}

      </div>

      {/* Footer Credit */}
      <div className="mt-8 text-center opacity-60 hover:opacity-100 transition duration-300">

        <p className="text-[7px] uppercase tracking-[0.35em] text-gray-500">
          Designed &amp; Developed by
        </p>

        <p className="mt-1 text-[9px] text-gray-300">
          Tasleen Sana
        </p>

      </div>

    </main>
  );
}

export default Hero;