/**
 * Catálogo compartilhado de geossintéticos.
 * Este arquivo contém uma lista de produtos com todas as propriedades necessárias
 * para identificação, comparação e cálculo.
 */

export const catalogo = [
  {
    id: 'gtx-001',
    nome: 'Geotêxtil Não Tecido 200g/m²',
    fabricante: 'GeoFabric',
    linha: 'NW200',
    categoria: 'geotêxtil',
    modelo: 'NT-200',
    fotos: ['/images/nt200.jpg'],
    material: 'polipropileno',
    processo: 'agulhado',
    gramatura: 200, // g/m²
    espessura: 2.5, // mm
    propriedades: {
      hidraulicas: {
        O90: 0.12, // mm
        O95: 0.15,
        permissividade: 0.8, // s⁻¹
        permeabilidade: 0.02, // cm/s
        transmissividade: 0.5, // m²/s
      },
      mecanicas: {
        tracao: 12, // kN/m
        alongamento: 50, // %
        puncao: 2.5, // kN
        rasgo: 0.8, // kN
      }
    },
    funcoes: ['separacao', 'filtracao', 'drenagem'],
    informacoesComerciais: {
      fabricante: 'GeoFabric',
      distribuidores: ['Distribuidora A', 'Loja B'],
      lojasFisicas: ['Rua X, 123'],
      lojasOnline: ['https://loja.com/nt200'],
      fichaTecnica: '/docs/fichas/nt200.pdf',
      site: 'https://geofabric.com/nt200'
    }
  },
  // Adicione mais produtos conforme necessário
];

/**
 * Função para buscar produtos por critérios (ex: função, gramatura, etc.)
 * @param {Object} filtros - { funcao, gramaturaMin, gramaturaMax, fabricante }
 * @returns {Array} produtos que atendem aos filtros
 */
export function buscarProdutos(filtros) {
  // Implementar lógica de busca
  return catalogo.filter(produto => {
    // Exemplo: filtrar por função
    if (filtros.funcao && !produto.funcoes.includes(filtros.funcao)) return false;
    // Outros filtros...
    return true;
  });
}

/**
 * Obtém um produto pelo ID
 */
export function getProduto(id) {
  return catalogo.find(p => p.id === id);
}
