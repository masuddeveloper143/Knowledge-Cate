
import './App.css'
import Navbar from './components/Navbar/Navbar';

import Blogs from './components/Blogs/Blogs'
import blogs from './components/Blogs/Blogs';
import { useState } from 'react';





function App() {
  const [bookmarked, setBookmarked] = useState([])
  const [readingCount, setReadingCount] = useState(0)



  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked, blog])
  }

  const handleMarkAsread = (time, id) => {
    const newTime = readingCount + parseInt(time);
    setReadingCount(newTime);
    handleRemoveFromBookMark(id)
  }

  const handleRemoveFromBookMark = (id) => {
    const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookMark)
  }

  return (
    <>
      <Navbar></Navbar>


      <div className='min-container flex text-center'>
        <div className='left-container w-[70%]'>



          <Blogs handleBookmark={handleBookmark} handleMarkAsread={handleMarkAsread}  ></Blogs>
        </div>
        <div className='right-container w-[30%]'>
          <h1>Reading Time: {readingCount}</h1>
          <h1> bookmarked count: {bookmarked.length}</h1>

          {
            bookmarked.map((marked) => <p className='bg-red-500 m-4 text-white text-3xl'>{marked.title}</p>)
          }

        </div>
      </div>

    </>
  )
}

export default App
