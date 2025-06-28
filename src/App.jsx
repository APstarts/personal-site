import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Homepage from './components/Homepage.jsx';

function App() {
  

  return (
    <main className='relative dark:text-white'>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      </Router>
    </main>
  )
}

export default App
