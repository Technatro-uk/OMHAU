// React & App Imports

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

// Component Imports
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import QuickEscapes from './components/QuickEscapes/QuickEscapes';
import Resources from './components/Resources/Resources';

// Page Imports
import Home from './pages/HomePage/Home';
import Video from './pages/Video/Video';
import Audio from './pages/Audio/Audio';

// Admin Imports
import AddAudio from './Admin/Manage/Audio/Add/AddAudio';
import GetAudio from './Admin/Manage/Audio/Get/GetAudio';

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
        <Route path='/addaudio' element={<AddAudio />} />
        <Route path='/getaudio' element={<GetAudio />} />
      </Routes>
    </Router>
  );
}

export default App;
