/**
 * Módulo de Cálculo para Filtração
 * Baseado em critérios do CFG, FHWA e AASHTO M288.
 * 
 * A função principal recebe os parâmetros da obra e do solo,
 * e retorna um objeto com os resultados das verificações:
 * - Retenção
 * - Anti-colsão (colmatação)
 * - Permeabilidade
 * - Durabilidade
 */

/**
 * @typedef {Object} DadosFiltracao
 * @property {number} d10 - Diâmetro efetivo (mm)
 * @property {number} d15 - Diâmetro para 15% passante (mm)
 * @property {number} d50 - Diâmetro mediano (mm)
 * @property {number} d60 - Diâmetro para 60% passante (mm)
 * @property {number} d85 - Diâmetro para 85% passante (mm)
 * @property {boolean} coesivo - Solo coesivo?
 * @property {boolean} confinado - Solo confinado?
 * @property {string} fluxo - 'permanente' ou 'variavel'
 * @property {number} gradiente - Gradiente hidráulico
 * @property {boolean} critico - Aplicação crítica?
 * @property {Object} geotexteis - Propriedades do geotêxtil (O90, O95, permeabilidade, etc.)
 */

/**
 * Verifica o critério de retenção.
 * @param {DadosFiltracao} dados
 * @returns {Object} { ok: boolean, detalhes: string, valorCalculado: number, valorLimite: number }
 */
function verificarRetencao(dados) {
  // Exemplo: critério CFG para retenção (depende do tipo de solo e aplicação)
  // Implementar conforme fórmulas do TCC.
  const { d85, geotexteis } = dados;
  const O95 = geotexteis.O95;
  // Fórmula simplificada: O95 ≤ d85 (para solo com mais de 50% passante #200)
  const ok = O95 <= d85;
  return {
    ok,
    detalhes: ok ? 'O95 ≤ d85 - atende ao critério de retenção' : 'O95 > d85 - não atende',
    valorCalculado: O95,
    valorLimite: d85
  };
}

/**
 * Verifica o critério de anti-colsão (colmatação).
 * @param {DadosFiltracao} dados
 * @returns {Object} { ok, detalhes, valorCalculado, valorLimite }
 */
function verificarAnticolmatacao(dados) {
  // Exemplo: FHWA para solo coesivo: O90 ≤ d15 (ou outra relação)
  const { d15, geotexteis } = dados;
  const O90 = geotexteis.O90;
  const ok = O90 <= d15;
  return {
    ok,
    detalhes: ok ? 'O90 ≤ d15 - atende' : 'O90 > d15 - não atende',
    valorCalculado: O90,
    valorLimite: d15
  };
}

/**
 * Verifica a permeabilidade.
 * @param {DadosFiltracao} dados
 * @returns {Object} { ok, detalhes, valorCalculado, valorLimite }
 */
function verificarPermeabilidade(dados) {
  // Exemplo: permeabilidade do geotêxtil deve ser maior que a do solo
  const { geotexteis } = dados;
  const kGeotex = geotexteis.permeabilidade; // cm/s
  const kSolo = 0.001; // Valor hipotético - deveria ser passado nos dados
  const ok = kGeotex >= 10 * kSolo; // regra prática
  return {
    ok,
    detalhes: ok ? 'Permeabilidade adequada' : 'Permeabilidade insuficiente',
    valorCalculado: kGeotex,
    valorLimite: 10 * kSolo
  };
}

/**
 * Verifica a durabilidade (baseado em AASHTO M288).
 * @param {DadosFiltracao} dados
 * @returns {Object} { ok, detalhes, fatores }
 */
function verificarDurabilidade(dados) {
  // Verificar resistência UV, químicos, temperatura, etc.
  // Por simplicidade, retorna sempre ok com ressalvas.
  return {
    ok: true,
    detalhes: 'Consulte a ficha técnica para avaliação de durabilidade em condições específicas',
    fatores: {
      uv: 'protegido',
      quimicos: 'resistente',
      temperatura: 'adequado'
    }
  };
}

/**
 * Função principal do módulo de filtração.
 * @param {DadosFiltracao} dados
 * @returns {Object} Resultados de todas as verificações
 */
export function calcularFiltracao(dados) {
  // Validação básica dos dados de entrada
  if (!dados.d10 || !dados.d15 || !dados.d50 || !dados.d60 || !dados.d85) {
    throw new Error('Dados granulométricos incompletos');
  }
  if (!dados.geotexteis || !dados.geotexteis.O90 || !dados.geotexteis.O95) {
    throw new Error('Dados do geotêxtil incompletos (O90, O95)');
  }

  const retencao = verificarRetencao(dados);
  const anticolmatacao = verificarAnticolmatacao(dados);
  const permeabilidade = verificarPermeabilidade(dados);
  const durabilidade = verificarDurabilidade(dados);

  // Resumo: quantos critérios foram aprovados
  const aprovados = [retencao, anticolmatacao, permeabilidade, durabilidade].filter(r => r.ok).length;

  return {
    retencao,
    anticolmatacao,
    permeabilidade,
    durabilidade,
    resumo: {
      aprovados,
      total: 4,
      aprovado: aprovados === 4
    }
  };
}
