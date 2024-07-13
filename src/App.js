import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Project1 from "./components/projects/Project1";
import Project2 from "./components/projects/Project2";
import Project3 from "./components/projects/Project3";


function App() {
  return (
    <Router>
      <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/projects`} element={<Projects />} />
            <Route path={`/contact`} element={<Contact />} />
            <Route path={`/project1`} element={<Project1 />} />
            <Route path={`/project2`} element={<Project2 />} />
            <Route path={`/project3`} element={<Project3 />} />
          </Routes>
    </Router>
  );
}

export default App;
