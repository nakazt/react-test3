import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <Main onClick={() => alert("clicked on about page")}>
        {<code className={styles.code}>pages/about.js</code>}
      </Main>
    </>
  );
}
