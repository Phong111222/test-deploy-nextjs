import styles from '../styles/Home.module.css';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Hello world 1</title>
      </Head>
      <div className={styles.container}>
        <h1>Homepage</h1>
      </div>
    </>
  );
}
