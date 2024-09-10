import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Subsections from './components/Subsections.js'
import CreateBlogPage from './pages/CreateBlogPage.js';
import BloglistView from './components/bloglist.js';
import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import NoPage from './pages/NoPage.js';
import ReactDOM from "react-dom/client";
import Knygos from './pages/Knygos.js';
import Diet from './pages/Diet.js';
import Vasara from './pages/Vasara.js';
import Post from './pages/Post.js';
import Post_page from './pages/Post_page.js';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create_blogs" element={<CreateBlogPage />} />
          {/* <Route path="bloglist_view" element={<BloglistView  />} /> */}
          <Route path="*" element={<NoPage />} />

          <Route path="knygos" element={<Knygos />} />
          <Route path="diet" element={<Diet />} />
          <Route path="vasara" element={<Vasara />} />
          <Route path="post/:id" element={<Post_page />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
