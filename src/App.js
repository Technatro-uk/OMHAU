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
import Stories from './pages/Stories/Stories';

// Admin Imports
// Audio
import AddAudio from './Admin/Manage/Audio/Add/AddAudio';
import GetAudio from './Admin/Manage/Audio/Get/GetAudio';
// Video
import AddVideo from './Admin/Manage/Video/Add/AddVideo';
import GetVideo from './Admin/Manage/Video/Get/GetVideo';
// Stories
import AddStories from './Admin/Manage/Stories/Add/AddStory';
import GetStories from './Admin/Manage/Stories/Get/GetStory';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path='/' element={<Home />} />
        <Route path='/resources' element={<Resources />} />

        {/* Audio Routes */}
        {/* Public */}
        <Route path='/audio' element={<Audio />} />
        {/* Admin */}
        <Route path='/addaudio' element={<AddAudio />} />
        <Route path='/getaudio' element={<GetAudio />} />
        
        {/* Video Routes */}
        {/* Public */}
        <Route path='/video' element={<Video />} />
        {/* Admin */}
        <Route path='/addvideo' element={<AddVideo />} />
        <Route path='/getvideo' element={<GetVideo />} />
        
        {/* Story Routes */}
        {/* Public */}
        <Route path='/stories' element={<Stories />} />
        {/* Admin */}
        <Route path='/story/add' element={<AddStories />} />
        <Route path='/story/get' element={<GetStories />} />
        
        {/* Book Routes */}
        {/* Public */}
        
        {/* Admin */}

        
        {/* Quick Escape Routes */}
        {/* Public */}
        
        <Route path='/quickescapes' element={<QuickEscapes />} />
        {/* Admin */}
        
      </Routes>
    </Router>
  );
}

export default App;