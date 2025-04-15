import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const {slug} = await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pages/${slug.join('/')}`, {
    next: { revalidate: 60 }, // Enables ISR
  });

  if (!res.ok) {
    notFound();
  }

  const { page } = await res.json();

  return (
    <div>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
}
export async function generateMetadata({ params }) {
  const {slug} =  await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pages/${slug.join('/')}`, {
    next: { revalidate: 60 }, // ISR
  });

  if (!res.ok) {
    return {
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for does not exist.',
    };
  }

  const { page, seo } = await res.json();

  return {
    title: seo?.seoTitle || page.title,
    description: seo?.seoDesc || seo?.seoTitle || '',
    openGraph: {
      title: seo?.ogTitle || page.title,
      description: seo?.ogDescription || seo?.seoDesc || '',
      url: '/' + slug.join('/'),
      images: seo?.ogImage ? [seo.ogImage] : [],
      type: 'website',
    },
    twitter: {
      title: seo?.twitterTitle || seo?.ogTitle || page.title,
      description: seo?.twitterDescription || seo?.ogDescription || seo?.seoDesc || '',
      images: seo?.twitterImage ? [seo.twitterImage] : [],
      card: 'summary_large_image',
    },
    keywords: seo?.keywords || '',
  };
}
