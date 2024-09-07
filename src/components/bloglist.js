import React, { useState, useEffect }from 'react'
import { Link } from "react-router-dom";
import fb from './firebase'
import './bloglist.css'


const db = fb.firestore()
const Blogs = db.collection('blogs');



function BloglistView({blog_theme}) {
  const [bloglist, Setblogs] = useState([]);
  let queryRef = Blogs.where('Theme', '==', blog_theme);//.orderBy('published_on', Query.Direction.ASCENDING);

  useEffect(() => {
    // Subscribe to query with onSnapshot
    const unsubscribe = queryRef.limit(100).onSnapshot(querySnapshot => {
      // Get all documents from collection - with IDs
      const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Update state
      Setblogs(data);
    });

    // Detach listener
    return unsubscribe;
  }, []);


  return (
    <>
      <h1>{blog_theme}</h1>
      <div className='blogs-container'>
          {bloglist.map(blog=> (
          <div key={blog.id} className='blog-container'>
              <h3 className='blog-title'>{blog.Title}</h3>
              <p className='blog-date'>{blog.published_on.seconds * 1000}</p>
              <p className='blog-body'>{blog.Body} </p>
              {/* <p>Date: {(blog.published_on.seconds * 1000).toISOString()}</p> */}
          </div>
          ))}
    
  </div>
  </>
  );
}

export default BloglistView;