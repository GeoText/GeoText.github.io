import { NextResponse } from "next/server";
import { getOpenAI } from "../../../lib/openai";
import { SYSTEM_PROMPT } from "../../../lib/prompts";

export async function POST(request) {
  try {
    const data = await request.json();
    const client = getOpenAI();

    const prompt = `
Faça uma TRIAGEM TÉCNICA INICIAL de geossintéticos para o caso abaixo.

Aplicação: ${data.aplicacao || "não informada"}
Problema principal: ${data.problema || "não informado"}
Tipo de solo: ${data.solo || "não informado"}
Água/drenagem: ${data.agua || "não informado"}
Carga/tráfego: ${data.carga || "não informado"}
Observações: ${data.observacoes || "nenhuma"}

Entregue:
1. função(ões) necessária(s);
2. famílias candidatas de geossintéticos;
3. parâmetros que precisam ser especificados/verificados;
4. alternativas possíveis;
5. dados adicionais necessários para dimensionamento;
6. limitações e riscos;
7. não indique uma gramatura, resistência ou produto comercial final sem dados suficientes.

Isto é uma pré-seleção e não um projeto executivo.
`;

    const response = await client.responses.create({
      model: "gpt-5.6",
      instructions: SYSTEM_PROMPT,
      input: prompt
    });

    return NextResponse.json({ answer: response.output_text });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Erro na pré-seleção." },
      { status: 500 }
    );
  }
}
