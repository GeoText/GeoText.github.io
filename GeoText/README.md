# GeoSintéticos AI

Aplicação web para identificação, consulta, seleção e estudo de geossintéticos.

## Módulos

- **Identificar**: recebe nome, descrição ou foto de um geossintético.
- **Biblioteca**: mostra fichas completas por material.
- **Calculadora**: sugere famílias de geossintéticos conforme o problema informado.
- **Fornecedores**: lista fornecedores online e físicos cadastrados.
- **Assistente IA**: responde dúvidas sobre geossintéticos e seus usos.
- **Documentos**: pasta preparada para fichas técnicas, catálogos e referências.

## Rodar localmente

1. Instale Node.js.
2. Copie `.env.example` para `.env.local`.
3. Coloque sua chave em `OPENAI_API_KEY`.
4. Execute:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## GitHub

Suba todo o projeto para um repositório, EXCETO `.env.local`.

A chave da OpenAI deve ficar nas variáveis de ambiente da plataforma onde o backend será publicado.

## Estrutura

Veja as pastas `app/`, `components/`, `data/`, `lib/`, `public/images/` e `docs/`.

## Próximos passos recomendados

- Substituir a base de exemplo por dados técnicos validados.
- Adicionar fabricantes e distribuidores reais.
- Integrar mapas/geolocalização para fornecedores físicos.
- Criar regras de dimensionamento por função: separação, filtração, drenagem, reforço, proteção, impermeabilização e controle de erosão.
- Adicionar documentos ao Vector Store da OpenAI para respostas baseadas em fichas técnicas e catálogos.
