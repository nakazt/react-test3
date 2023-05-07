import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// };

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <h1>{count}</h1>
      <button onClick={handleClick}>[ state Test button ]</button>

      <Main onClick={() => alert("clicked on index page")}>
        {<code className={styles.code}>pages/index.js</code>}
      </Main>
    </>
  );
}
