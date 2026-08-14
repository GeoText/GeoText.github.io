# Arquitetura proposta

## 1. Identificação
Pasta: `app/identificar/`
API: `app/api/identificar/`

Entrada:
- nome
- descrição
- foto

Saída:
- provável família
- confiança
- funções
- aplicações
- diferenciação
- dados necessários para confirmação

## 2. Biblioteca / fichas
Pasta: `app/biblioteca/`
Base: `data/geosinteticos.json`
Fotos: `public/images/`

Cada material possui abas:
- Para que serve
- Como aplicar
- Tipos
- Cuidados / propriedades
- Fornecedores

Futuramente:
- normas
- fichas técnicas
- produtos comerciais
- comparador
- exemplos de obra
- downloads

## 3. Calculadora / pré-seleção
Pasta: `app/calculadora/`
API: `app/api/calcular/`

A primeira versão faz triagem por IA.
Para uma versão de engenharia, crie módulos específicos em:
- `lib/calculos/separacao.js`
- `lib/calculos/filtracao.js`
- `lib/calculos/drenagem.js`
- `lib/calculos/reforco.js`
- `lib/calculos/protecao.js`
- `lib/calculos/barreira.js`
- `lib/calculos/erosao.js`

Esses módulos devem ter fórmulas e critérios técnicos rastreáveis.

## 4. Assistente
Pasta: `app/assistente/`
API: `app/api/chat/`
Prompt: `lib/prompts.js`

Pode usar File Search quando `OPENAI_VECTOR_STORE_ID` estiver configurado.

## 5. Fornecedores
Pasta: `app/fornecedores/`
Base inicial: `data/fornecedores.json`

Evolução recomendada:
- cadastro próprio
- localização física
- entrega nacional
- estados atendidos
- telefone/WhatsApp
- site
- linha de produtos
- fabricante/distribuidor
- estoque/status
- data de última verificação

Fornecedores reais e preços devem ser verificados, não inventados pela IA.

## 6. Dados
Hoje: JSON no GitHub.
Depois: banco de dados (PostgreSQL/Supabase, por exemplo).

## 7. Segurança
Nunca colocar `OPENAI_API_KEY` no frontend.
Nunca commitar `.env.local`.
