import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Homepage from './components/Homepage.jsx';
import Blogs from './components/Blogs.jsx';
import DetailedPost from './components/DetailedPost.jsx';

function App() {
  

  return (
    <main className='relative dark:text-white'>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:id' element={<DetailedPost />} />
      </Routes>
      </Router>
    </main>
  )
}

export default App
