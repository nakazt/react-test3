import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
