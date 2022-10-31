import React from 'react'
import BRY from '../../assets/Bry.jpg'
import './Header.css'
import {RiShareForwardLine} from 'react-icons/ri'

function Header() {

  return (
    <div className="header">
        <img className="profile__img" src={BRY} alt="Breezy" />
        <p>Bryson Nyamwange</p>
        <RiShareForwardLine className="share-bar"/>
    </div>
  )
}

export default Header