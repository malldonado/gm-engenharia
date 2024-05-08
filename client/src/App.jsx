import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import About from './pages/About';
import Projects from './pages/Projects';
import PostsPanel from './pages/PostsPanel';
import SettingsPanel from './pages/SettingsPanel';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Project from './pages/Project';
import ServicesPanel from './pages/ServicesPanel';
import ProjectsPanel from './pages/ProjectsPanel';
import AboutPanel from './pages/AboutPanel';
import 'react-slideshow-image/dist/styles.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/index" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/panel" element={<PostsPanel />} />
          <Route path="/settings-panel" element={<SettingsPanel />} />
          <Route path="/services-panel" element={<ServicesPanel />} />
          <Route path="/projects-panel" element={<ProjectsPanel />} />
          <Route path="/about-panel" element={<AboutPanel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
