import { useState, useEffect } from 'react'
import NewPost from './NewPost'
import Post from './Post'
import Modal from './Modal'
import classes from './PostsList.module.css'

function PostsList({ isPosting, onHideModal }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json()
      setPosts(resData.posts)
    }

    fetchPosts()
  }, [])

  function addPostHandler(newPost) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setPosts((prevState) => [...prevState, newPost])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onHideModal}>
          <NewPost onCancel={onHideModal} onAddNewPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  )
}

export default PostsList
