import fornecedores from "../../data/fornecedores.json";

export default function FornecedoresPage() {
  return (
    <>
      <h1 className="pageTitle">Fornecedores</h1>
      <p className="lead">
        Base separada para fornecedores online e físicos. Os registros atuais são apenas demonstrativos.
      </p>

      <section className="grid">
        {fornecedores.map((f) => (
          <article className="card" key={f.nome}>
            <span className="badge">{f.tipo.join(" + ")}</span>
            <h2>{f.nome}</h2>
            <p>{f.cidade}/{f.uf}</p>
            <p><strong>Produtos:</strong> {f.produtos.join(", ")}</p>
            <p className="small">{f.observacao}</p>
          </article>
        ))}
      </section>
    </>
  );
}
