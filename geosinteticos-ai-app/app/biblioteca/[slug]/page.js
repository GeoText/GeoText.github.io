import materiais from "../../../data/geosinteticos.json";
import fornecedores from "../../../data/fornecedores.json";
import { notFound } from "next/navigation";

export default async function MaterialPage({ params, searchParams }) {
  const { slug } = await params;
  const query = await searchParams;
  const material = materiais.find((item) => item.slug === slug);
  if (!material) notFound();

  const aba = query.aba || "serve";
  const fornecedoresDoMaterial = fornecedores.filter((f) =>
    f.produtos.some((produto) =>
      material.familia.toLowerCase().includes(produto.toLowerCase()) ||
      produto.toLowerCase().includes(material.familia.toLowerCase())
    )
  );

  return (
    <>
      <div className="twoCol">
        <div>
          <span className="badge">{material.familia}</span>
          <h1 className="pageTitle">{material.nome}</h1>
          <p className="lead">{material.resumo}</p>
        </div>
        <img className="productImage" src={material.imagem} alt={material.nome} />
      </div>

      <div className="tabs">
        <a className="tab" href="?aba=serve">Para que serve</a>
        <a className="tab" href="?aba=aplicar">Como aplicar</a>
        <a className="tab" href="?aba=tipos">Tipos</a>
        <a className="tab" href="?aba=cuidados">Cuidados</a>
        <a className="tab" href="?aba=fornecedores">Fornecedores</a>
      </div>

      <section className="panel">
        {aba === "serve" && (
          <>
            <h2>Para que serve</h2>
            <ul>{material.servePara.map((x) => <li key={x}>{x}</li>)}</ul>
          </>
        )}

        {aba === "aplicar" && (
          <>
            <h2>Como aplicar</h2>
            <p>{material.comoAplicar}</p>
          </>
        )}

        {aba === "tipos" && (
          <>
            <h2>Tipos</h2>
            <ul>{material.tipos.map((x) => <li key={x}>{x}</li>)}</ul>
          </>
        )}

        {aba === "cuidados" && (
          <>
            <h2>Parâmetros e cuidados</h2>
            <ul>{material.cuidados.map((x) => <li key={x}>{x}</li>)}</ul>
          </>
        )}

        {aba === "fornecedores" && (
          <>
            <h2>Fornecedores</h2>
            {fornecedoresDoMaterial.length ? fornecedoresDoMaterial.map((f) => (
              <div key={f.nome}>
                <strong>{f.nome}</strong>
                <p>{f.cidade}/{f.uf} · {f.tipo.join(" + ")}</p>
              </div>
            )) : <p>Nenhum fornecedor cadastrado.</p>}
          </>
        )}
      </section>
    </>
  );
}
