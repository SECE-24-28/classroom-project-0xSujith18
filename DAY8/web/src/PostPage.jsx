import React from 'react'

const PostPage = () => {
  const posts = [
    { id: 1, title: "First Post", content: "This is my first blog post about React." },
    { id: 2, title: "Second Post",content:   " This is my Second blog post about React" },
    { id: 3, title: "Third Post", content: "This is my third blog post about React." }
  ]

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default PostPage