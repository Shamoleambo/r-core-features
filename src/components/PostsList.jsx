import { useState } from 'react'
import NewPost from './NewPost'
import Post from './Post'
import Modal from './Modal'
import classes from './PostsList.module.css'

function PostsList() {
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  function bodyChangeHandler(event) {
    setBody(event.target.value)
  }
  function authorChangeHandler(event) {
    setAuthor(event.target.value)
  }

  return (
    <>
      <Modal>
        <NewPost
          onChangeBody={bodyChangeHandler}
          onChangeAuthor={authorChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={author} body={body} />
        <Post author='Semog Ogait' body='The Lamest Book' />
      </ul>
    </>
  )
}

export default PostsList
