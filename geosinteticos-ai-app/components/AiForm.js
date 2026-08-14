"use client";

import { useState } from "react";

export default function AiForm({ endpoint, children, buildPayload }) {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const payload = await buildPayload(event.currentTarget);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      setResult(data.answer || data.error || "Sem resposta.");
    } catch (e) {
      setResult(e.message || "Erro.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form className="form panel" onSubmit={submit}>
        {children}
        <button disabled={loading}>
          {loading ? "Analisando..." : "Analisar"}
        </button>
      </form>
      {result && <div className="result">{result}</div>}
    </>
  );
}
