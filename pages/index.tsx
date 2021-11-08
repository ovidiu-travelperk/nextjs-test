// import { Button, Card, FormattedText, Spacer } from "@travelperksl/suitcase";
import Layout from "components/layout";
import Head from "next/head";
import Link from "next/link";
import { usePreserveEmbeddedQuery } from "utils/utils";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  const { preserve } = usePreserveEmbeddedQuery();
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout home>
        <h3 className={utilStyles.card}>Restrictions search bar here</h3>
        <h3 className="title">
          Navigate with
          <a href={preserve("/content/restrictions-content")}> reload!</a>
        </h3>
        <h1 className="title">
          Navigate with{" "}
          <Link href={preserve("/content/restrictions-content")}>SPA!</Link>
        </h1>
      </Layout>
    </div>
  );
}
