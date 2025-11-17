import React, { useState, useEffect } from "react";
import "./Community.css";
import { useNavigate } from "react-router-dom";

function Community({ currentUser }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newSubtitle, setNewSubtitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [editedImage, setEditedImage] = useState(null);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return navigate("/");

    fetch("https://blogifydev-backend-1.onrender.com/api/posts", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, [token, navigate]);

  const handleCreatePost = async () => {
    if (!newTitle || !newContent) return;

    const formData = new FormData();
    formData.append("title", newTitle);
    formData.append("subtitle", newSubtitle);
    formData.append("content", newContent);
    if (newImage) formData.append("image", newImage);

    try {
      const res = await fetch("https://blogifydev-backend-1.onrender.com/api/posts", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Failed to create post");
        return;
      }
      setPosts([data, ...posts]);
      setNewTitle("");
      setNewSubtitle("");
      setNewContent("");
      setNewImage(null);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://blogifydev-backend-1.onrender.com/api/posts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete post");
      setPosts(posts.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      setError("Could not delete post.");
    }
  };

  const handleSave = async (id) => {
    try {
      let body, headers;
      if (editedImage) {
        body = new FormData();
        body.append("content", editedContent);
        body.append("image", editedImage);
        headers = { Authorization: `Bearer ${token}` };
      } else {
        body = JSON.stringify({ content: editedContent });
        headers = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };
      }

      const res = await fetch(`https://blogifydev-backend-1.onrender.com/api/posts/${id}`, {
        method: "PUT",
        headers,
        body,
      });
      if (!res.ok) throw new Error("Failed to update post");
      const updatedPost = await res.json();
      setPosts(posts.map((p) => (p._id === id ? updatedPost.post || updatedPost : p)));
      setEditingId(null);
      setEditedContent("");
      setEditedImage(null);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Could not update post.");
    }
  };

  const handleEdit = (id, content) => {
    setEditingId(id);
    setEditedContent(content);
    setEditedImage(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedContent("");
    setEditedImage(null);
  };

  return (
    <div className="community-container">
      <h1>Community Blogs</h1>
      {error && <p className="error">{error}</p>}

      <div className="create-blog">
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="blog-title-input"
        />
        <input
          type="text"
          placeholder="Subtitle"
          value={newSubtitle}
          onChange={(e) => setNewSubtitle(e.target.value)}
          className="blog-subtitle-input"
        />
        <textarea
          placeholder="Content..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="blog-textarea"
        />
        <input type="file" accept="image/*" onChange={(e) => setNewImage(e.target.files[0])} />
        {newImage && <img src={URL.createObjectURL(newImage)} alt="Preview" style={{ maxWidth: "200px" }} />}
        <button className="btn" onClick={handleCreatePost}>Post Blog</button>
        <button className="btn" onClick={() => navigate("/my-posts")}>My Posts</button>
      </div>

      <div className="community-blogs-list">
        {posts.length === 0 ? <p>No blogs yet.</p> : posts.map((post) => (
          <div key={post._id} className="blog-card">
            <div className="blog-header">
              <div className="user-info">
                <div className="user-avatar">👤</div>
                <span className="author-name">{post.user?.name || "Unknown User"}</span>
              </div>
              <span className="blog-date">{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>

            <h3 className="blog-title">Title: {post.title}</h3>
            {post.subtitle && <h4 className="blog-subtitle">Subtitle: {post.subtitle}</h4>}
            {post.imageUrl && (
              <div className="blog-image">
                <img src={`https://blogifydev-backend-1.onrender.com${post.imageUrl}`} alt="Blog" />
              </div>
            )}

            {editingId === post._id ? (
              <>
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="blog-textarea"
                />
                <input type="file" accept="image/*" onChange={(e) => setEditedImage(e.target.files[0])} />
                {editedImage ? <img src={URL.createObjectURL(editedImage)} alt="Preview" /> :
                  post.imageUrl && <img src={`https://blogifydev-backend-1.onrender.com${post.imageUrl}`} alt="Current" />}
                <div className="blog-actions">
                  <button className="btn" onClick={() => handleSave(post._id)}>Save</button>
                  <button className="btn" onClick={handleCancel}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p className="blog-content">{post.content}</p>
                {post.user?._id === currentUser?._id && (
                  <div className="blog-actions">
                    <button className="btn" onClick={() => handleEdit(post._id, post.content)}>Edit</button>
                    <button className="btn" onClick={() => handleDelete(post._id)}>Delete</button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;










