// React & App Imports

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

// Component Imports
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import QuickEscapes from './components/Library/QuickEscapes/QuickEscapes';
import Resources from './components/Resources/Resources';

// Page Imports
import Home from './pages/HomePage/Home';
import Video from './pages/Video/Video';
import Audio from './pages/Audio/Audio';
import Stories from './pages/Stories/Stories';

// Admin Imports
// Dashboard
import Dashboard from './Admin/Dashboard/Dashboard';

// Audio
import AddAudio from './Admin/Manage/Audio/Add/AddAudio';
import EditAudio from './Admin/Manage/Audio/Edit/EditAudio';
// Video
import AddVideo from './Admin/Manage/Video/Add/AddVideo';
import EditVideo from './Admin/Manage/Video/Edit/EditVideo';
// Stories
import AddStories from './Admin/Manage/Stories/Add/AddStory';
import EditStories from './Admin/Manage/Stories/Edit/EditStory';

// Quick Escapes
import AddEscape from './Admin/Manage/QuickEscape/Add/AddEscape';
import EditEscape from './Admin/Manage/QuickEscape/Edit/EditEscape';

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

        {/* Admin Dashboard */}
        <Route path='/admin/home' element={<Dashboard />} />

        {/* Audio Routes */}
        {/* Public */}
        <Route path='/audio' element={<Audio />} />
        {/* Admin */}
        <Route path='/audio/add' element={<AddAudio />} />
        <Route path='/audio/edit' element={<EditAudio />} />
        
        {/* Video Routes */}
        {/* Public */}
        <Route path='/video' element={<Video />} />
        {/* Admin */}
        <Route path='/video/add' element={<AddVideo />} />
        <Route path='/video/edit' element={<EditVideo />} />
        
        {/* Story Routes */}
        {/* Public */}
        <Route path='/stories' element={<Stories />} />
        {/* Admin */}
        <Route path='/stories/add' element={<AddStories />} />
        <Route path='/stories/edit' element={<EditStories />} />
        
        {/* Book Routes */}
        {/* Public */}
        
        {/* Admin */}

        
        {/* Quick Escape Routes */}
        {/* Public */}
        
        <Route path='/quickescapes' element={<QuickEscapes />} />
        {/* Admin */}
        <Route path='/quickescapes/add' element={<AddEscape />} />
        <Route path='/quickescapes/edit' element={<EditEscape />} />
        
      </Routes>
    </Router>
  );
}

export default App;