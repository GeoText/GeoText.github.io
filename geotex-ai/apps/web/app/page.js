import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={styles.container}>
      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.title}>🧠 GeoTex AI</h1>
        <p style={styles.subtitle}>
          Identifique, selecione e dimensione geossintéticos com inteligência
        </p>
        <div style={styles.heroButtons}>
          <Link href="/identificar" style={styles.primaryBtn}>
            Começar agora
          </Link>
          <Link href="/biblioteca" style={styles.secondaryBtn}>
            Explorar biblioteca
          </Link>
        </div>
      </section>

      {/* Funcionalidades */}
      <section style={styles.features}>
        <h2 style={styles.featuresTitle}>O que você pode fazer</h2>
        <div style={styles.cards}>
          <div style={styles.card}>
            <span style={styles.cardIcon}>📸</span>
            <h3>Identificar</h3>
            <p>Por foto, nome ou descrição, descubra qual geossintético você tem em mãos.</p>
            <Link href="/identificar" style={styles.cardLink}>Identificar →</Link>
          </div>
          <div style={styles.card}>
            <span style={styles.cardIcon}>📚</span>
            <h3>Biblioteca</h3>
            <p>Acesse fichas técnicas, catálogos e informações detalhadas de cada produto.</p>
            <Link href="/biblioteca" style={styles.cardLink}>Ver biblioteca →</Link>
          </div>
          <div style={styles.card}>
            <span style={styles.cardIcon}>🧮</span>
            <h3>Calculadora</h3>
            <p>Insira os parâmetros da obra e verifique qual geotêxtil atende aos critérios.</p>
            <Link href="/calculadora" style={styles.cardLink}>Calcular →</Link>
          </div>
          <div style={styles.card}>
            <span style={styles.cardIcon}>📍</span>
            <h3>Fornecedores</h3>
            <p>Encontre fabricantes e distribuidores perto de você ou online.</p>
            <Link href="/fornecedores" style={styles.cardLink}>Encontrar →</Link>
          </div>
          <div style={styles.card}>
            <span style={styles.cardIcon}>🤖</span>
            <h3>Assistente</h3>
            <p>Tire dúvidas técnicas com nosso assistente virtual especializado.</p>
            <Link href="/assistente" style={styles.cardLink}>Perguntar →</Link>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section style={styles.flow}>
        <h2>Como funciona</h2>
        <div style={styles.flowSteps}>
          <div style={styles.step}>
            <span style={styles.stepNumber}>1</span>
            <h4>Identifique</h4>
            <p>Fotografe ou descreva o material</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepNumber}>2</span>
            <h4>Entenda</h4>
            <p>Veja funções, propriedades e aplicações</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepNumber}>3</span>
            <h4>Selecione</h4>
            <p>Compare opções para sua obra</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepNumber}>4</span>
            <h4>Verifique</h4>
            <p>Critérios técnicos e dimensionamento</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepNumber}>5</span>
            <h4>Encontre</h4>
            <p>Fornecedores e locais de compra</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  hero: {
    textAlign: 'center',
    padding: '3rem 1rem',
    backgroundColor: '#e6f0fa',
    borderRadius: '12px',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '3rem',
    margin: '0',
    color: '#0a2e4a',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#2c3e50',
    margin: '1rem 0 2rem',
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: '#0a2e4a',
    color: 'white',
    padding: '0.8rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  secondaryBtn: {
    backgroundColor: 'white',
    color: '#0a2e4a',
    padding: '0.8rem 2rem',
    borderRadius: '8px',
    border: '2px solid #0a2e4a',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  features: {
    marginBottom: '3rem',
  },
  featuresTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#0a2e4a',
    marginBottom: '2rem',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s',
  },
  cardIcon: {
    fontSize: '2.5rem',
  },
  cardLink: {
    display: 'inline-block',
    marginTop: '0.5rem',
    color: '#0a2e4a',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  flow: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    textAlign: 'center',
  },
  flowSteps: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '1.5rem',
  },
  step: {
    flex: '1 1 120px',
    maxWidth: '150px',
  },
  stepNumber: {
    display: 'inline-block',
    backgroundColor: '#0a2e4a',
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    lineHeight: '40px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
};
