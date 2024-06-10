import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const imgElement = document.getElementById('clickableImage');
    if (imgElement) {
      imgElement.addEventListener('click', handleClick);
    }
    // Cleanup the event listener on component unmount
    return () => {
      if (imgElement) {
        imgElement.removeEventListener('click', handleClick);
      }
    };
  }, []);

  const handleClick = () => {
    alert('이미지를 클릭하였습니다');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>홈</title>
      </Head>

      <h1 className={styles.homeTitle}>안녕하세요.</h1>
      <Image
        id="clickableImage"
        src="/images/hellokitty.gif"
        width={500}
        height={500}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}
