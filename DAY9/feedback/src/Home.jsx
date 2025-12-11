import React from 'react'

const Home = ({posts}) => {
    return(
        <div>
        {
            posts && posts.length > 0 ? posts.map((post) => (
          <div key={post.id}>
            <h3>{post.id}</h3>
            <h3>{post.title}</h3>
            <p>{post.body || post.content}</p>
            <p>{post.datetime}</p>
            <hr />
          </div>
        )) : <p>No posts found</p>
        }
        </div>
    )
}

export default Home