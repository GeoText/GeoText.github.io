"use client";

import AiForm from "../../components/AiForm";

export default function AssistentePage() {
  return (
    <>
      <h1 className="pageTitle">Assistente de IA</h1>
      <p className="lead">
        Faça perguntas sobre funções, usos, diferenças, instalação, seleção e comportamento
        de geossintéticos.
      </p>

      <AiForm
        endpoint="/api/chat"
        buildPayload={async (form) => {
          const fd = new FormData(form);
          return { message: fd.get("message") };
        }}
      >
        <label>
          Sua dúvida
          <textarea
            name="message"
            required
            placeholder="Ex.: qual a diferença entre geotêxtil tecido e não tecido em separação e reforço?"
          />
        </label>
      </AiForm>
    </>
  );
}
