import { Routes, Route } from 'react-router-dom'
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
      <Routes basename={process.env.PUBLIC_URL}>  
        <Route path='/' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;