import Link from "next/link.js";
import Head from "next/head.js";


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <Link href="/volumes">
        <h2>Enter the Lord Of the Rings Website</h2>
      </Link>

    </>
  );
}
