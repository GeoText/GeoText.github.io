import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <Link className="brand" href="/">GeoSintéticos AI</Link>
        <nav>
          <Link href="/identificar">Identificar</Link>
          <Link href="/biblioteca">Biblioteca</Link>
          <Link href="/calculadora">Calculadora</Link>
          <Link href="/fornecedores">Fornecedores</Link>
          <Link href="/assistente">IA</Link>
        </nav>
      </div>
    </header>
  );
}
