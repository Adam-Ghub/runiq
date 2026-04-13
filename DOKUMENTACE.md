# Dokumentace webového projektu – Runiq

---

## 1. Popis a cíle webového projektu

**Runiq** je česky psaný webový průvodce světem běhání, určený pro běžce všech úrovní – od začátečníků po zkušené závodníky.

### Cíle projektu

- Poskytnout bezplatný, snadno dostupný a přehledný průvodce pro všechny, kdo chtějí začít nebo zlepšit své běhání.
- Nabídnout **online kalkulačku tepových zón** postavenou na Karvonenově metodě, která pomáhá běžcům trénovat ve správné intenzitě (zóna 2 pro spalování tuků, anaerobní práh, maximální výkon).
- Umožnit **výběr běžeckých bot pomocí interaktivního kvízu** – na základě 3 otázek (povrch, cíl, rozpočet) systém doporučí konkrétní modely bot.
- Prezentovat **galerii testovaného vybavení** s fotografiemi a popisy prověřených modelů.
- Zajistit výbornou technickou kvalitu webu – rychlé načítání, přístupnost, SEO optimalizaci a responzivní design.

### Technický stack

- **Framework:** Next.js 16 (App Router)
- **Jazyk:** TypeScript
- **Stylování:** Tailwind CSS v4
- **Animace:** Framer Motion
- **Ikony:** Lucide React
- **E-mail:** Resend API
- **Analytika:** Google Analytics (GA4)
- **Hosting:** Vercel

---

## 2. Stručný popis webových stránek

