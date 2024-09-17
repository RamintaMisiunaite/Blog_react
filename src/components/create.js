import {useState} from 'react';
import fb from './firebase.js';
import './create.css';
import moment from 'moment';

const db = fb.firestore()
const Blogs = db.collection('blogs');


const CreateBlog= () => {
    const [title , SetTitle] = useState("");
    const [body , SetBody] = useState("");
    const [theme , SetTheme] = useState("");

    const sub = (e) => {
        e.preventDefault();
        // Add data to the store
        Blogs.add({
            Title: title,
            Body: body,
            Theme:theme,
            //publish: false,
            published_on: fb.firestore.Timestamp.fromDate(new Date()),
            published_date: moment().format('MMMM Do YYYY, h:mm:ss a')
        })
        .then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    return (
    <div class='blog-placeholder'>
        <form onSubmit={(event) => {sub(event)}}>    
            <input type="text" placeholder="Title" 
            onChange={(e)=>{SetTitle(e.target.value)}} required />
            
            <input type="text" placeholder="Theme" 
            onChange={(e)=>{SetTheme(e.target.value)}} required />

            <textarea  name="content" type="text" placeholder="write your content here" 
            rows="10" cols="150" onChange={(e)=>{SetBody(e.target.value)}} required >
            </textarea>

            <button type="submit">Submit</button>
        </form>
    </div>

    );
}

export default CreateBlog;