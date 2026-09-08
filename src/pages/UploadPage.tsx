import {useState} from 'react';

const UploadPage = () => {
    
    const [image, setImage] = useState< File | null>(null);
    const [caption, setCaption] = useState("");

    const handleSubmit = () => {
        console.log("image url: ", image);
        console.log("Caption: ", caption);
    }

    return (
        <>
       <div>
        <div>
                <input 
                type='file'
                accept='image/*'
                onChange={e=> setImage(e.target.files?.[0] || null)}
                className=''
                />

                {image && (
                    <img
                    src = {URL.createObjectURL(image)}
                    alt='Preview'
                    className=''
                    />
                )}

                <textarea
                placeholder='Write a Caption'
                value = {caption}
                onChange={e => setCaption(e.target.value)}
                className=''
                />

                <button
                className=''
                onClick = {handleSubmit}
                >
                Upload the Image
                </button>

        </div>
       </div>
        </>
    )
}

export default UploadPage;