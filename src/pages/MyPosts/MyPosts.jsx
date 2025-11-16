import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Community/Community.css";

function MyPosts({ currentUser }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedSubtitle, setEditedSubtitle] = useState("");
  const [editedImage, setEditedImage] = useState(null);

  const token = localStorage.getItem("token");

  // Fetch logged-in user's posts
  useEffect(() => {
    if (!token) return navigate("/");

    const fetchMyPosts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/posts/my-posts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load your posts.");
      }
    };

    fetchMyPosts();
  }, [token, navigate]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
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

  const handleEdit = (post) => {
    setEditingId(post._id);
    setEditedContent(post.content);
    setEditedTitle(post.title || "");
    setEditedSubtitle(post.subtitle || "");
    setEditedImage(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedContent("");
    setEditedTitle("");
    setEditedSubtitle("");
    setEditedImage(null);
  };

  const handleSave = async (id) => {
    try {
      let body, headers;
      if (editedImage) {
        body = new FormData();
        body.append("title", editedTitle);
        body.append("subtitle", editedSubtitle);
        body.append("content", editedContent);
        body.append("image", editedImage);
        headers = { Authorization: `Bearer ${token}` };
      } else {
        body = JSON.stringify({
          title: editedTitle,
          subtitle: editedSubtitle,
          content: editedContent,
        });
        headers = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };
      }

      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: "PUT",
        headers,
        body,
      });

      if (!res.ok) throw new Error("Failed to update post");
      const updatedPost = await res.json();
      setPosts(posts.map((p) => (p._id === id ? updatedPost.post || updatedPost : p)));
      handleCancel();
    } catch (err) {
      console.error(err);
      setError("Could not update post.");
    }
  };

  return (
    <div className="community-container">
      <h1>My Posts</h1>
      {error && <p className="error">{error}</p>}

      <button className="btn" onClick={() => navigate("/community-blogs")} style={{ marginBottom: "1rem" }}>
        Back to Community
      </button>

      {posts.length === 0 ? (
        <p>You have no posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="blog-card">
            <div className="blog-header">
              <div className="user-info">
                <div className="user-avatar">👤</div>
                <span className="author-name">{post.user?.name || "Unknown User"}</span>
              </div>
              <span className="blog-date">{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>

            {editingId === post._id ? (
              <>
                {/* Prefix labels */}
                <h3 className="blog-title">Title:</h3>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="blog-title-input"
                />

                <h4 className="blog-subtitle">Subtitle:</h4>
                <input
                  type="text"
                  value={editedSubtitle}
                  onChange={(e) => setEditedSubtitle(e.target.value)}
                  className="blog-subtitle-input"
                />

                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="blog-content"
                  style={{ marginBottom: "1rem" }}
                />

                <input type="file" accept="image/*" onChange={(e) => setEditedImage(e.target.files[0])} />
                {editedImage ? (
                  <div className="blog-image">
                    <img src={URL.createObjectURL(editedImage)} alt="Preview" />
                  </div>
                ) : post.imageUrl ? (
                  <div className="blog-image">
                    <img src={`http://localhost:5000${post.imageUrl}`} alt="Current Blog" />
                  </div>
                ) : null}

                <div className="blog-actions">
                  <button className="btn" onClick={() => handleSave(post._id)}>
                    Save
                  </button>
                  <button className="btn" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="blog-title">Title: {post.title}</h3>
                {post.subtitle && <h4 className="blog-subtitle">Subtitle: {post.subtitle}</h4>}
                {post.imageUrl && (
                  <div className="blog-image">
                    <img src={`http://localhost:5000${post.imageUrl}`} alt="Blog" />
                  </div>
                )}
                <p className="blog-content">{post.content}</p>

                {post.user?._id === currentUser?._id && (
                  <div className="blog-actions">
                    <button className="btn" onClick={() => handleEdit(post)}>
                      Edit
                    </button>
                    <button className="btn" onClick={() => handleDelete(post._id)}>
                      Delete
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default MyPosts;







