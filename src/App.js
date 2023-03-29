import Navbar from './NavbarElements/Navbar'
import { HashRouter as Router, Routes, Route}
    from 'react-router-dom';
import Courseinfo from "./pages/courseinfo";
import Unicafe from './pages/unicafe';
import Anecdotes from './pages/anecdotes';

// App------------

const App = () => {  
  return (
    <Router>
    <Navbar />
        <Routes>
          <Route exact path='/' element={<Courseinfo />} />
          <Route path='/courseinfo' element={<Courseinfo />} />
          <Route path='/unicafe' element={<Unicafe />} />
          <Route path='/anecdotes' element={<Anecdotes />} />
        </Routes>
    </Router>
  )
}

export default App;

