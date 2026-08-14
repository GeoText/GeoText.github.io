/**
 * Módulo de Cálculo para Separação
 * Verifica se o geotêxtil é adequado para evitar a mistura de camadas.
 * 
 * Critérios principais: resistência à tração, punção e rasgo,
 * além de abertura aparente (O95) para não permitir migração de finos.
 */

/**
 * @typedef {Object} DadosSeparacao
 * @property {number} carga - Carga aplicada (kN/m)
 * @property {number} tracaoMin - Tração mínima exigida (kN/m)
 * @property {number} puncaoMin - Punção mínima exigida (kN)
 * @property {number} rasgoMin - Rasgo mínimo exigido (kN)
 * @property {Object} geotexteis - Propriedades do geotêxtil
 */

export function calcularSeparacao(dados) {
  const { geotexteis } = dados;
  const resultado = {
    tracao: {
      ok: geotexteis.tracao >= dados.tracaoMin,
      valor: geotexteis.tracao,
      limite: dados.tracaoMin
    },
    puncao: {
      ok: geotexteis.puncao >= dados.puncaoMin,
      valor: geotexteis.puncao,
      limite: dados.puncaoMin
    },
    rasgo: {
      ok: geotexteis.rasgo >= dados.rasgoMin,
      valor: geotexteis.rasgo,
      limite: dados.rasgoMin
    }
  };
  const aprovados = Object.values(resultado).filter(r => r.ok).length;
  resultado.resumo = {
    aprovados,
    total: 3,
    aprovado: aprovados === 3
  };
  return resultado;
}
