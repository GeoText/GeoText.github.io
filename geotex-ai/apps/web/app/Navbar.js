import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          GeoTex AI
        </Link>
        <div className="space-x-6">
          <Link href="/identificar" className="hover:text-blue-300">Identificar</Link>
          <Link href="/biblioteca" className="hover:text-blue-300">Biblioteca</Link>
          <Link href="/calculadora" className="hover:text-blue-300">Calculadora</Link>
          <Link href="/fornecedores" className="hover:text-blue-300">Fornecedores</Link>
          <Link href="/assistente" className="hover:text-blue-300">Assistente</Link>
        </div>
      </div>
    </nav>
  )
}
