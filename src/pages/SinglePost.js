import React from 'react';
import { BlogButton } from '../components/RedirectToBlogButton'; 
import '../pages_css/SinglePost.css'

function SinglePost({blog_var}) {
    const textStyle = {
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      };

// This function returns the correct style to the blog body div.
function calculateTextStyle() {
    return truncate ? textStyle : null;
  }

// I used React Hooks to create a variable in state to manage if the text should be truncated or not.
  const [truncate, setToggleTruncate] = React.useState(true);

// This function toggles the state variable 'truncate', thereby expanding and truncating the text every time the user clicks the div.
  function toggleTruncate() {
    setToggleTruncate(!truncate);
  }

  if(!blog_var.published_date){
    blog_var.published_date = 'empty'
  }

  return (
    <div className='single-post-container'>
      <h3 className='blog-title'>{blog_var.Title}</h3>
        <p className='blog-date'>{blog_var.published_date}</p> 
              <p className='blog-body' style={calculateTextStyle()} >{blog_var.Body} </p>
              

              <BlogButton blog_id={blog_var.id}></BlogButton>
    </div>
  )
}

export default SinglePost
