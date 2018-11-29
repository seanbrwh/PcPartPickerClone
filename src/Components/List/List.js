import React, { Component } from 'react'
import '../../styles/index.css'
import { Link } from 'react-router-dom'

export default class List extends Component {
  constructor(){
    super()
    this.state = {
      expansion:false,
      per: false,
      accesories:false
    }
  }
  handleExp(){    
    this.setState({expansion:!this.expansion})
  }
  handlePer(){    
    this.setState({per:!this.per})
  }
  handleAcc(){    
    this.setState({accesories:!this.accesories})
  }
  render() {
    const {expansion,per,accesories} = this.state
    return (
      <div>
        <div className="current-part-list-full">
          <div className='part-banner'>
            <h1>Current Part List</h1>
          </div>
        </div>
        <div className="check-build-guides">
          <div className='call-to-action'>
            <p>Not Sure Where to start? check out our <span>build Guides!</span> </p>
          </div>
        </div>
        <div className='component-table'>
          <table>
            <tr id='table-head'>
              <th id='component'>Component</th>
              <th id='selection'>Selection</th>
              <th id='base'>Base</th>
              <th id='promo'>Promo</th>
              <th id='shipping'>Shipping</th>
              <th id='tax'>tax</th>
              <th id='price'>Price</th>
              <th id='where'>Where</th>
            </tr>            
            <tr>
              <td>CPU</td>
              <td><button>Choose a CPU</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>CPU Cooler</td>
              <td><button>Choose a CPU Cooler</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Motherboard</td>
              <td><button>Choose a Motherboard</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Memory</td>
              <td><button>Choose Memory </button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Storage</td>
              <td><button>Choose Storage </button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Video Card</td>
              <td><button>Choose a Video Card</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Case</td>
              <td>
                <Link to='/comp-case'>
                  <button>Choose a Case</button>
                </Link>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Power Supply</td>
              <td><button>Choose a Power Supply</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Optical Drive</td>
              <td><button>Choose An Optical Drive </button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Operating System</td>
              <td><button>Choose a Operating System </button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Software</td>
              <td><button>Choose Software</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Monitor</td>
              <td><button>Choose a Monitor</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>External Storage</td>
              <td><button>Choose External Storage </button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>              
              <td>Expansion Cards / Networking</td>
              {expansion === false ? (
              <td>
                <button onClick={()=>this.handleExp()}>Add Expansion Cards / Networking...</button>
                <br/>	
                  Sound Cards, Wired Network Adapters, Wireless Network Adapters
              </td>
              ) : 
              <td className='three-btn'>
                <button>Choose a Sound Card</button>
                <button>Choose a Wired Network Adapter</button>
                <button>Choose a Wireless Network Adapter</button>
              </td>
            }
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>  
            </tr>
            <tr>
              <td>Peripherals</td>
              {per === false ? (<td><button onClick={()=>this.handlePer()}>Add Peripherals</button> <br/>
              Headphones, Keyboards, Mice, Speakers</td>) : (<td className='three-btn'>
                <button>Choose Headphones</button>
                <button>Choose a Keyboard</button>
                <button>Choose a Mouse</button>
                <button>Choose Computer Speakers</button>
              </td>)}
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Accessories / Other	</td>
              {accesories === false ? (<td><button onClick={()=>this.handleAcc()}>Add Accessories / Other...</button><br/>              	
              Case Fans, Fan Controllers, Thermal Compound, UPS Systems</td>) : (<td className='three-btn'>
                <button>Choose a Case Fan</button>
                <button>Choose a Fan Countroller</button>
                <button>Choose Thermal Compound</button>
                <button>Choose a UPS</button>
              </td>) }
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Custom</td>
              <td><button>Add Custom Part</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}
