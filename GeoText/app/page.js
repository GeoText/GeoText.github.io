import Link from "next/link";

const cards = [
  ["Identificar material", "/identificar", "Envie foto, nome ou descrição e receba uma identificação orientativa."],
  ["Biblioteca", "/biblioteca", "Consulte tipos, funções, aplicações, instalação e fornecedores."],
  ["Calculadora", "/calculadora", "Informe o problema e receba famílias de geossintéticos candidatas."],
  ["Fornecedores", "/fornecedores", "Consulte fornecedores online e físicos cadastrados."],
  ["Assistente IA", "/assistente", "Tire dúvidas técnicas sobre geossintéticos e seus usos."]
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="badge">ENGENHARIA + IA</span>
        <h1>GeoSintéticos AI</h1>
        <p>
          Identifique materiais, entenda aplicações, compare opções, encontre fornecedores
          e receba orientação inicial para selecionar geossintéticos.
        </p>
      </section>

      <section className="grid">
        {cards.map(([title, href, text]) => (
          <Link className="card" href={href} key={href}>
            <h2>{title}</h2>
            <p>{text}</p>
            <strong>Abrir →</strong>
          </Link>
        ))}
      </section>

      <section className="warning">
        <strong>Aviso técnico:</strong> as recomendações do sistema são orientativas e não substituem
        projeto, especificação, dimensionamento ou validação por profissional habilitado.
      </section>
    </>
  );
}
