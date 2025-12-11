const Home = ({posts}) => {
    return(
        <div>
        {
            posts && posts.length > 0 ? posts.map((post) => (
          <div key={post.id}>
            <h3>{post.id}</h3>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <hr />
          </div>
        )) : <p>No posts found</p>
        }
        </div>
    )
}

export default Home