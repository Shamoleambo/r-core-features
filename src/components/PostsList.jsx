import { useState } from 'react'
import NewPost from './NewPost'
import Post from './Post'
import classes from './PostsList.module.css'

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('')

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value)
  }

  return (
    <>
      <NewPost onChangeBody={bodyChangeHandler} />
      <ul className={classes.posts}>
        <Post author='Tiago Gomes' body={enteredBody} />
        <Post author='Semog Ogait' body='The Lamest Book' />
      </ul>
    </>
  )
}

export default PostsList
