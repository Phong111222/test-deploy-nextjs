import { useSession } from 'next-auth/client';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
    </div>
  );
}
