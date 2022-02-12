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
    /*let csp = `default-src 'self'; script-src 'self' ${cspHashOf(
      NextScript.getInlineScriptSource(this.props)
    )}
    form-action 'self'; report-uri 'dfweb.no'; img-src 'self' data:; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com data:;    
    `;*/

    let csp = `style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com data:; default-src 'self'; script-src 'unsafe-eval' 'self' ${cspHashOf(
        NextScript.getInlineScriptSource(this.props)
      )} form-action 'self'`;




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
