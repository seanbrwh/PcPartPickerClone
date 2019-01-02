import React from 'react'
import Pcpp from '../../Assets/pcpp.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="width footer">
        <div id='copy'>
          <img className='foot-img' src={Pcpp} alt=""/>
          <p>&copy;2018 PCPartPicker, LLC. All rights reserved.</p>
          <span>Switch To Mobile Version</span>
        </div>
        <div className='foot-nav'>
          <div className="sections">
            <h3>Sections</h3>
            <ul>
              <Link to='/list'>
                <li>System Builds</li>
              </Link>
              <Link to='/guide'>
                <li>Build Guides</li>
              </Link>
              <Link to='/build'>
                <li>Completed Builds</li>
              </Link>
              <Link to='/indvidual-parts'> 
                <li>Individual Parts</li>
              </Link>
            </ul>
          </div>
          <div className="sections">
            <h3>PCPP</h3>
            <ul>
              <li>Forums</li>
              <li>Price Drops</li>
              <li>Price Trends</li>
              <li>PCPP Blog</li>
            </ul>
          </div>
          <div className="sections">
            <h3>PCPP</h3>
            <ul>
              <li>About</li>
              <li>Contact &amp; Imprint</li>
              <li>Terms Of Service</li>
              <li>User Code Of Conduct</li>
              <li>Industry Code Of Conduct</li>
              <li>Privacy Policy</li>
              <li>Disclosure</li>
            </ul>
          </div>
          <div className="sections">
            <h3>Elsewhere</h3>
            <ul>
              <a href="https://discordapp.com/invite/pcpartpicker">
                <li>Discord</li>
              </a>   
              <a href="https://www.facebook.com/pcpartpicker">
                <li>Facebook</li>
              </a>
              <a href="https://www.instagram.com/pcpartpicker/">
                <li>Instagram</li>
              </a>
              <a href="https://www.twitch.tv/pcpartpicker">
                <li>Twitch</li>
              </a>
              <a href="https://twitter.com/pcpartpicker">
                <li>Twitter</li>
              </a>
              <a href="https://www.youtube.com/user/pcpartpicker">
                <li>YouTube</li>
              </a>           
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
