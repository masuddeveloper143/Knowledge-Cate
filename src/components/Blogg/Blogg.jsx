import React from 'react';

const Blogg = ({ blog }) => {
    // const {blog} = props;
    // console.log(blog)
    return (
        <div>
            {/* <h1>Name:{blog.name}</h1> */}
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img src={blog.image}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title: </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogg;