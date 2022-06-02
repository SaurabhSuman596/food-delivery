import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import Add from '../compoents/Add';
import AddButton from '../compoents/AddButton';
import Featured from '../compoents/Featured';
import ProductList from '../compoents/ProductLIst';
import styles from '../styles/Home.module.css';

export default function Home({ productList }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Maharaja Palace</title>
        <meta name="description" content="Eat Like Maharaja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <ProductList productList={productList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await axios.get('http://localhost:3000/api/product');
  return {
    props: {
      productList: res.data,
    },
  };
};
