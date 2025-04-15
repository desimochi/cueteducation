// lib/db.js
import clientPromise from './mongodb';

const getDb = async () => {
  const client = await clientPromise;
  const db = client.db();
  return db;
};

const savePage = async (pageData) => {
  const db = await getDb();
  const collection = db.collection('pages');
  const result = await collection.insertOne(pageData);
  return result;
};

const getPages = async () => {
  const db = await getDb();
  const collection = db.collection('pages');
  const pages = await collection.find().toArray();
  return pages;
};

export { savePage, getPages };
