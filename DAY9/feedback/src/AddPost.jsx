const AddPost = ({title, setTitle, body, setBody, handleSubmit}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Title' 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input 
              type="text" 
              placeholder='Body' 
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">Add Post</button>
        </form>
    </div>
  )
}

export default AddPost