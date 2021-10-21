import { randomInt } from 'crypto';
import { readFileSync } from 'fs';
import { useRouter } from 'next/dist/client/router';
import { resolve } from 'path';
export default function Home({ person }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loaing...</div>;
  }
  return (
    <div>
      {person.name} - {person.age}
    </div>
  );
}

export async function getStaticPaths() {
  const data = JSON.parse(
    readFileSync(
      resolve(process.cwd(), '../', 'research-nextjs', 'test.json'),
      {
        encoding: 'utf-8',
      }
    )
  );

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = JSON.parse(
    readFileSync(
      resolve(process.cwd(), '../', 'research-nextjs', 'test.json'),
      {
        encoding: 'utf-8',
      }
    )
  );
  let person;
  person = data.find((item) => item.id.toString() === params.id);
  if (!person) {
    person = {
      id: params.id,
      name: `user - ${params.id}`,
      age: 22,
    };
  }
  return {
    props: {
      person,
    },
    revalidate: 5,
  };
}
