import React, { useEffect, useState } from 'react';
import fb from '../components/firebase';
import {doc, getDoc } from 'firebase/firestore';
import '../pages_css/Post.css';


const db = fb.firestore();
const blogs = db.collection("blogs");

function Post({blog_id}) {

    const[blog_post, SetBlog] = useState({});

    function fetchSinglePost(){
        db.collection("blogs")
        .doc(blog_id)
        .get()
        .then((snapshot)=>{
          if(snapshot){
            SetBlog(snapshot.data());
          }
        });
    }

  fetchSinglePost();

  return (
   
    
    <div>
        <h1>{blog_post.Title}</h1>
        <p>{blog_post.Body}</p>
    </div>)
  
}

export default Post;
