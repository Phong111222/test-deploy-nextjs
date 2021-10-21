import { signIn, getSession, useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);
  // const [session, loading] = useSession();
  // useEffect(() => {
  //   if (!session) {
  //     signIn();
  //   }
  // }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
