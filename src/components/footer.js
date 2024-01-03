import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faImdb, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

    return(
        <div className='footer-container'>
            <span className='dev-warning'>Thanks for visiting my website! It is still currently under development and so you may encounter some issues. Feel free to contact me to let me know if you discover any pesky bugs!</span>
            <div className='socials-container'>
                <a className='socials-link' href='https://www.instagram.com/james_1290/' target="_blank"><FontAwesomeIcon className='socials-icon' icon={faInstagram} /></a>
                <a className='socials-link' href='https://www.linkedin.com/in/james-strachan-7a2a00178/' target="_blank"><FontAwesomeIcon className='socials-icon' icon={faLinkedin} /></a>
                <a className='socials-link' href='https://www.imdb.com/name/nm12343591/?ref_=fn_al_nm_3' target="_blank"><FontAwesomeIcon className='socials-icon' icon={faImdb} /></a>
                <a className='socials-link' href='https://github.com/jcstrachan' target="_blank"><FontAwesomeIcon className='socials-icon' icon={faGithub} /></a>
                <a className='socials-link' href='' target="_blank"><FontAwesomeIcon className='socials-icon' icon={faEnvelope} /></a>
            </div>
        </div>
    )
}