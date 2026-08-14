import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para começar?
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Acesse agora nossas ferramentas e simplifique seu trabalho com geossintéticos.
        </p>
        <Link href="/identificar" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
          Identificar um Geossintético
        </Link>
      </div>
    </section>
  )
}
