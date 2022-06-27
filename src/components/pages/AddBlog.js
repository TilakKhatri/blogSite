import React, { useEffect, useState } from 'react';
import { db, storage } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage';
import userEvent from '@testing-library/user-event';


function AddBlog() {
    const [file, setFile] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [progress, setProgress] = useState();
    const [blogs, setBlogs] = useState({
        title: "",
        description: "",
    })

    function handleImg(e) {
        setFile(e.target.files[0]);
    }

    function handleChange(e) {

        const { name, value } = e.target;

        setBlogs(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        });


    }

    function Addblog(e) {
        e.preventDefault();
        if (!file) return;
        const storageRef = ref(storage, `thumbnails/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)) * 100;
                setProgress(progress);
            },
            (err) => {
                alert(err)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL);
                    setBlogs({ ...blogs, imgUrl: downloadURL });


                }
                )
            }
        )
        const blogRef = collection(db, 'Blogs');
        addDoc(blogRef, {
            ...blogs
        });
    }

    return (
        <div className=" container ">
            <div>
                {
                    !imgUrl &&
                    <div className='outerbar'>
                        <div className='innerbar' style={{ width: `${progress}%` }}>{progress}%</div>

                    </div>
                }
                {
                    imgUrl &&
                    <img src={imgUrl} alt='uploaded file' style={{ height: "200px", width: "200px" }} />
                }
            </div>
            <form className="row g-3" onSubmit={Addblog}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fw-bold fs-5">Blog Thumnail</label>
                    <input type="file" className="form-control"
                        onChange={handleImg}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fw-bold fs-5">Blog Title</label>
                    <input type="text" className="form-control"
                        placeholder="Artificial Intelligence"
                        name="title"
                        value={blogs.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label fw-bold fs-5">Description</label>
                    <textarea className="form-control" rows="3"
                        placeholder="Artificial intelligence is..."
                        name="description"
                        value={blogs.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-success fw-bold text-dark hover:text-white">publish</button>
                </div>
            </form >
        </div>
    )
}


export default AddBlog