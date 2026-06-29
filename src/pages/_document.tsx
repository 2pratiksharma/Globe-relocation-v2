import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-[var(--background)]">
      <Head>
        {/* Preconnect hints for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0A58CA" />

        {/* Global crawl directives — allow rich image/snippet previews.
            Per-page <title>, description, canonical and Open Graph tags are
            set on each page (see components/Seo.tsx) so they are never
            overridden by site-wide defaults here. */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:site_name" content="Globe Relocation Packers and Movers Banglore Banglore" />
        <meta property="og:locale" content="en_IN" />
        <meta name="google-site-verification" content="YZRfKsEpwbgTA6Kcylel1DiKD1yZrEcqlLkKOaLm5hY" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              "@id": "https://globerelo.in/#organization",
              name: "Globe Relocation Packers and Movers Banglore Banglore",
              description:
                "Globe Relocation Packers and Movers Banglore Banglore provides domestic and international packers and movers solutions spanning Bangalore, Hyderabad, Delhi NCR, and pan-India to worldwide destinations.",
              url: "https://globerelo.in",
              logo: "https://ik.imagekit.io/khibl45oa/Logo.png",
              image: "https://ik.imagekit.io/khibl45oa/home_hero.png?tr=w-1200,h-630,fo-auto",
              telephone: "+91 79888 59067",
              areaServed: [
                "Bangalore",
                "Hyderabad",
                "Delhi NCR",
                "Mumbai",
                "India",
                "Global"
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=61591215602710",
                "https://www.instagram.com/globerelocationpackersandmover/"
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "55, 1st Cross Rd, Prasanth Layout, Prasanth Extension, Whitefield",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560066",
                addressCountry: "IN"
              },
              openingHours: "Mo-Fr 08:00-18:00",
              priceRange: "₹₹"
              // Note: aggregateRating + reviews are declared on the homepage
              // (components index) where the rating is visible to users, and
              // share this same @id so Google merges them into one entity.
            })
          }}
        />
      </Head>
      <body className="antialiased bg-[var(--background)] text-[var(--secondary)]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
