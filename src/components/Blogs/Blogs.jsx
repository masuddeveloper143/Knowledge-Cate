import React, { useEffect, useState } from 'react';
import Blogg from '../Blogg/Blogg';

const blogs = ({ handleBookmark, handleMarkAsread }) => {
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // console.log(blogs)
    return (
        <div>
            <h1 className='text-3xl font-bold'>Total: {blogs.length}</h1>
            <div className='all-blogs grid grid-cols-2'>
                {
                    blogs.map((blog) => (
                        <Blogg key={blog.id} blog={blog} handleBookmark={handleBookmark} handleMarkAsread={handleMarkAsread} ></Blogg>))
                }
            </div>
        </div>
    );
};

export default blogs;