// app/tepove-zony/page.tsx
import { Metadata } from "next";
import TepoveZonyClient from "./Tepove_zony";

export const metadata: Metadata = {
  title: "Runiq | Cesta k lepšímu běhu",
  description: "Vypočítejte si své tepové zóny pro přesnější a efektivnější tréninky. Zjistěte ideální pásma pro spalování tuků i rozvoj kondice.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function Page() {
  return <TepoveZonyClient />;
}