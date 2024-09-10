import React from 'react'
import Post from './Post'
import { useLocation } from 'react-router-dom'

function Post_page() {

const location = useLocation();

let blog_id_var = location.state;

  return (
  
    <div>
      <Post blog_id={blog_id_var}/>
    </div>
  )
}

export default Post_page
