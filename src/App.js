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

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resources' element={<Resources />} />

        {/* Admin Dashboard */}
        <Route path='/admin/home' element={<Dashboard />} />
        
        <Route path='/audio' element={<Audio />} />

        <Route path='/video' element={<Video />} />

        <Route path='/stories' element={<Stories />} />
        
        <Route path='/quickescapes' element={<QuickEscapes />} />
        
      </Routes>
    </Router>
  );
}

export default App;