import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/layout";
import hamzaImage from "/public/images/hamza-green.jpeg";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      <div style={{ width: "400px" }}>
        <Image
          src={hamzaImage} // Route of the image file
          alt="Your Name"
        />
      </div>
    </Layout>
  );
}
