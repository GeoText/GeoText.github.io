/**
 * Módulo de Cálculo para Proteção (de geomembranas, por exemplo)
 * Verifica resistência à punção e à abrasão.
 */

export function calcularProtecao(dados) {
  const { geotexteis, puncaoMinima, abrasaoMinima } = dados;
  return {
    puncao: {
      ok: geotexteis.puncao >= puncaoMinima,
      valor: geotexteis.puncao,
      limite: puncaoMinima
    },
    abrasao: {
      ok: geotexteis.rasgo >= abrasaoMinima, // proxy
      valor: geotexteis.rasgo,
      limite: abrasaoMinima
    }
  };
}
