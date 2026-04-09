import React from 'react';
import { FaBookmark } from "react-icons/fa6";

const Blogg = ({ blog, handleBookmark, handleMarkAsread }) => {

    // const {blog} = props;
    // console.log(blog)
    return (
        <div>
            {/* <h1>Name:{blog.name}</h1> */}
            <div className="card bg-base-100 w-96 shadow-smn my-6">
                <figure>
                    <img src={blog.image} />
                </figure>
                <div className="card-body">
                    <h1>name: {blog.name}</h1>
                    <h2 className="card-title">Card Title: {blog.title}</h2>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-2xl'>{blog.author}</h3>
                        <img className='rounded-full size-18 my-10' src={blog.author_image} />
                        <button onClick={() => handleBookmark(blog)}> <FaBookmark size={29} /></button>
                    </div>

                    <div className='flex'>
                        {

                            blog.hashtags.map((has) => <p key={has}>{has}</p>)

                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleMarkAsread(blog.reading_time, blog.id)} className="btn btn-primary">mark as read</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogg;