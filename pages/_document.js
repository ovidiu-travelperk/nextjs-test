import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    ctx.res.setHeader("current-path", ctx.asPath);
    ctx.res.setHeader("current-query", JSON.stringify(ctx.query));

    if (!!ctx.res) {
      const value =
        (await fetch(
          "https://random-data-api.com/api/internet_stuff/random_internet_stuff"
        ).then((r) => r.json())) || {};
      const strValue = JSON.stringify(value);

      ctx.res.setHeader("api-value", strValue);
      ctx.res.setHeader(
        "Content-Security-Policy",
        `frame-ancestors ${value.url}`
      );
      ctx.res.setHeader("X-Frame-Options", `ALLOW_FROM ${value.url}`);
    }
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
