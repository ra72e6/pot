import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">𝙃𝙊𝙈𝙀</Link>
        <Link href="/profile">𝙥𝙧𝙤𝙛𝙞𝙡𝙚</Link>
        <Link href="/about">𝙥𝙧𝙤𝙟𝙚𝙘𝙩</Link>
        <Link href="/team">𝙩𝙚𝙖𝙢</Link>
      </div>
    </div>
  );
}
