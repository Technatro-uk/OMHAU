import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home';
import Video from './pages/Video/Video';
import Audio from './pages/Audio/Audio';
import QuickEscapes from './components/QuickEscapes/QuickEscapes';
import Resources from './components/Resources/Resources';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/video' element={<Video />} />
        <Route path='/audio' element={<Audio />} />
        <Route path='/quickescapes' element={<QuickEscapes />} />
      </Routes>
    </Router>
  );
}

export default App;
