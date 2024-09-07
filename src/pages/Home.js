import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Subsections from '../components/Subsections';


const Home = () => {
    return (
     <div className='full-background'>
        <div className='title-container'>
          Neblogas Blogas
        </div>
    
    <Subsections />

     </div>
    );
  };
  
  export default Home;