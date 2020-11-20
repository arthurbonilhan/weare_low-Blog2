import React from "react"
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti"
import LowTv from '../components/lowTv'

const Footer = () => {
  return (
    <footer id="footer">
          <LowTv/>
      <div className="container">
        <div className="footer-social">
          <div className="footer-social-text">Fique por dentro</div>
          <div className="footer-social-icons">
            <a
              target="_blank"
              href="https://twitter.com/"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="tw-icon">
                <TiSocialTwitter className="footer-social-icon" />
              </span>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCSfyxPI_IbIqLDH_zBl5Fhg"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="yt-icon">
                <TiSocialYoutube className="footer-social-icon" />
              </span>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/weare_low/"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="in-icon">
                <TiSocialInstagram className="footer-social-icon" />
              </span>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/wearelow"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="fb-icon">
                <TiSocialFacebook className="footer-social-icon" />
              </span>
            </a>
          </div>
        </div>
        <div className='footer-contato'>Contato: contato@wearelow.com.br</div>
        <div>© {new Date().getFullYear()} weare_low</div>
      </div>
    </footer>
  )
}
export default Footer
