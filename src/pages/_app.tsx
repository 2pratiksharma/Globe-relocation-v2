import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik, Inter } from "next/font/google";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

const cubicBezier: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
     <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-49Z0107L58"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-49Z0107L58');
              gtag('config', 'AW-17997099192');
            `,
          }}
        />
          <script
    dangerouslySetInnerHTML={{
      __html: `
        function gtagSendEvent(url) {
          var callback = function () {
            if (typeof url === 'string') {
              window.location = url;
            }
          };
          gtag('event', 'ads_conversion_Contact_Us_1', {
            'event_callback': callback,
            'event_timeout': 2000,
          });
          return false;
        }
      `,
    }}
  />
      
      </Head>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.7, ease: cubicBezier }}>
        <div className={`${rubik.variable} ${inter.variable}`}>
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </div>
      </MotionConfig>
    </>
  );
}
