import './Footer.css'
import { facebookLogo, instagramLogo, twitterLogo } from '../../assets/index'

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-container">

          <div className="social-footer">
            <a href="#" className='logo'>
              Sound<span className='red'>DZign</span>
            </a>
            <div className='icons-footer'>
              <a href="#">
                <img src={facebookLogo} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitterLogo} alt="twiter" />
              </a>
              <a href="#">
                <img src={instagramLogo} alt="instagram" />
              </a>
            </div>
          </div>

          <div className='links-footer'>
            <div className='title-links'>
              Quick Links
            </div>
            <div className='links'>
              <a href="#">Blog</a>
              <a href="#">Provacy Policy</a>
            </div>
          </div>

          <div className='links-footer'>
            <div className='title-links'>
              Contact Us
            </div>
            <div className='links'>
              <a href="#">contact@email.com</a>
              <a href="#">+1 999 9999 999</a>
            </div>
          </div>



        </div>
        <p>This website is designed by GTCoding Ⓒ 2022 and Developer by Mfkutz</p>
      </div>
    </footer>
  )
}

export default Footer