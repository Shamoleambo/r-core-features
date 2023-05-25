import { MdMessage, MdPostAdd } from 'react-icons/md'

function MainHeader({ onCreatePost }) {
  return (
    <header>
      <h1>React Poster</h1>
      <p>
        <button>New Post</button>
      </p>
    </header>
  )
}

export default MainHeader
