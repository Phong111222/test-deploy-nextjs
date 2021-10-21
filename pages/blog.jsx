import { getSession } from 'next-auth/client';

export default function Blog({ data }) {
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? 'list of 100 personalize posts' : 'free posts',
    },
  };
}
