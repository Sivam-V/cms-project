// Blog.jsx
import React, { useState, useEffect } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  // Save to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (editId) {
      // Update existing post
      const updatedPosts = posts.map((post) =>
        post.id === editId ? { ...post, title, content } : post
      );
      setPosts(updatedPosts);
      setEditId(null);
    } else {
      // Create new post
      const newPost = { id: Date.now(), title, content };
      setPosts([newPost, ...posts]);
    }

    setTitle("");
    setContent("");
  };

  const handleEdit = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    setContent(post.content);
  };

  const handleDelete = (id) => {
    const filtered = posts.filter((post) => post.id !== id);
    setPosts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Blog Management System</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-3 p-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Write your content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            className="w-full mb-3 p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className={`${
              editId ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"
            } text-white px-4 py-2 rounded-md`}
          >
            {editId ? "Update Post" : "Add Post"}
          </button>
        </form>

        {/* Posts */}
        <div className="space-y-4">
          {posts.length === 0 ? (
            <p className="text-gray-600">No blog posts yet.</p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-200 rounded-md p-4 shadow-sm bg-gray-50"
              >
                <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
                <p className="text-gray-700 mt-2">{post.content}</p>

                <div className="flex space-x-2 mt-3">
                  <button
                    onClick={() => handleEdit(post)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
