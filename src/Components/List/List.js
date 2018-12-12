import React, { Component } from 'react'
import '../../styles/index.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

class List extends Component {
  constructor(){
    super()
    this.state = {
      expansion:false,
      per: false,
      accesories:false,
      compcase:0,
      cpu:0,
      cpuCooler:0,
      memory:0,
      motherboard:0,
      psu:0,
      storage:0,
      video_card:0
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
  componentDidMount(){
    if(this.props.list.cpu !== this.state.cpu){
      axios.get(`/api/cpu/${this.props.list.cpu}`).then(res=>{
        this.setState({cpu:res.data})
      })
    }
  }
  render() {
    console.log(this.props.list)    
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
            <p>Not Sure Where to start? check out our <span><a href='/#/guide'>build Guides!</a></span> </p>
          </div>
        </div>
        <div className='component-table'>
          <table>
            <tbody>
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
              <td>
                <Link to='/cpu'>
                {this.state.cpu === 0 ? 
                  (<button>
                  Choose a CPU
                  </button>  )
                  :                  
                    this.state.cpu[0].cpuname                  
                }
                  
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
              <td>CPU Cooler</td>
              <td>
                <Link to='/cpu-cooler'>
                  <button>
                    Choose a CPU Cooler
                  </button>
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
              <td>Motherboard</td>
              <td>
                <Link to='motherboard'>
                  <button>
                    Choose a Motherboard
                  </button>
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
              <td>Memory</td>
              <td>
                <Link to='/memory'>
                  <button>
                    Choose Memory 
                  </button>
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
              <td>Storage</td>
              <td>
                <Link to='/internal-storage'>
                  <button>
                    Choose Storage 
                  </button>
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
              <td>Video Card</td>
              <td>
                <Link to='/video-card'>
                  <button>
                    Choose a Video Card
                  </button>
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
              <td>
                <Link to='power-supply'>
                  <button>Choose a Power Supply</button>              
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
              <td>Optical Drive</td>
              <td>
                <Link to='optical'>
                  <button>Choose An Optical Drive </button>
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
              <td>Operating System</td>
              <td>
                <Link to='os'>
                  <button>Choose a Operating System </button>
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
              <td>Software</td>
              <td>
                <Link to='software'>
                  <button>Choose Software</button>
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
              <td>Monitor</td>
              <td>
                <Link to='monitor'>
                  <button>Choose a Monitor</button>
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
              <td>External Storage</td>
              <td>
                <Link to='external-storage'>
                  <button>Choose External Storage </button>
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
              <td>Expansion Cards / Networking</td>
              {expansion === false ? (
              <td>
                <button onClick={()=>this.handleExp()}>Add Expansion Cards / Networking...</button>
                <br/>	
                  Sound Cards, Wired Network Adapters, Wireless Network Adapters
              </td>
              ) : 
              <td className='three-btn'>
              <Link to='sound-card'>
                <button>Choose a Sound Card</button>
              </Link>
              <Link to='wired-network-card'>
                <button>Choose a Wired Network Adapter</button>
              </Link>
              <Link to='wireless-network-card'>
                <button>Choose a Wireless Network Adapter</button>
              </Link>
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
                <Link to='headphones'>
                  <button>Choose Headphones</button>
                </Link>
                <Link to='keyboard'>
                  <button>Choose a Keyboard</button>
                </Link>
                <Link to='mouse'>
                  <button>Choose a Mouse</button>
                </Link>
                <Link to='speakers'>
                  <button>Choose Computer Speakers</button>
                </Link>
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
                <Link to='case-fan'>
                  <button>Choose a Case Fan</button>
                </Link>
                <Link to='fan-controller'>
                  <button>Choose a Fan Countroller</button>
                </Link>
                <Link to='thermal-compound'>
                  <button>Choose Thermal Compound</button>
                </Link>
                <Link to='ups'>
                  <button>Choose a UPS</button>
                </Link>
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
              <td>
                <button>Add Custom Part</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
function mapState(state){
  let { list } = state
  return {
    list
  }
}
export default connect(mapState)(List)