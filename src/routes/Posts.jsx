import { useState } from 'react'
import MainHeader from '../components/MainHeader'
import PostsList from '../components/PostsList'

function Posts() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function hideModalHandler() {
    setIsModalVisible(false)
  }

  function showModalHandler() {
    setIsModalVisible(true)
  }

  return (
    <main>
      <MainHeader onCreatePost={showModalHandler} />
      <PostsList isPosting={isModalVisible} onHideModal={hideModalHandler} />
    </main>
  )
}

export default Posts
