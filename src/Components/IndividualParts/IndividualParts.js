import React from 'react'
import {Link} from 'react-router-dom'

export default function IndividualParts() {
  return (
    <div id='ind-parts'>
    <div>
      Individual Parts
    </div>
      <div className='ind-parts'>
        <h2>Core</h2>
        <hr/>
        <ul>
          <Link to='/cpu'>
            <li>- CPUs</li>
          </Link>
          <Link to='/cpu-cooler'>
            <li>- CPU Coolers</li>
          </Link>
          <Link to='/motherboard'>
            <li>- Motherboards</li>
          </Link>
          <Link to='/memory'>
            <li>- Memory</li>
          </Link>
          <Link to='/internal-storage'>
            <li>- Storage</li>
          </Link>
          <Link to='/video-card'>
            <li>- Video Cards</li>
          </Link>
          <Link to='/comp-case'>
            <li>- Cases</li>
          </Link>
          <Link to='/power-supply'>
            <li>- Power Supplies</li>
          </Link>
          <Link to='/optical-drive'>
            <li>- Optical Drives</li>
          </Link>
          <Link to='/os'>
            <li>- Operating Systems</li>
          </Link>
          <Link to='/software'>
            <li>- Software</li>
          </Link>
          <Link to='/monitor'>
            <li>- Monitors</li>        
          </Link>
          <Link to='/external-storage'>
            <li>- External Storage</li>
          </Link>
        </ul>
      </div>
      <div className='ind-parts'>
        <h2>Expansion Cards / Networking</h2>
        <hr/>
        <ul>
          <Link to='/sound-card'>
            <li>- Sound Cards</li>
          </Link>
          <Link to='/wired-network'>
            <li>- Wired Network Adapters</li>
          </Link>
          <Link to='/wireless-network'>
            <li>- Wireless Network Adapters</li>
          </Link>
        </ul>
      </div>
      <div className='ind-parts'>
        <h2>Peripherals</h2>
        <hr/>
        <ul>
          <Link to='/'>
            <li>- Keyboards</li>
          </Link>
          <Link to='/'>
            <li>- Headphones</li>
          </Link>
          <Link to='/'>
            <li>- Mice</li>
          </Link>
          <Link to='/'>
            <li>- Speakers</li>
          </Link>
        </ul>
      </div>
      <div className='ind-parts'>
        <h2>Accessories / Other</h2>
        <hr/>
        <ul>
          <Link to='/'>
            <li>- Themarl Compound</li>
          </Link>
          <Link to='/'>
            <li>- Case Fans</li>
          </Link>
          <Link to='/'>
            <li>- Fan Controller</li>
          </Link>
          <Link to='/'>
            <li>- Ups Systems</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
