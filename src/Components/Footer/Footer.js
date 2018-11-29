import React from 'react'
import Pcpp from './pcpp.png'

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
              <li>System Builds</li>
              <li>Build Guides</li>
              <li>Completed Builds</li>
              <li>Individual Parts</li>
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
              <li>Discord</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitch</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
