// Endpoint para cálculos (Next.js API route)
import { calcularFiltracao } from '../../../../../packages/core/calculos/filtracao';

export async function POST(request) {
  try {
    const body = await request.json();
    // body deve conter os dados da obra + geotêxtil selecionado
    const resultado = calcularFiltracao(body);
    return Response.json({ success: true, data: resultado });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}
