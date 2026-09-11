import { useState, type FormEvent } from 'react';
import api from '../api/api';

const UploadPage = () => {
    const [image, setImage] = useState<File | null>(null);
    const [caption, setCaption] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!image) {
            alert("Please insert an image");
            return;
        }
        
        const formData = new FormData();
        formData.append("image", image);
        formData.append("caption", caption);

        try {
            setLoading(true);
            const response = await api.post("/post", formData);
            console.log("Upload Successfully: ", response.data);
            alert("Uploaded successfully!");

            // Reset data
            setImage(null);
            setCaption("");
        } catch (error) {
            console.log("Fail to upload:", error);
            alert("Fail to upload photo");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto py-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Upload New Post
            </h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                {/* File Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Image
                    </label>
                    <input 
                        type="file"
                        accept="image/*"
                        onChange={e => setImage(e.target.files?.[0] || null)}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100 cursor-pointer"
                    />
                </div>

                {/* Image Preview */}
                {image && (
                    <div className="mt-4">
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="w-full h-72 object-cover rounded-xl border border-gray-200"
                        />
                    </div>
                )}

                {/* Caption Textarea */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Caption
                    </label>
                    <textarea
                        placeholder="Write a caption..."
                        value={caption}
                        onChange={e => setCaption(e.target.value)}
                        rows={3}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 resize-none"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors disabled:opacity-50 cursor-pointer"
                >
                    {loading ? "Uploading..." : "Upload the Image"}
                </button>
            </form>
        </div>
    );
};

export default UploadPage;