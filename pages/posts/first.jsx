import Link from "next/link";
import React from "react";
import Script from "next/script";
import Head from "next/head";

function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cum
        optio molestias sunt laborum, nihil labore, iste enim repellendus libero
        sit sequi eligendi vitae unde. Molestias porro sunt repudiandae et, quis
        veniam quisquam non magni, expedita cum vero distinctio unde autem fuga
        reiciendis! Quam corrupti, accusantium vero eveniet dolorum nisi?
      </div>

      <Link href="/"> Back to home</Link>
    </>
  );
}

export default FirstPost;
