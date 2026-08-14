# Arquitetura do GeoTex AI

## Visão Geral

O projeto é dividido em três grandes áreas:

- **apps/** – Frontends (web e mobile)
- **packages/** – Lógica de negócio e dados (catalog e core)
- **docs/** – Documentação estática

## Fluxo de Dados

1. O usuário interage com o frontend (web ou mobile).
2. As requisições de cálculo ou busca são enviadas para APIs internas (no caso do web) ou processadas localmente (no mobile) usando os pacotes `core` e `catalog`.
3. Os pacotes `core` contêm algoritmos de engenharia baseados em normas (CFG, FHWA, AASHTO, etc.).
4. Os resultados são retornados ao frontend e exibidos com gráficos, tabelas e recomendações.

## Módulos de Cálculo (`packages/core/calculos/`)

Cada arquivo implementa uma função principal que recebe um objeto com parâmetros da obra e do solo, e retorna um objeto com os resultados das verificações.

Exemplo:
```js
// filtracao.js
export function calcularFiltracao(dadosObra) {
  // dadosObra = { d10, d15, d50, d60, d85, coesivo, confinado, fluxo, gradiente, critico, ... }
  // retorna { retencao: { ok, detalhes }, anticolmatacao: { ok, detalhes }, ... }
}
```

## Catálogo de Produtos (`packages/catalog/index.js`)

Exporta uma lista de objetos, cada um representando um geossintético comercial com suas propriedades (nome, fabricante, categoria, características técnicas, etc.).

## Próximos Passos

- Implementar os algoritmos de cada módulo de cálculo.
- Popular o catálogo com produtos reais.
- Criar as interfaces de usuário para cada funcionalidade.
- Integrar com APIs de fornecedores e mapas para localização.
