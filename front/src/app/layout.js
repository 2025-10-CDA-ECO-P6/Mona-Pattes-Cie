import "./globals.css";
import MenuMobile from "./components/Menu";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { Poppins, Inter } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-text",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Carnet de Santé",
  description: "Gestion des animaux",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <MenuMobile />
      </body>
    </html>
  );
}
