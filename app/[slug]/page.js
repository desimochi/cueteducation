// app/blog/[slug]/page.js
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';

export async function generateMetadata({ params }) {
    const { slug } = params;
  
    const { data } = await client.query({
      query: gql`
        query GetPostBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            title
            excerpt
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      `,
      variables: { slug }
    });
  
    const post = data?.post;
    if (!post) return {};
  
    const siteUrl = 'https://cuet.education'; // change if needed
    const postUrl = `${siteUrl}/${post.slug}`;
  
    return {
      title: post.title,
      description: post.excerpt?.replace(/<[^>]+>/g, '') ?? '',
      alternates: {
        canonical: postUrl,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt?.replace(/<[^>]+>/g, '') ?? '',
        url: postUrl,
        type: 'article',
        images: [
          {
            url: post.featuredImage?.node.sourceUrl ?? `${siteUrl}/default-og.jpg`,
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt?.replace(/<[^>]+>/g, '') ?? '',
        images: [post.featuredImage?.node.sourceUrl ?? `${siteUrl}/default-og.jpg`],
      }
    };
  }

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  const { data } = await client.query({
    query: gql`
      query GetPostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          title
          content
          date
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    `,
    variables: { slug }
  });

  const post = data?.post;

  if (!post) return <div>Post not found</div>;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1
        className="text-3xl font-bold mb-2"
        dangerouslySetInnerHTML={{ __html: post.title }}
      />

      <div className="text-sm text-gray-500 mb-4">
        {new Date(post.date).toLocaleDateString()}
      </div>

      {post.categories.nodes.length > 0 && (
        <div className="text-sm text-gray-600 mb-4">
          Categories:{" "}
          {post.categories.nodes.map((cat, i) => (
            <span key={cat.slug}>
              {i > 0 && ', '}
              {cat.name}
            </span>
          ))}
        </div>
      )}

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
