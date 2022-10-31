import React from 'react'
import BRY from '../../assets/Bry.jpg'
import './Header.css'

function Header() {

  return (
    <div className="me">
        <img id="profile__img" src={BRY} alt="Breezy" />
    </div>
  )
}

export default Header