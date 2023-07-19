import './Header.css'
import NavBar from '../Nabvar/Navbar'

const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <NavBar />
        <div className="cta">
          <p className='paragraph'>Sound Design Masterclass</p>
          <h1 className='title'>
            Learn the Art of Sound Design
          </h1>
          <a href="#" className='btn-header'>
            Demo Lesson
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header