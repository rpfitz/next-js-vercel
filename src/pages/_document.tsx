import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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