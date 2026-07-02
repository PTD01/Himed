import { Html, Head, Main, NextScript } from "next/document";
import { withBasePath } from "../lib/basePath";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={withBasePath("/favicon.ico")} />
        <meta name="theme-color" content="#0F3D73" />
      </Head>
      <body className="bg-white text-primary-900 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
