import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home';
import Videos from './pages/Videos/Videos';
import Resources from './pages/Resources/Resources';
import Audiobooks from './pages/Audiobooks/Audiobooks';

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
        <Route path='/audiobooks' element={<Audiobooks />} />
      </Routes>
    </Router>
  );
}

export default App;
