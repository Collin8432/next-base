import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="p-0 m-0 overflow-x-hidden scroll-smooth">
      <Head>
        <meta name="description" content="=" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <title>Midnight</title>
      <body className="add bg,text,font here">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
