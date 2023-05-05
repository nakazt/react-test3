import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main page="About" onClick={() => alert("clicked on index page")}>
        {<code className={styles.code}>pages/index.js</code>}
      </Main>
    </>
  );
}
