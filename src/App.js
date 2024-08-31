import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Subsections from './components/Subsections.js'
// import CreateBlog from './create.js';
import CreateBlogPage from './components/CreateBlogPage.js';
import BloglistView from './bloglist.js';
import Layout from './Layout.js';
import Home from './Home.js';
import NoPage from './NoPage.js';
import ReactDOM from "react-dom/client";
import Knygos from './pages/Knygos.js';
import Diet from './pages/Diet.js';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create_blogs" element={<CreateBlogPage />} />
          <Route path="bloglist_view" element={<BloglistView />} />
          <Route path="*" element={<NoPage />} />

          <Route path="knygos" element={<Knygos />} />
          <Route path="diet" element={<Diet />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