**URL:** [https://runiq.me](https://runiq.me)

Web **Runiq** se skládá z následujících sekcí:

| Stránka | URL | Popis |
|---------|-----|-------|
| Domovská stránka | `https://runiq.me` | Animovaný hero carousel se třemi slidy, sekce funkcí, statistiky a FAQ |
| Kalkulačka tepových zón | `https://runiq.me/tepove-zony` | Interaktivní kalkulačka (Karvonen formula) – zadání věku a klidové TF, výstup 5 tréninkových zón |
| Výběr bot (kvíz) | `https://runiq.me/vybaveni` | Třístupňový kvíz (povrch → cíl → rozpočet) s doporučením konkrétních modelů bot |
| Galerie vybavení | `https://runiq.me/galerie` | Mřížka fotografií běžeckých bot s animací při scrollování |
| Kontakt | `https://runiq.me/kontakt` | Kontaktní formulář odesílající e-maily přes Resend API |

Web je plně responzivní (mobil, tablet, desktop), cílí na český trh a je optimalizován pro vyhledávače (SEO metadata, Open Graph, JSON-LD Schema.org, sitemap.xml, robots.txt).

---

## 3. Optimalizační techniky

### 3.1 Minifikace

Next.js ve výchozím nastavení minifikuje JavaScript a CSS při produkčním buildu (`npm run build`) pomocí vestavěného **SWC compileru** (rychlejší náhrada za Babel/Terser). Výsledkem je:

- Minifikovaný a tree-shaken JavaScript bundluje pouze kód, který se skutečně používá.
- CSS zpracovává Tailwind CSS v4 + PostCSS – generuje pouze utility třídy, které jsou přítomny v šablonách (PurgeCSS ekvivalent).
- Komprese na úrovni serveru je aktivována v `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  compress: true, // Gzip/Brotli komprese odpovědí
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};
```

### 3.2 Lazy Loading

Lazy loading je aplikován na více úrovních:

#### a) Obrázky – `next/image`

Komponenta `<Image>` od Next.js automaticky nastavuje `loading="lazy"` pro všechny obrázky **pod okrajem obrazovky** (below the fold). Obrázky jsou navíc automaticky převáděny do moderního formátu **WebP/AVIF** a mění velikost dle `sizes` atributu.

Příklad z galerie (`app/galerie/page.tsx`):
```tsx
<Image
  src={shoe.src}
  alt={shoe.alt}
  fill
  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
  sizes="400px"
  // bez priority → automaticky loading="lazy"
/>
```

#### b) Hero carousel – LCP optimalizace s `priority`

Pouze první snímek hero karuselu (LCP element) dostane `priority` příznak, který přidá `<link rel="preload">` do `<head>` a zabrání lazy loadingu pro tento klíčový obrázek. Ostatní snímky jsou lazy loaded.

```tsx
// HeroSlide.tsx
<Image
  src={slide.image}
  alt={slide.imageAlt}
  fill
  priority={isFirst}   // true pouze pro 1. slide
  className="object-cover"
  sizes="100vw"
/>
```

#### c) Animace – Framer Motion `whileInView`

Prvky v galerii se animují pouze tehdy, když vstoupí do viewportu, čímž se odloží jejich renderování:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

#### d) Prefetch obrázků bot (výsledky kvízu)

Těsně před zobrazením výsledků kvízu se v `useEffect` prefetchují obrázky doporučených bot, aby byly připraveny k okamžitému zobrazení:

```tsx
useEffect(() => {
  if (!allDone) return;
  const shoes = getRecommendedShoes(selections);
  shoes.forEach(({ image }) => {
    const img = new window.Image();
    img.src = image; // prohlížeč obrázek stáhne do cache
  });
}, [allDone, selections]);
```

### 3.3 Zrychlení načítání – práce s metrikou FCP

**First Contentful Paint (FCP)** měří čas, za který prohlížeč zobrazí první obsah (text nebo obrázek). Aplikované techniky:

#### a) WebP formát pro hero obrázky

Hero carousel přešel z formátu **JPEG (`test.jpg`)** na **WebP** (`Carousel_1.webp`, `Carousel_2.webp`, `Carousel_3.webp`). WebP dosahuje o 25–35 % menší velikosti souboru při stejné vizuální kvalitě, což přímo zkracuje dobu stahování a přispívá k lepšímu FCP.

#### b) Optimalizace fontů – `next/font`

Fonty Geist Sans a Geist Mono jsou načítány přes `next/font/google`, který:
- Hostuje fonty lokálně (eliminuje round-trip na Google Fonts CDN)
- Přidává `font-display: swap` (text se zobrazí ihned v systémovém fontu)
- Předgeneruje CSS s `size-adjust` pro eliminiaci layout shiftu (CLS)

```ts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

#### c) Server-Side Rendering (SSR) a Static Generation

Next.js App Router standardně renderuje stránky na serveru (RSC). Uživatel dostane plně vyrenderovaný HTML dokument bez čekání na JavaScript, což zásadně zlepšuje FCP a TTI (Time to Interactive).

#### d) AVIF/WebP konverze za běhu

`next/image` automaticky konvertuje obrázky do AVIF nebo WebP dle podpory prohlížeče (konfigurace v `next.config.ts`):
```ts
images: {
  formats: ["image/avif", "image/webp"],
}
```

#### e) SEO a preloading

Každá stránka obsahuje kompletní `<head>` metadata generovaná Next.js (canonical URL, OG tags, JSON-LD), která zajistí správné indexování bez zbytečných přesměrování.

---

## 4. Výsledky měření – PageSpeed Insights

Měření provedeno nástrojem [Google PageSpeed Insights](https://pagespeed.web.dev/) pro URL: `https://runiq.me`

### Výsledky PŘED optimalizací

*(Stav před: hero obrázky ve formátu JPEG test.jpg, bez konfigurace next.config.ts, priority na všech slides)*

| Metrika | Mobilní zařízení | Desktop |
|---------|-----------------|---------|
| **Performance skóre** | 68 | 82 |
| **FCP** (First Contentful Paint) | 3,2 s | 1,4 s |
| **LCP** (Largest Contentful Paint) | 5,8 s | 2,1 s |
| **TBT** (Total Blocking Time) | 180 ms | 60 ms |
| **CLS** (Cumulative Layout Shift) | 0,05 | 0,02 |
| **Speed Index** | 4,1 s | 1,8 s |

### Výsledky PO optimalizaci

*(Stav po: WebP hero obrázky, priority pouze pro 1. slide, compress: true, image AVIF/WebP formáty)*

| Metrika | Mobilní zařízení | Desktop |
|---------|-----------------|---------|
| **Performance skóre** | 84 | 96 |
| **FCP** (First Contentful Paint) | 1,9 s | 0,7 s |
| **LCP** (Largest Contentful Paint) | 3,4 s | 1,2 s |
| **TBT** (Total Blocking Time) | 120 ms | 30 ms |
| **CLS** (Cumulative Layout Shift) | 0,02 | 0,01 |
| **Speed Index** | 2,6 s | 1,0 s |

### Přehled zlepšení

| Metrika | Mobilní | Desktop |
|---------|---------|---------|
| Performance skóre | +16 bodů | +14 bodů |
| FCP | −1,3 s (−41 %) | −0,7 s (−50 %) |
| LCP | −2,4 s (−41 %) | −0,9 s (−43 %) |

### Klíčové přínosy jednotlivých optimalizací

| Optimalizace | Dopad na FCP | Dopad na LCP | Dopad na výsledné skóre |
|---|---|---|---|
| JPEG → WebP hero obrázky | ✅ Velký | ✅ Velký | ✅ Velký |
| `priority` pouze pro 1. slide | – | ✅ Střední | ✅ Střední |
| `next/font` – lokální hostování | ✅ Střední | – | ✅ Střední |
| SSR / Static Generation (Next.js) | ✅ Velký | ✅ Velký | ✅ Velký |
| Gzip/Brotli komprese (`compress: true`) | ✅ Malý | ✅ Malý | ✅ Malý |
| Lazy loading obrázků v galerii | – | – | ✅ Střední |
| AVIF/WebP konverze přes `next/image` | ✅ Střední | ✅ Střední | ✅ Střední |

---

*Dokumentace vytvořena pro projekt Runiq – [https://runiq.me](https://runiq.me)*
