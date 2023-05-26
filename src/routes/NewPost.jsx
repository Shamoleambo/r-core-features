import { useState } from 'react'
import classes from './NewPost.module.css'
import Modal from '../components/Modal'

function NewPost({ onCancel, onAddNewPost }) {
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
    onCancel()
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
          <button type='button' onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  )
}

export default NewPost
