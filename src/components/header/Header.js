import { Routes, Route } from 'react-router-dom'
import Nav from '../nav/Nav'
import About from '../about/About'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import Resume from '../resume/Resume'

export default function Header() {
    return (

        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </div>
    );
}