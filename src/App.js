import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Subsections from './components/Subsections.js'
// import firebase from 'firebase'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>    
    
    <div className='full-background'>
      <div className='title-container'>Title title title</div>
      <Router>
      <Subsections />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>   
    </div>

    </>
  );
}

export default App;
