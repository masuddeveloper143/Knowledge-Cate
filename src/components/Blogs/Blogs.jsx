import React, { useEffect, useState } from 'react';

const blogs = () => {
const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    console.log(blogs)
    return (
        <div>

        </div>
    );
};

export default blogs;