import Head from "next/head";

/* ----------------------------------------------------------------
   Reusable SEO head for every page.
   Emits a keyword-friendly <title>, meta description, self-referencing
   canonical, Open Graph + Twitter cards, and optional JSON-LD.
   Site-wide defaults (robots, og:site_name, verification, Organization
   schema) live in _document.tsx and are NOT repeated here, so nothing
   is duplicated or overridden.
----------------------------------------------------------------- */

export const SITE_URL = "https://globerelo.in";
export const SITE_NAME = "Globe Relocation Packers and Movers Banglore Banglore";
const DEFAULT_OG_IMAGE = "https://ik.imagekit.io/khibl45oa/home_hero.png?tr=w-1200,h-630,fo-auto";

type JsonLd = Record<string, unknown>;

interface SeoProps {
  /** Full document title, e.g. "Packers and Movers in Bangalore | Globe Relocation" */
  title: string;
  description: string;
  /** Path only, e.g. "/about" or "/" — used for canonical + og:url */
  path: string;
  keywords?: string;
  /** Absolute URL or site-relative path; defaults to the branded hero image */
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  /** One schema object or an array of them, rendered as <script type="application/ld+json"> */
  jsonLd?: JsonLd | JsonLd[];
}

export default function Seo({
  title,
  description,
  path,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex,
  jsonLd,
}: SeoProps) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const image = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </Head>
  );
}
