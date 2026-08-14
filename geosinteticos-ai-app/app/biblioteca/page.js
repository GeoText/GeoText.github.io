import Link from "next/link";
import materiais from "../../data/geosinteticos.json";

export default function BibliotecaPage() {
  return (
    <>
      <h1 className="pageTitle">Biblioteca de geossintéticos</h1>
      <p className="lead">Cada material possui uma ficha própria, organizada em abas.</p>

      <section className="grid">
        {materiais.map((item) => (
          <Link className="card" href={`/biblioteca/${item.slug}`} key={item.slug}>
            <img className="productImage" src={item.imagem} alt={item.nome} />
            <h2>{item.nome}</h2>
            <p>{item.resumo}</p>
            <strong>Ver ficha →</strong>
          </Link>
        ))}
      </section>
    </>
  );
}
