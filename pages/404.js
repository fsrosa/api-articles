import Head from "next/head";
import Error from "../components/elements/Error";
import Section from "../components/containers/Section";
export default function NotFound() {
  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section title="Error 404.">
        <Error text="No se pudo encontrar esta página" notfound={true} />
      </Section>
    </>
  );
}