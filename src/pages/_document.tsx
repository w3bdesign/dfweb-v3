import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  static render = (): JSX.Element => {
    return (
      <Html lang="nb">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo.png" />

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
          <meta property="og:site_name" content="dfweb.no" />
        </Head>
        <body className="font-body bg-graybg">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
}

export default MyDocument;
