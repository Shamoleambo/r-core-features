import NewPost from './NewPost'
import Post from './Post'
import classes from './PostsList.module.css'

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author='Tiago Gomes' content='The Super Book' />
        <Post author='Semog Ogait' content='The Lamest Book' />
      </ul>
    </>
  )
}

export default PostsList
