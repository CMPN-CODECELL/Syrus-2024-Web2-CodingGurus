import React, { useState, useEffect } from 'react';

function Community() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostContact, setNewPostContact] = useState('');
  const [newAuthorName, setNewAuthorName] = useState('');

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts) {
      setPosts(storedPosts);
    }
  }, []);

  const addPost = (e) => {
    e.preventDefault();
    if (newPostTitle && newPostContent && newPostContact && newAuthorName) {
      const newPost = {
        title: newPostTitle,
        content: newPostContent,
        comments: [],
        author: newAuthorName,
        contact: newPostContact,
      };
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      setNewPostTitle('');
      setNewPostContent('');
      setNewPostContact('');
      setNewAuthorName('');
    } else {
      alert('Title, author, content, and contact number are required!');
    }
  };

  return (
    <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, backgroundSize: 'cover' }}>
    <div className="flex flex-col items-center px-4 justify-center min-h-screen shadow-lg shadow-slate-200">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full md:w-96"
        onSubmit={addPost}
      >
        <h2 className="text-2xl mb-4"> COMMUNITY POST</h2>
        <input
          type="text"
          id="new-post-title"
          placeholder="Title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          required
          className="w-full h-10 px-4 mb-4 border-2 bg-blue-200/35 border-blue-300 rounded"
        />
        <input
          type="text"
          id="author-name"
          placeholder="Author Name"
          value={newAuthorName}
          onChange={(e) => setNewAuthorName(e.target.value)}
          required
          className="w-full h-10 px-4 mb-4 border-2 bg-blue-200/35 border-blue-300 rounded"
        />
        <textarea
          id="new-post-content"
          placeholder="Content"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          required
          className="w-full h-32 px-4 mb-4 border-2 bg-blue-200/35 border-blue-300 rounded"
        ></textarea>
        <input
          type="text"
          id="new-post-contact"
          placeholder="Contact Number"
          value={newPostContact}
          onChange={(e) => setNewPostContact(e.target.value)}
          required
          className="w-full h-10 px-4 mb-4 border-2 bg-blue-200/35 border-blue-300 rounded"
        />
        <button
          type="submit"
          className="w-full h-10 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <div id="posts" className="mt-8 w-full md:w-2/3">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div>
              <p className="font-semibold">{post.author} ({post.contact})</p>
            </div>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.content}</p>
            <div className="mt-4 border-t border-gray-300 pt-4">
              {post.comments.map((comment, index) => (
                <p key={index} className="border-t border-gray-300 pt-2">{comment}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Community;
