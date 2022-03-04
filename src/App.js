import { Routes, Route, Switch} from 'react-router-dom'
import './style.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div>
      <Header />
      <Routes>  
        <Switch>
        <Route path='/react-portfolio-v4' element={<About />} />
        <Route path='/react-portfolio-v4/portfolio' element={<Portfolio />} />
        <Route path='/react-portfolio-v4/contact' element={<Contact />} />
        <Route path='/react-portfolio-v4/resume' element={<Resume />} />
        </Switch>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;