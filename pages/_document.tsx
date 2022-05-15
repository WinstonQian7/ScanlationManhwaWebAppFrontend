import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
          <link 
            rel="preload"
            as="font"
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Roboto+Slab:wght@500;800&display=swap" 
          />
          <link 
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Roboto+Slab:wght@500;800&display=swap" 
            media="print" 
            //@ts-ignore
            onLoad="this.media='all'" 
          />
          <noscript>
            <link 
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Roboto+Slab:wght@500;800&display=swap" 
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument