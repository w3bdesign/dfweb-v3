import { Lato } from "next/font/google";

import { AnimatePresence } from "framer-motion";

// Types
import type { AppProps } from "next/app";

// Styles
import "../styles/globals.css";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"]
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={lato.className}>
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
