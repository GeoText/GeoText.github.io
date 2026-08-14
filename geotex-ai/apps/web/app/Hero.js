import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Identifique, Selecione e Dimensione Geossintéticos com IA
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Tire fotos, busque por nome ou descreva o material. O GeoTex AI te ajuda a escolher o geossintético certo para sua obra.
        </p>
        <div className="space-x-4">
          <Link href="/identificar" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Identificar Agora
          </Link>
          <Link href="/calculadora" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition">
            Calculadora Técnica
          </Link>
        </div>
      </div>
    </section>
  )
}
