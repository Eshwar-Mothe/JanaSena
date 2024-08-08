import React from 'react'

export const PostBlog = () => {
    return (
        <div>
            <div className="text-area">
                <p>Write Here</p>
                <textarea name="PostBlog" id="PostBlog" cols="30" rows="10">
                    {/* <input type="text" name="blog_post" id="blog_post" /> */}
                </textarea>
                <input type="file" capture="user" />
            </div>
        </div >
    )
}
