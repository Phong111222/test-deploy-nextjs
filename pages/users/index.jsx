import { readFileSync } from 'fs';
import { resolve } from 'path';
export default function Users({ users }) {
  return (
    <>
      {users.map((user) => (
        <h3 key={user.id}>
          {user.name} - {user.age}
        </h3>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const data = JSON.parse(
    readFileSync(
      resolve(process.cwd(), '../', 'research-nextjs', 'test.json'),
      {
        encoding: 'utf-8',
      }
    )
  );
  return {
    props: {
      users: data,
    },
    revalidate: 5,
  };
}
