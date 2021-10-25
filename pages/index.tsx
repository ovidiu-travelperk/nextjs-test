import { Button, Card, FormattedText, Spacer } from "@travelperksl/suitcase";
import Layout from "components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout home>
        <h3 className="title">
          Navigate with
          <a href="/posts/first-post"> reload!</a>
        </h3>
        <h1 className="title">
          Navigate with <Link href="/posts/first-post">SPA!</Link>
        </h1>

        <Card accentColor="blue">
          <Spacer top={2} left={2} bottom={2} right={2}>
            A suitcase Card
            <FormattedText size="displayXL" color="brand">
              test formatting using Suitcase FormattedText
            </FormattedText>
            <Button styleType="primary">Suitcase button</Button>
          </Spacer>
        </Card>
      </Layout>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
