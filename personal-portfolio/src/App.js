//import logo from '../src/img/reshot-icon-github-NY46M9DGFU.svg';
import './App.css';
import {NavBar} from './components/navbar';
import {Banner} from "./components/banner";
import {Skills} from "./components/skills";
import {Experience} from "./components/experience";
import {Projects} from "./components/projects";
import {Education} from "./components/education";
import {Contact} from "./components/contact";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />

    </div>
  );
}

export default App;
