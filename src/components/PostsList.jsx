import { useState } from 'react'
import NewPost from './NewPost'
import Post from './Post'
import Modal from './Modal'
import classes from './PostsList.module.css'

function PostsList({ isPosting, onHideModal }) {
  return (
    <>
      {isPosting && (
        <Modal onClose={onHideModal}>
          <NewPost onCancel={onHideModal} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author='Semog Ogait' body='The Lamest Book' />
      </ul>
    </>
  )
}

export default PostsList
