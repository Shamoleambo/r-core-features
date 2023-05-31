import { Link, Form, redirect } from 'react-router-dom'
import classes from './NewPost.module.css'
import Modal from '../components/Modal'

export const action = async ({ request }) => {
  const formData = await request.formData()
  console.log(formData)
  const postData = Object.fromEntries(formData)

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return redirect('/')
}

function NewPost() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' name='body' rows={3} required></textarea>
        </p>
        <p>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' name='author' required />
        </p>
        <p className={classes.actions}>
          <Link to='..'>Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  )
}

export default NewPost
