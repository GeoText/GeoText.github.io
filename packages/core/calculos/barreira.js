/**
 * Módulo de Cálculo para Barreira (impermeabilização)
 * Verifica a permeabilidade e resistência química.
 */

export function calcularBarreira(dados) {
  const { geotexteis, permeabilidadeMaxima, resistenciaQuimica } = dados;
  return {
    permeabilidade: {
      ok: geotexteis.permeabilidade <= permeabilidadeMaxima,
      valor: geotexteis.permeabilidade,
      limite: permeabilidadeMaxima
    },
    quimica: {
      ok: resistenciaQuimica === 'adequado', // exemplo
      detalhes: 'Verificar ficha técnica para químicos agressivos'
    }
  };
}
