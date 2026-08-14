"use client";

import AiForm from "../../components/AiForm";

export default function CalculadoraPage() {
  return (
    <>
      <h1 className="pageTitle">Pré-seleção de geossintético</h1>
      <p className="lead">
        Esta ferramenta faz uma triagem inicial da função necessária e das famílias candidatas.
        O dimensionamento final exige dados técnicos e projeto.
      </p>

      <AiForm
        endpoint="/api/calcular"
        buildPayload={async (form) => Object.fromEntries(new FormData(form).entries())}
      >
        <label>
          Aplicação
          <select name="aplicacao">
            <option>Pavimentação</option>
            <option>Drenagem</option>
            <option>Talude ou contenção</option>
            <option>Aterro</option>
            <option>Obra hidráulica</option>
            <option>Obra ambiental</option>
            <option>Fundação / plataforma de trabalho</option>
            <option>Outra</option>
          </select>
        </label>

        <label>
          Problema principal
          <input name="problema" placeholder="Ex.: mistura da brita com o subleito" />
        </label>

        <div className="twoCol">
          <label>
            Tipo de solo
            <input name="solo" placeholder="Ex.: areia siltosa, argila mole..." />
          </label>
          <label>
            Água / drenagem
            <input name="agua" placeholder="Ex.: nível d'água alto, fluxo ascendente..." />
          </label>
        </div>

        <label>
          Carga / tráfego
          <input name="carga" placeholder="Ex.: tráfego pesado de caminhões" />
        </label>

        <label>
          Outras observações
          <textarea name="observacoes" placeholder="Geometria, espessuras, inclinação, agressividade etc." />
        </label>
      </AiForm>
    </>
  );
}
