import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback } from "react";
import Link from "next/link";


// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// };

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <>
      <Head>
        <title>Index page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <Link href="/about" onClick={handleClick}>
        [ event Test button ]
      </Link>

      <Main page="About" onClick={() => alert("clicked on index page")}>
        {<code className={styles.code}>pages/index.js</code>}
      </Main>
    </>
  );
}
