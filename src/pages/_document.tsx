import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Adicione o código do Google Tag Manager aqui */}
          <Script
            id="google-tag-manager"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-91WSCLK35Z"
            strategy="beforeInteractive"
          />
          <Script id="google-tag-manager-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-91WSCLK35Z');
            `}
          </Script>
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Lato&family=Nunito+Sans:opsz@6..12&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Lato&family=Nunito+Sans:opsz@6..12&family=Roboto&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
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