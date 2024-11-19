import {useState} from 'react';
import fb from './firebase.js';
import './create.css';
import moment from 'moment';

const db = fb.firestore()
const Blogs = db.collection('blogs');

const possibleValues = ['Knygos', 'Fuck Diet']; 


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

    // try auto complete
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);


    const handleInputChange = (event) => {
        const theme = event.target.value;
        SetTheme(theme);

        if (theme.length > 0 ){
            const filteredSuggestions = possibleValues.filter(suggestion =>
                suggestion.toLowerCase().includes(theme.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        }else{
            setSuggestions([]);
        }
    }

    const handleSuggestionClick = (theme) => {
        SetTheme(theme);
        setSuggestions([]);
      };
    
    const clearThemeonClick = () => {
        SetTheme('');
    }

    return (
    <>
    <h1>Create a new blog entry</h1>
    <div class='blog-placeholder'>
        <form className='submit-form' onSubmit={(event) => {sub(event)}}>    
            <input className='form-input-title' type="text" placeholder="Title" 
            onChange={(e)=>{SetTitle(e.target.value)}} required />
            
{/* 
            <input className='form-input-theme' type="text" placeholder="Theme" 
            onChange={(e)=>{SetTheme(e.target.value)}} required /> */}

            <input className='form-input-theme' type="text" placeholder="Theme" value={theme}
            onChange={handleInputChange} required />{suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((suggestion, index) => (
                    <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    // Additional props
                    >
                    {suggestion}
                    </li>
                ))}
                </ul> 
              )}                

            <textarea className='form-input-text'  name="content" type="text" placeholder="write your text here" 
            rows="30" cols="150" onChange={(e)=>{SetBody(e.target.value)}} required >
            </textarea>

            <button className='submit-btn' type="submit">Submit</button>
        </form>
    </div>
    </>
    );
}

export default CreateBlog;