import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../Assets/pcpp.png'
import EmptyMail from '../../Assets/mail-empty-icon.png'
import Flag from '../../Assets/flag-usa.png'
import DownArrow from '../../Assets/dropdown-arrow.png'
import '../../styles/index.css'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='width'>
          <div className='header'>
          <Link to='/'>
            <img className='logo' src={Logo} alt=""/>
          </Link>
            <ul className='head-nav'>
                Welcome  
              <li>Sean_bw_89</li>|
              <li><img className='mail' src={EmptyMail} alt=""/> 0 </li>|
              <li>Inventory</li>|
              <li>Favorite Parts</li>|
              <li>Saved Part Lists</li>|
              <li>Log Out</li>|
              <li><img className='flag' src={Flag} alt=""/> United States <img className='down-arrow' src={DownArrow} alt=""/></li>  
            </ul>
          </div>          
        </div>          
      </header>
    )
  }
}
