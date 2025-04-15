'use client';

import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Editor = dynamic(() => import('@tinymce/tinymce-react').then(mod => mod.Editor), { ssr: false });

export default function PageCreation() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [folderPath, setFolderPath] = useState('');
  const [content, setContent] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDesc, setSeoDesc] = useState('');
  const [keywords, setKeywords] = useState('');
  const [ogTitle, setOgTitle] = useState('');
  const [ogDescription, setOgDescription] = useState('');
  const [ogImage, setOgImage] = useState('');
  const [twitterTitle, setTwitterTitle] = useState('');
  const [twitterDescription, setTwitterDescription] = useState('');
  const [twitterImage, setTwitterImage] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const editorRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !slug || !content) {
      setError('Title, slug, and content are required.');
      return;
    }

    setLoading(true);

    try {
        const cleanPath = `/${[folderPath, slug].filter(Boolean).join('/')}`;

        const response = await axios.post('/api/pages', {
          title,
          slug,
          path: cleanPath,
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
          folderPath,
        });
        

      if (response.status === 201) {
        router.push(`/${folderPath}/${slug}/`);
      }
    } catch (err) {
      setError('Error creating page.');
    } finally { 
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 container mx-auto gap-4">
      {/* Editor Area */}
      <div className="flex-1 p-6x">
        <h3 className="text-xl font-bold mb-6">Create New Page</h3>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Page Title"
          />
        </div>

        <Editor
          apiKey="u2syd05rkifd1rygt8p0d5um673ju3vt3yh5798ip0jfmg1h"
          value={content}
          init={{
            height: 500,
            menubar: true,
            plugins: ['link', 'image', 'lists', 'searchreplace', 'wordcount'],
            toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist | link image',
          }}
          onEditorChange={(newContent) => setContent(newContent)}
        />
      </div>

      {/* Sidebar */}
      <div className=" w-80 h-screen bg-white border-l border-gray-200 shadow-md overflow-y-auto transition-transform duration-300 z-50"
        style={{ transform: sidebarOpen ? 'translateX(0)' : 'translateX(100%)' }}>
        <div className="p-4 border-b flex items-center justify-between">
          <h4 className="text font-bold">Page Settings</h4>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-blue-500 text-sm">
            {sidebarOpen ? 'Hide' : 'Show'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="text-sm font-semibold">Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="page-slug"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Folder Path</label>
            <input
              type="text"
              value={folderPath}
              onChange={(e) => setFolderPath(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="folder-name"
            />
          </div>

          <hr className="my-2" />

          <div>
            <label className="text-sm font-semibold">SEO Title</label>
            <input
              type="text"
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">SEO Description</label>
            <textarea
              rows="2"
              value={seoDesc}
              onChange={(e) => setSeoDesc(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Keywords</label>
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="comma,separated,keywords"
            />
          </div>

          <hr className="my-2" />

          <div>
            <label className="text-sm font-semibold">OG Title</label>
            <input
              type="text"
              value={ogTitle}
              onChange={(e) => setOgTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">OG Description</label>
            <textarea
              rows="2"
              value={ogDescription}
              onChange={(e) => setOgDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">OG Image URL</label>
            <input
              type="text"
              value={ogImage}
              onChange={(e) => setOgImage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <hr className="my-2" />

          <div>
            <label className="text-sm font-semibold">Twitter Title</label>
            <input
              type="text"
              value={twitterTitle}
              onChange={(e) => setTwitterTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Twitter Description</label>
            <textarea
              rows="2"
              value={twitterDescription}
              onChange={(e) => setTwitterDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Twitter Image URL</label>
            <input
              type="text"
              value={twitterImage}
              onChange={(e) => setTwitterImage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Publish Page'}
          </button>
        </form>
      </div>
    </div>
  );
}
