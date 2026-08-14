import { NextResponse } from "next/server";
import { getOpenAI } from "../../../lib/openai";
import { SYSTEM_PROMPT } from "../../../lib/prompts";

export async function POST(request) {
  try {
    const { message } = await request.json();
    const client = getOpenAI();

    const tools = [];
    if (process.env.OPENAI_VECTOR_STORE_ID) {
      tools.push({
        type: "file_search",
        vector_store_ids: [process.env.OPENAI_VECTOR_STORE_ID]
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.6",
      instructions: SYSTEM_PROMPT,
      input: message,
      ...(tools.length ? { tools } : {})
    });

    return NextResponse.json({ answer: response.output_text });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Erro ao consultar a IA." },
      { status: 500 }
    );
  }
}
