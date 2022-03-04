import {Router, Route, Switch} from 'react-router-dom';import './style.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div>
      <Router>
      <Header />
      <Switch>  
        <Route exact path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Switch>
      <Footer />
        </Router>
      {/* <Header />
      <Routes>  
        <Route exact path='react-portfolio-v4/' element={<About />} />
        <Route exact path='react-portfolio-v4/portfolio' element={<Portfolio />} />
        <Route exact path='react-portfolio-v4/contact' element={<Contact />} />
        <Route exact path='react-portfolio-v4/resume' element={<Resume />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;