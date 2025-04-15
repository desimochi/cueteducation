import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  // Directly access 'slug' from params (no need to await)
  const { slug } = params;
  const fullPath = '/' + slug.join('/');

  const client = await clientPromise;
  const db = client.db();

  // Fetch the page data from the 'pages' collection
  const page = await db.collection('pages').findOne({ path: fullPath });
  if (!page) {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  }

  // Fetch the SEO data from the 'seo' collection
  const seo = await db.collection('seo').findOne({ pageId: page._id });

  // Return page and SEO data
  return NextResponse.json({
    page,
    seo,
  });
}
