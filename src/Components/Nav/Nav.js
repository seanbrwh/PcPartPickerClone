import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles';
import guides from '../../Assets/guide.png'
import builds from '../../Assets/builds.png'
import wrench from '../../Assets/wrench.png'
import part from '../../Assets/part.png'
import search from '../../Assets/search.png'
import nav_case from '../../Assets/nav-case.png'
import nav_cpu from '../../Assets/nav-cpu.png'
import nav_cpu_cooler from '../../Assets/nav-cpucooler.png'
import nav_mem from '../../Assets/nav-memory.png'
import nav_mb from '../../Assets/nav-motherboard.png'
import nav_psu from '../../Assets/nav-powersupply.png'
import nav_ssd from '../../Assets/nav-ssd.png'
import nav_vid from '../../Assets/nav-videocard.png'


const StyledMenu = withStyles({
  paper:{  
    marginTop:'130px;',
    width:'100%',
    height:'350px',
    background:'rgb(37, 40, 53)'
  },
  
})(Menu)

class Nav extends Component{
  constructor(){
    super()
    this.state = {      
      anchorEl:null,    
    }    
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render(){    
    return (
      <nav>
        <div className="width">
          <div className='flex-spread'>
            <div className="flex-start">
              <div className="nav-item">
                <img id='wrench' src={wrench} alt=""/>
                <Link to='/list'>
                  <div className='nav-text'>
                    <span>
                      START A
                    </span>
                    <p>
                      System Build
                    </p>
                  </div>
                </Link>
              </div>
              <div className="nav-item">
              <img id='guide' src={guides} alt=""/>
              <Link to='/guide'>
                <div className='nav-text'>
                  <span>
                    VIEW THE
                  </span>
                  Build Guides
                </div>
              </Link>
              </div>
              <div className="nav-item">
              <img id='build' src={builds} alt=""/>
              <Link to='/build'>
                <div className='nav-text'>
                  <span>
                    SEE ALL
                  </span>
                  Completed Builds
                </div>
              </Link>
              </div>
              <div className="nav-item">
                <img id='part'  src={part} alt=""/>
                <div className='nav-text' 
                  aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}>
                  <span>
                    BROWSE BY
                  </span>
                    Individual Parts
                </div>
                <StyledMenu
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.handleClose}                            
                >
                  <div id='land-drawer'>
                    <div className="nav-pic-items">
                    <div className="nav-pic-row-1">
                    <Link to='cpu' onClick={this.handleClose}>
                      <div className='nav-img cpu-nav'>
                        <img src={nav_cpu} alt=""/>
                        <h3>CPU</h3>
                      </div>
                    </Link>
                    <Link to='cpu-cooler' onClick={this.handleClose}>
                      <div className='nav-img cpu-cooler-nav'>
                        <img src={nav_cpu_cooler} alt=""/>
                        <h3>CPU Cooler</h3>
                      </div>
                    </Link>
                    <Link to='motherboard' onClick={this.handleClose}>
                      <div className='nav-img motherboad-nav'>
                        <img src={nav_mb} alt=""/>
                        <h3>Motherboard</h3>
                      </div>
                    </Link>
                    <Link to='memory' onClick={this.handleClose}>
                      <div className='nav-img memory-nav'>
                        <img src={nav_mem} alt=""/>
                        <h3>Memory</h3>
                      </div>
                    </Link>
                    </div>
                    <div className="nav-pic-row-2">
                    <Link to='internal-storage' onClick={this.handleClose}>
                      <div className='nav-img storage-nav'>
                        <img src={nav_ssd} alt=""/>
                        <h3>Storage</h3>
                      </div>
                    </Link>
                    <Link to='video-card' onClick={this.handleClose}>
                      <div className='nav-img video-card-nav'>
                        <img src={nav_vid} alt=""/>
                        <h3>Video Card</h3>
                      </div>
                    </Link>
                    <Link to='power-supply' onClick={this.handleClose}>
                      <div className='nav-img psu-nav'>
                        <img src={nav_psu} alt=""/>
                        <h3>Power Supply</h3>
                      </div>
                    </Link>
                    <Link to='comp-case' onClick={this.handleClose}>
                      <div className='nav-img case-nav'>                        
                          <img src={nav_case} alt=""/>                          
                        <h3>Case</h3>
                      </div>
                    </Link>
                    </div>
                    </div>
                    <div className="dropdown-nav">
                      <div className="drop-col">
                          <h3>Cooling</h3>                          
                        <ul>
                          <li>Case Fans</li>
                          <li>Fan Controllers</li>
                          <li>Thermal Compound</li>
                        </ul>
                          <h3>Drives</h3>                          
                        <ul>
                          <li>Optical Drives</li>
                        </ul>
                          <h3>Expansion</h3>                          
                        <ul>
                          <li>Sound Cards</li>
                          <li>Wired Networking</li>
                          <li>Wireless Networking</li>
                        </ul>
                      </div>
                      <div className="drop-col">
                          <h3>Displays</h3>                          
                        <ul>
                          <li>Monitors</li>
                        </ul>
                          <h3>External Storage</h3>                          
                        <ul>
                          <li>External Hard Drives</li>
                        </ul>
                          <h3>Peripherals</h3>
                        <ul>
                          <li>Headphones</li>
                          <li>Keyboards</li>
                          <li>Mice</li>
                          <li>Speakers</li>
                          <li>Uninterruptable Power Supplies</li>
                        </ul>
                      </div>
                      <div className="drop-col">
                          <h3>Software</h3>                          
                        <ul>
                          <li>AntiVirus</li>
                          <li>Audio &amp; Vidoe</li>
                          <li>Backup</li>
                          <li>Design &amp; Illustrations</li>
                          <li>Internet Security</li>
                          <li>Office &amp; Productivity</li>
                          <li>Operating Systems</li>
                          <li>Photagraphy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </StyledMenu>
                <i className="fa fa-angle-down"></i>
              </div>
            </div>
            <div className="flex-end">
              <div className="end">
              <div>
                <p>Price Drops</p>
                <p>Forums</p>
              </div>
              <div>
                <p>Price Trends</p>
                <p>Blog </p>
              </div>
              </div>
              <div className="search-item">
                <img className='search-icon' src={search} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )

  }
}
export default withRouter(Nav)