import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <div>Lorem, ipsum dolor sit</div>
      </Layout>
    </>
  );
}

export default FirstPost;
