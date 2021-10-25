import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import utilStyles from "../styles/utils.module.css";

const name = "Next.js app test";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: React.PropsWithChildren<{ home?: any }>) {
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
      <Header>
        {home ? (
          <>
            <Image
              priority
              src="/images/fine.jpg"
              className={utilStyles.borderCircle}
              height={142}
              width={300}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/fine.jpg"
                  className={utilStyles.borderCircle}
                  height={142}
                  // layout="responsive"
                  width={300}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </Header>
      <ul>
        <li>Using StyledComponents</li>
        <li>Using Suitcase</li>
        <li>Call API server side</li>
        <li>Custom response headers from API call</li>
      </ul>
      <main>{children}</main>
    </Container>
  );
}
const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
