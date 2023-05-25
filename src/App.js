import { useState } from 'react'
import MainHeader from './components/MainHeader'
import PostsList from './components/PostsList'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(true)

  function hideModalHandler() {
    setIsModalVisible(false)
  }

  function showModalHandler() {
    setIsModalVisible(true)
  }

  return (
    <main>
      <MainHeader onCreatePost={showModalHandler} />
      <PostsList isPosting={isModalVisible} hideModal={hideModalHandler} />
    </main>
  )
}

export default App
