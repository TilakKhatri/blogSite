import React from 'react'
import Card from './Card'


const BlogList = (props) => {
    // console.log(props)

    const blogListRender = props.blogs.map((blog) => {

        return (
            <>
                {/* styling single card with responsive design */}
                < div className=" col-xl-4 col-xxl-3 col-xs-12 col-md-6 " >
                    <Card blog={blog} />
                </div >
            </>
        )

    });


    return (

        <div className='contaier'>
            <h1 className='fs-4  fw-bold text-center border-bottom heading p-2'>Our Blogs</h1>
            <div className='row g-3'>
                {/* blog section */}
                {blogListRender}
            </div>
        </div>
    )

}


export default BlogList