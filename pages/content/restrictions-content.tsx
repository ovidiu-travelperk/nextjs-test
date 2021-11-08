import Layout from "components/layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { usePreserveEmbeddedQuery } from "utils/utils";
import utilStyles from "../../styles/utils.module.css";

const FirstPost = () => {
  const { preserve } = usePreserveEmbeddedQuery();
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>The first post</title>
        </Head>
        <h3 className={utilStyles.card}>Restrictions content here</h3>
        <h2>
          <a href={preserve("/")}>Back to home re-load</a>
        </h2>
        <h2>
          <Link href={preserve("/")}>Back to home SPA</Link>
        </h2>
      </Layout>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background: yellowgreen;
  }
`;

export default FirstPost;
