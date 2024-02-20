import Head from "next/head";
import React from "react";

const HeadMetaData = ({ ogUrl }) => {
  return (
    <Head>
      <title>KomikVerse</title>
      <meta name="description" content="Baca Manga Sub Indonesia" />

      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="KomikVerse" />
      <meta property="og:description" content="Baca Manga Sub Indonesia" />
      <meta
        property="og:image"
        content="https://github.com/FerdyDiatmika/ferdydiatmika.github.io/blob/main/assets/img/KomikVerse.png?raw=true"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="my-komiku.vercel.app" />
      <meta property="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content="KomikVerse" />
      <meta name="twitter:description" content="Baca Manga Sub Indonesia" />
      <meta
        name="twitter:image"
        content="https://github.com/FerdyDiatmika/ferdydiatmika.github.io/blob/main/assets/img/KomikVerse.png?raw=true"
      />
    </Head>
  );
};

export default HeadMetaData;
