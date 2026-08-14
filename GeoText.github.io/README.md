# GeoTex AI — versão pronta para GitHub Pages

Este repositório foi reorganizado para que o site abra diretamente no GitHub Pages.

## O que publica no navegador

O site estático fica na raiz do repositório:

- `index.html` — página inicial
- `styles.css` — estilos
- `script.js` — funcionalidades locais
- `identificar/`
- `biblioteca/`
- `calculadora/`
- `fornecedores/`
- `assistente/`
- `404.html`
- `.nojekyll`

Não há etapa de compilação e não é necessário executar Next.js para o site aparecer.

## Código do app

O protótipo do app mobile foi mantido em `app-mobile/`. GitHub Pages publica sites estáticos; ele não transforma esse código em aplicativo Android/iOS. Para isso, o app precisa ser configurado e compilado separadamente com React Native/Expo.

## Publicação

1. Extraia o ZIP no computador.
2. Envie **os arquivos e pastas de dentro da pasta** para a raiz do repositório no GitHub. Não envie apenas o ZIP como um arquivo.
3. No GitHub, abra `Settings` → `Pages`.
4. Configure a publicação a partir da branch principal e da pasta raiz `/ (root)`.
5. Depois que o deploy terminar, abra o endereço mostrado pelo GitHub Pages.

### Atenção ao nome do repositório

Se este for um site de usuário/organização, o nome precisa seguir o formato `<usuario>.github.io`. Se for um repositório de projeto com outro nome, o GitHub Pages normalmente publica em um subcaminho. Este site usa links relativos para funcionar nos dois cenários.

## Sobre IA real

O assistente desta versão é demonstrativo e roda inteiramente no navegador. Uma integração real com IA precisa de um backend ou função serverless para proteger chaves de API. Não coloque chaves secretas no `script.js`.
