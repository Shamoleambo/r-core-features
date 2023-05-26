import { useState } from 'react'
import NewPost from './NewPost'
import Post from './Post'
import Modal from './Modal'
import classes from './PostsList.module.css'

function PostsList({ isPosting, onHideModal }) {
  const [posts, setPosts] = useState([])

  function addPostHandler(newPost) {
    setPosts((prevState) => [...prevState, newPost])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onHideModal}>
          <NewPost onCancel={onHideModal} onAddNewPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post, index) => (
          <Post key={index} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  )
}

export default PostsList
