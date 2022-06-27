import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';



function Getblog() {
    const [blogs, setBlogs] = useState([]);
    const blogCollectionRef = collection(db, 'Blogs');

    useEffect(() => {
        getDocs(blogCollectionRef)
            .then((res) => {
                const blogContainer = res.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                }));
                setBlogs(blogContainer);
            })
            .catch(err => console.log(err.message))

    })
    return (
        <>
            <div class="flex justify-center flex-col items-center">
                {
                    blogs.map((blog) => {
                        return (
                            <div class="flex md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg m-3 sm:flex-col flex-col" key={blog.id}>
                                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={blog.data.imgUrl} alt="" />
                                <div class="p-6 flex flex-col justify-start">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">{blog.data.title}</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        {blog.data.description}
                                    </p>
                                    {/* <p class="text-gray-600 text-xs">{blog.data.created.toDate().toDateString()}</p> */

                                    }
                                </div>
                            </div>
                        )
                    })

                }
            </div>

        </>
    )
}

export default Getblog