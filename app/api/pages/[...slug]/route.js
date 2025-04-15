import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const {slug} = await params;
  const fullPath = '/' + slug.join('/');

  const client = await clientPromise;
  const db = client.db();

  const page = await db.collection('pages').findOne({ path: fullPath });
  if (!page) {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  }

  const seo = await db.collection('seo').findOne({ pageId: page._id });

  return NextResponse.json({
    page,
    seo,
  });
}
