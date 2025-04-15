import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  const {
    title,
    slug,
    path,
    seoTitle,
    seoDesc,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    content,
    folderPath
  } = await req.json();

  try {
    const client = await clientPromise;
    const db = client.db();

    // Check if the path already exists
    const existingPage = await db.collection('pages').findOne({ path });
    if (existingPage) {
      return new Response('Page already exists at this path', { status: 400 });
    }

    // Insert page content
    const pageData = {
      title,
      slug,
      path,
      folderPath,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const pageResult = await db.collection('pages').insertOne(pageData);
    const pageId = pageResult.insertedId;

    // Insert SEO metadata
    const seoData = {
      pageId,
      seoTitle,
      seoDesc,
      keywords,
      ogTitle,
      ogDescription,
      ogImage,
      twitterTitle,
      twitterDescription,
      twitterImage,
      createdAt: new Date(),
    };

    await db.collection('seo').insertOne(seoData);

    return new Response(JSON.stringify({ message: 'Page and SEO created successfully', pageId }), { status: 201 });

  } catch (err) {
    console.error('Error creating page and SEO:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
