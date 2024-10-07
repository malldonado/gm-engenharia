import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/site/Index';
import Login from './pages/site/Login';
import About from './pages/site/About';
import Projects from './pages/site/Projects';
import Contact from './pages/site/Contact';
import Project from './pages/site/Project';
import SettingsPanel from './pages/panel/Settings';
import PostsPanel from './pages/panel/Posts';
import ServicesPanel from './pages/panel/Services';
import ProjectsPanel from './pages/panel/Projects';
import ProjectPanel from './pages/panel/Project';
import AboutPanel from './pages/panel/About';
import MessagePanel from './pages/panel/Message';
import 'react-slideshow-image/dist/styles.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/index" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projeto" element={<Project />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/panel" element={<PostsPanel />} />
          <Route path="/settings-panel" element={<SettingsPanel />} />
          <Route path="/message-panel" element={<MessagePanel />} />
          <Route path="/services-panel" element={<ServicesPanel />} />
          <Route path="/projects-panel" element={<ProjectsPanel />} />
          <Route path="/project-panel" element={<ProjectPanel />} />
          <Route path="/about-panel" element={<AboutPanel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
