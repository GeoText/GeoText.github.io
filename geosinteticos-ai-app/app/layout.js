import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "GeoSintéticos AI",
  description: "Identificação, seleção e assistência técnica em geossintéticos"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
