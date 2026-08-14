import { NextResponse } from "next/server";
import { getOpenAI } from "../../../lib/openai";
import { SYSTEM_PROMPT } from "../../../lib/prompts";

export async function POST(request) {
  try {
    const { description, imageDataUrl } = await request.json();
    const client = getOpenAI();

    const content = [
      {
        type: "input_text",
        text: `
Analise o material informado e faça uma identificação ORIENTATIVA.

Descrição/nome fornecido pelo usuário:
${description || "(não informado)"}

Responda com:
- provável família/tipo de geossintético;
- nível de confiança (baixo, médio ou alto);
- características visuais ou textuais que sustentam a hipótese;
- principais funções;
- aplicações típicas;
- diferenças para materiais parecidos;
- quais dados/fotos adicionais ajudariam a confirmar;
- aviso de que a identificação visual não substitui ficha técnica, etiqueta ou confirmação do fabricante.
        `
      }
    ];

    if (imageDataUrl) {
      content.push({
        type: "input_image",
        image_url: imageDataUrl,
        detail: "auto"
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.6",
      instructions: SYSTEM_PROMPT,
      input: [{ role: "user", content }]
    });

    return NextResponse.json({ answer: response.output_text });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Erro na identificação." },
      { status: 500 }
    );
  }
}
