import Layout from "components/layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { createGlobalStyle } from "styled-components";

const FirstPost = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>The first post</title>
        </Head>
        <h1>test</h1>
        <h2>
          <a href="/">Back to home re-load</a>
        </h2>
        <h2>
          <Link href="/">Back to home SPA</Link>
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
