import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="nb">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          />

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
          <meta property="og:site_name" content="dfweb" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
        {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "author": {
              "@type": "Person",
              "name": "Daniel",
              "url": "https://www.dfweb.no"
            },
      
            "headline": "Dfweb",
            "image": [ "https://www.dfweb.no/logo.png"  ],
            "datePublished": "",
            "dateModified": ""
        }
          `
            }}
          />
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
