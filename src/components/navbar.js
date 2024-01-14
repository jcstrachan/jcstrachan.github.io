import './navbar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

  const nav = useNavigate();
  const loc = useLocation();

  const [active, setActive] = useState('')

  useEffect(() => {
    setActive(loc.pathname.split('/')[1])
  }, [])

  const navigate = (link) => {
    nav(`${link}`);
    setActive(link);
  } 

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {setShowDropdown(!showDropdown)};

  return (
    <>
      <div className="nav-container">
        <div className="name-title" onClick={() => navigate('/')}>
            <span className='name'>James Strachan</span>
            <span className='sub-title'>Cinematography - Editing - Software</span>
        </div>

        {/* Nav Bar */}
        <div className="nav-buttons">
            <button className={`${active === "work" ? 'nav-button active-nav' : 'nav-button'}`} onClick={() => navigate('work')}>Work</button>
            {/* <button className={`${active === "about" ? 'nav-button active-nav' : 'nav-button'}`} onClick={() => navigate('about')}>About</button> */}
            <button className={`${active === "contact" ? 'nav-button active-nav' : 'nav-button'}`} onClick={() => navigate('contact')}>Contact</button>
        </div>

        {/* Nav Dropdown */}
        <button className="dropdown-button" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} size='xl'/>
        </button>
      </div>
      {showDropdown &&(
        <div className='nav-dropdown'>
          <button className='dropdown-nav-button' onClick={() => navigate('/work')}>Work</button>
          <button className='dropdown-nav-button' onClick={() => navigate('/contact')}>Contact</button>
        </div>
      )}
    </>
  );
}