// app/page.js
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import Link from 'next/link'; // ✅ import Link

export default async function HomePage() {
  const { data } = await client.query({
    query: gql`
      query GetPosts {
        posts {
          nodes {
            id
            title
            excerpt
            slug
          }
        }
      }
    `
  });

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>

      {data.posts.nodes.map(post => (
        <div key={post.id} className="mb-4 border-b pb-2">
          <Link href={`/${post.slug}`}>
            <h2
              className="text-xl font-semibold text-blue-600 hover:underline"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </Link>

          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </div>
      ))}
    </main>
  );
}
