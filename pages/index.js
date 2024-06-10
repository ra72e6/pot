import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> 홈</title>
      </Head>

      <h1 className={styles.homeTitle}>안녕하세요.</h1>
      <Image src="/images/hellokitty.gif" width={500} height={500}></Image>
    </div>
  );
}
