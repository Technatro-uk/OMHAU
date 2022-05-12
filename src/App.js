import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home';
import Resources from './pages/Resources/Resources';
import Signup from './pages/Signup/Signup';
import { GlobalStyle } from './globalStyles';
import ScrollToTop from './components/ScrollToTop';
import Videos from './pages/Videos/Videos';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
