import { readFileSync } from 'fs';
import { resolve } from 'path';
export default function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <h3 key={post.id}>{post.name}</h3>
      ))}
    </>
  );
}

export async function getServerSideProps(ctx) {
  const posts = JSON.parse(
    readFileSync(resolve(process.cwd(), 'post.json'), {
      encoding: 'utf-8',
    })
  );
  return {
    props: {
      posts,
    },
  };
}
