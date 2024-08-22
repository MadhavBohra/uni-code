import React from 'react'
import './Header.css'
import LeftArrowIcon from '../assets/icons/header/left-arrow-angle.png';
import RightArrowIcon from '../assets/icons/header/right-arrow-angle.png';


const Header = () => {
  return (
    <div>
        <div className='header-container'>
          <div className='header-left'>
            <button>Problem List</button>
            <img src={LeftArrowIcon} alt="Left Arrow" ></img>
            <img src={RightArrowIcon} alt="Roght Arrow" ></img>
          </div>

          <div>
            <button>Run</button>
            <button>Submit</button>
          </div>

          <div>Clock Timer</div>
        </div>
    </div>
  )
}

export default Header