import React, { Component } from "react";
import Head from "next/head";

export default function HeadTag({ title }) {
    return (
        <Head>
            <title>{title} : Always</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content="https://always.kr" />
            <meta property="og:description" content="항상 이용자들을 위해 고민하는 개발팀, Always" />
            <meta property="og:site_name" value="Powered By Next.js" />
            <meta
                property="og:image"
                content="https://i.ibb.co/SrMqBKQ/logo.png"
            />
        </Head>
    );
}
