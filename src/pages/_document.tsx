import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

import crypto from "crypto";

const cspHashOf = (text: crypto.BinaryLike) => {
  const hash = crypto.createHash("sha256");
  hash.update(text);
  return `'sha256-${hash.digest("base64")}'`;
};
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    const nonce = crypto.randomBytes(8).toString("base64");

    let csp = `frame-ancestors 'self';block-all-mixed-content;default-src 'self';script-src 'self' 'report-sample';style-src 'self' 'sha256-8BNxsIsc6VHj8/elC63fqbrGsnTOvhNTf17uhaIdUI4=' 'sha256-GHgVb5EEAUPhVeTfwEFuX9+WADcCrePlK6CwdXznIhY=' 'sha256-ILMAexb0qRHPwqfjRBkaZgAabpCISF9LKjwUh6KOMLM=' 'sha256-UNp5fHQ1qqiIpd3mqgTPnoC4xBbIZnf8gh46xIgOBYQ=' 'sha256-d72pVhmRTNXT2Gr2OHFRLnVaHBfiBI5EvDCF6tA924Y=' 'sha256-tTgjrFAQDNcRW/9ebtwfDewCTgZMFnKpGa9tcHFyvcs=' 'sha256-udqn+IRm1CC9ivfJc0LiM4qvHxmmdHbm6N+wfEZh1Co=' 'sha256-xd6kVmsB5qDY47QB4x7Ys+1t88OSTa40q/98d9NyF8Q=' 'sha256-xyFOCDyimAlruQKlArTEu0ybsNKQvSaZzhXX0NATyhE=' 'report-sample' 'unsafe-inline' fonts.googleapis.com;object-src 'none';frame-src 'self';child-src 'self';img-src 'self' data: fonts.gstatic.com;font-src 'self' fonts.googleapis.com fonts.gstatic.com;connect-src 'self' fonts.googleapis.com fonts.gstatic.com;manifest-src 'self';base-uri 'self';form-action 'self';media-src 'self';prefetch-src 'self';worker-src 'self';`;

    if (process.env.NODE_ENV !== "production") {
      csp = `style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com data:; default-src 'self'; script-src 'unsafe-eval' 'self' ${cspHashOf(
        NextScript.getInlineScriptSource(this.props)
      )} `;
    }
    return (
      <Html lang="nb">
        <Head nonce={nonce}>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo.png" />

          <meta httpEquiv="Content-Security-Policy" content={csp} />

          <meta property="og:title" content="Daniel Fjeldstad" />
          <meta name="author" content="Daniel Fjeldstad" />
          <meta property="og:locale" content="nb_NO" />
          <meta
            name="description"
            content="Daniel Fjeldstad | Frontend Web Utvikler | Portefølje"
          />
          <meta
            property="og:description"
            content="Daniel Fjeldstad | Frontend Web Utvikler | Portefølje"
          />

          <meta property="og:url" content="https://www.dfweb.no/" />
          <meta property="og:site_name" content="dfweb" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
