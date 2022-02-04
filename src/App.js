//import Logo from './Logo.svg';
//import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import EducationAndExperience from './components/EducationAndExperience'
import Portfolio from './components/portfolio';
import About from './components/About';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Portfolio></Portfolio>
      <About></About>    
      <Skills></Skills>
      <EducationAndExperience></EducationAndExperience>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
