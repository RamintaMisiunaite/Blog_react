import React, { useState, useEffect }from 'react'
import { Link } from "react-router-dom";
import fb from './firebase'
import './bloglist.css'
import SinglePost from '../pages/SinglePost';
import Post from '../pages/Post';


const db = fb.firestore()
const Blogs = db.collection('blogs');


function BloglistView({blog_theme}) {
  const [bloglist, Setblogs] = useState([]);
  let queryRef = Blogs.where('Theme', '==', blog_theme);//.orderBy("published_date", "asc");


  useEffect(() => {
    // Subscribe to query with onSnapshot
    const unsubscribe = queryRef.limit(100).onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      Setblogs(data);
    });

    return unsubscribe;
  }, []);


  return (
    <>
      <h1>{blog_theme}</h1>
      <div className='blogs-container'>
          {bloglist.map(blog=> ( 
          <div key={blog.id} className='blog-container'>
            <SinglePost blog_var={blog}/>
          </div>


          ))}
    
  </div>
  </>
  );
}

export default BloglistView;