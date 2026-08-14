"use client";

import AiForm from "../../components/AiForm";

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve("");
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function IdentificarPage() {
  return (
    <>
      <h1 className="pageTitle">Identificar geossintético</h1>
      <p className="lead">
        Informe um nome, uma descrição, envie uma foto, ou combine as três formas.
        A resposta é uma identificação orientativa.
      </p>

      <AiForm
        endpoint="/api/identificar"
        buildPayload={async (form) => {
          const fd = new FormData(form);
          return {
            description: fd.get("description"),
            imageDataUrl: await fileToDataUrl(fd.get("image"))
          };
        }}
      >
        <label>
          Nome ou descrição
          <textarea
            name="description"
            placeholder="Ex.: manta branca fibrosa usada entre solo e brita..."
          />
        </label>

        <label>
          Foto do material
          <input name="image" type="file" accept="image/*" />
        </label>

        <span className="small">
          Dica: fotos da superfície, borda, embalagem/etiqueta e aplicação melhoram a análise.
        </span>
      </AiForm>
    </>
  );
}
