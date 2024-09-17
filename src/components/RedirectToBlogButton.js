import React from "react";
import './RedirectToBlogButton.css' ;
import {Link} from 'react-router-dom';
import Post from "../pages/Post";
import Post_page from "../pages/Post_page";

// const STYLES = ['btn--primary', 'btn--outline'];
// const SIZE = ['btn--medium', 'btn--large'];

export const BlogButton = ({blog_id}) => {
    // use Link styled as a button
    return (

        <Link to={{ pathname : `/post/${blog_id}` }} state = {blog_id} className="read-more-button">
            Read more
        </Link>
    )
};