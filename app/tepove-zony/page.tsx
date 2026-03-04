// app/tepove-zony/page.tsx
import { Metadata } from "next";
import TepoveZonyClient from "./Tepove_zony";

export const metadata: Metadata = {
  title: "Runiq | Cesta k lepšímu běhu",
  description: "Nevíte si rady s tepovými zónami? Pomůžeme vám zjistit cílové tepy pro lepší výkon a rozvoj kondice.",
  icons: {
    icon: "icon.svg"
  }
};

export default function Page() {
  return <TepoveZonyClient />;
}