import React, { useState } from 'react'
import { storage } from "../../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function Imgupload() {
    const [imgUrl, setImgUrl] = useState(null);
    const [file, setFile] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);

    function handleImg(e) {
        setFile(e.target.files[0]);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!file) return;
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgresspercent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL)
                });
            }
        );
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className='form'>
                <input type='file'
                    onChange={handleImg}
                />
                <button type='submit'>Upload</button>
            </form>
            {
                !imgUrl &&
                <div className='outerbar'>
                    <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                </div>
            }
            {
                imgUrl &&
                <img src={imgUrl} alt='uploaded file' height={200} />
            }
        </div>
    );
}

export default Imgupload;