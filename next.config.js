/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // gera HTML estático
  images: {
    unoptimized: true, // necessário para exportação
  },
  // Se o repositório for "GeoText.github.io" (user site), NÃO use basePath
  // Se for "GeoText/geotex-ai" (project site), use basePath: '/geotex-ai'
};

module.exports = nextConfig;
