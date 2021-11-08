import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import utilStyles from "../styles/utils.module.css";

const name = "Whitelabel PoC";
export const siteTitle = "Whitelabel PoC";

export default function Layout({
  children,
  home,
}: React.PropsWithChildren<{ home?: any }>) {
  const { query } = useRouter();

  const { embedded } = query;
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {!embedded && (
        <Header>
          <h1>RESTRICTIONS WEBSITE</h1>
          <div>
            <div>
              <a href={"https://10ohh.csb.app/"}>Link to marketing site</a>
            </div>
          </div>
        </Header>
      )}
      <main>{children}</main>
    </Container>
  );
}
const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 0 auto 6rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
