import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './NewPost.module.css'
import Modal from '../components/Modal'

function NewPost({ onAddNewPost }) {
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  function bodyChangeHandler(event) {
    setBody(event.target.value)
  }
  function authorChangeHandler(event) {
    setAuthor(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()
    const postData = {
      body,
      author
    }

    onAddNewPost(postData)
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea
            id='body'
            rows={3}
            required
            onChange={bodyChangeHandler}
          ></textarea>
        </p>
        <p>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            onChange={authorChangeHandler}
            required
          />
        </p>
        <p className={classes.actions}>
          <Link to='..'>Cancel</Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  )
}

export default NewPost
