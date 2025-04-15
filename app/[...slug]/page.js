import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';

export default async function Page({ params }) {
  const { slug } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pages/${slug.join('/')}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    notFound();
  }

  const { page } = await res.json();

  const breadcrumbItems = slug.map((segment, index) => {
    const path = '/' + slug.slice(0, index + 1).join('/');
    const name = decodeURIComponent(segment).replace(/-/g, ' ');
    return { name, path };
  });

  return (
    <>
      {/* Visible Breadcrumb Navigation */}
      <nav className="text-sm breadcrumbs px-4 mt-4 max-w-7xl mx-auto">
        <ol className="flex flex-wrap gap-1 text-gray-600">
          <li>
            <Link href="/" className="hover:underline text-red-600">Home</Link>
            <span className="mx-1">/</span>
          </li>
          {breadcrumbItems.map((item, index) => (
            <li key={index}>
              {index !== breadcrumbItems.length - 1 ? (
                <>
                  <Link href={item.path} className="hover:underline text-red-600 capitalize">{item.name}</Link>
                  <span className="mx-1">/</span>
                </>
              ) : (
                <span className="capitalize font-semibold text-black">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Page Content */}
      <div className='max-w-7xl mx-auto flex flex-col sm:flex sm:flex-row py-4 gap-6'>
        <section className="prose lg:prose-xl text-gray-800 w-full sm:w-3/4">
          <h1 className='text-3xl font-bold mb-3'>{page.title}</h1>
          <div
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </section>
        <aside className="bg-gray-100 p-4 h-fit w-full sm:w-1/4">
          <h2 className="font-bold mb-2">CMAT Resources</h2>
          <ul>
            <li>Application</li>
            <li>Admit Card</li>
          </ul>
        </aside>
      </div>

      {/* JSON-LD Schemas */}
      <Script type="application/ld+json" id="article-schema" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": page.title,
          "description": page.excerpt || page.metaDescription || "",
          "author": {
            "@type": "Organization",
            "name": "MBAROI"
          },
          "publisher": {
            "@type": "Organization",
            "name": "MBAROI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mbaroi.in/logo.png"
            }
          },
          "datePublished": page.createdAt || new Date().toISOString(),
          "dateModified": page.updatedAt || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://mbaroi.in/${slug.join('/')}`
          }
        })}
      </Script>

      <Script type="application/ld+json" id="breadcrumb-schema" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": slug.map((segment, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": decodeURIComponent(segment),
            "item": `https://mbaroi.in/${slug.slice(0, index + 1).join('/')}`
          }))
        })}
      </Script>
    </>
  );
}


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pages/${slug.join('/')}`, {
    next: { revalidate: 60 },
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
