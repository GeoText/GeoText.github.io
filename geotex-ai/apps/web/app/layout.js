import Link from 'next/link';
import './globals.css'; // se você tiver um CSS global, senão pode remover

export const metadata = {
  title: 'GeoTex AI',
  description: 'Identificação, seleção e dimensionamento de geossintéticos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={styles.header}>
          <div style={styles.logo}>
            <Link href="/">
              <span style={styles.logoText}>🌍 GeoTex AI</span>
            </Link>
          </div>
          <nav style={styles.nav}>
            <Link href="/identificar" style={styles.navLink}>Identificar</Link>
            <Link href="/biblioteca" style={styles.navLink}>Biblioteca</Link>
            <Link href="/calculadora" style={styles.navLink}>Calculadora</Link>
            <Link href="/fornecedores" style={styles.navLink}>Fornecedores</Link>
            <Link href="/assistente" style={styles.navLink}>Assistente</Link>
          </nav>
        </header>
        <main style={styles.main}>
          {children}
        </main>
        <footer style={styles.footer}>
          <p>© 2026 GeoTex AI - Plataforma para geossintéticos</p>
        </footer>
      </body>
    </html>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#0a2e4a',
    color: 'white',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoText: {
    color: 'white',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '0.5rem 0',
    borderBottom: '2px solid transparent',
    transition: 'border-color 0.2s',
  },
  main: {
    minHeight: '80vh',
    padding: '2rem',
    backgroundColor: '#f5f7fa',
  },
  footer: {
    backgroundColor: '#0a2e4a',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
  },
};
