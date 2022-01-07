import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    ctx.res.setHeader("current-path", ctx.asPath);
    ctx.res.setHeader("current-query", JSON.stringify(ctx.query));

    if (!!ctx.res) {
      ctx.res.setHeader("X-Frame-Options", "DENY"); // no embedding (for now)
      ctx.res.setHeader(
        "Strict-Transport-Security",
        "max-age=63072000; includeSubDomains; preload;"
      ); // only allow HTTPS

      ctx.res.setHeader(
        "Content-Security-Policy",
        `frame-ancestors ${ALLOWED_EMBEDDING_DOMAINS.join(" ")}`
      );
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

export const ALLOWED_EMBEDDING_DOMAINS = [
  "*.travelperk.com",
  "*.clicktravel.com",
  "*://localhost:*", // for testing
];
