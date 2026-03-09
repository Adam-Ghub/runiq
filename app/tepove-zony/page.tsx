// app/tepove-zony/page.tsx
import { Metadata } from "next";
import TepoveZonyClient from "./Tepove_zony";

export const metadata: Metadata = {
  title: 'Kalkulačka tepových zón | Runiq',
  description: 'Vypočítejte si tepové zóny pro běh zdarma. Zjistěte ideální intenzitu tréninku pro spalování tuků, vytrvalost i výkon.',
  keywords: [
    'kalkulačka tepových zón', 'výpočet tepových zón', 'tepové zóny běh',
    'tepová frekvence zóny', 'Karvonen metoda', 'maximální tepová frekvence výpočet',
    'spalování tuků tepová zóna', 'aerobní zóna', 'anaerobní práh',
    'klidový tep', 'jak zjistit tepové zóny', 'tepové zóny kalkulačka online zdarma',
    'jaké tepové zóny pro spalování tuků', 'intenzita tréninku'
  ],
  alternates: {
    canonical: 'https://runiq.me/tepove-zony',
  },
  openGraph: {
    title: 'Kalkulačka tepových zón | Runiq',
    description: 'Vypočítejte si tepové zóny pro běh online zdarma. Zjistěte ideální intenzitu pro vaše tréninky.',
    url: 'https://runiq.me/tepove-zony',
    type: 'website',
  },
};

export default function Page() {
  return <TepoveZonyClient />;
}