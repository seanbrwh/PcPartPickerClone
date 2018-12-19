import React, { Component } from 'react'
import '../../styles/index.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Axios from 'axios';

class List extends Component {
  constructor(){
    super()
    this.state = {
      expansion:false,
      per: false,
      accesories:false,
      cpu:[],
      cpucooler:[],
      motherboard:[],
      memory:[],
      intStorage:[],
      video:[],
      compcase:[],
      psu:[]
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
    Axios.get(`/api/cpu/${this.props.list.cpu}`).then(res=>{
      this.setState({cpu:res.data})
    })
    Axios.get(`/api/cpu-cooler/${this.props.list.cpuCooler}`).then(res=>{
      this.setState({cpucooler:res.data})
    })
    Axios.get(`api/motherboard/${this.props.list.motherboard}`).then(res=>{
      this.setState({motherboard:res.data})
    })
    Axios.get(`/api/memory/${this.props.list.memory}`).then(res=>{
      this.setState({memory:res.data})
    })
    Axios.get(`/api/internal-storage/${this.props.list.storage}`).then(res=>{
      this.setState({intStorage:res.data})
    })
    Axios.get(`/api/video-card/${this.props.list.video_card}`).then(res=>{
      this.setState({video:res.data})
    })
    Axios.get(`/api/comp-case/${this.props.list.compcase}`).then(res=>{
      this.setState({compcase:res.data})
    })
    Axios.get(`/api/power-supply/${this.props.list.psu}`).then(res=>{
      this.setState({psu:res.data})
    })
    
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
            <p>Not Sure Where to start? check out our <span><a href='/#/guide'>build Guides!</a></span> </p>
          </div>
        </div>
        <div className='component-table'>
          <table>
            <tbody id='list-table'>
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
              <td>
                <Link to='/cpu'>
                  CPU
                </Link>
              </td>               
              <td>                
                {
                  this.props.list.cpu === 0 ? 
                  <button>
                    <Link to='/cpu'>
                      Choose a CPU
                    </Link>
                  </button>
                  :
                  <p>
                    <Link to={`/cpu/${this.state.cpu.map(e=>e.cpu_id)}`}>
                      {this.state.cpu.map(e=>e.cpuname)}
                    </Link>
                  </p>
                }                
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to='/cpu-cooler'>
                  CPU Cooler
                </Link>
              </td>
              <td>                
                {this.props.list.cpuCooler === 0
                ?
                  <button>
                    <Link to='/cpu-cooler'>
                      Choose a CPU Cooler
                    </Link>
                  </button>
                  :
                  <p>
                    <Link to={`/cpu-cooler/${this.state.cpucooler.map(e=>e.cpu_cooler_id)}`}>
                      {this.state.cpucooler.map(e=>e.cpu_cooler_name)}
                    </Link>
                  </p>              
                }                
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to='/motherboard'>
                  Motherboard
                </Link>
              </td>
              <td>                
                {this.props.list.motherboard === 0 
                ?
                  <button>
                    <Link to='/motherboard'>
                      Choose a Motherboard
                    </Link>
                  </button>
                  : 
                  <p>
                    <Link to={`/motherboard/${this.state.motherboard.map(e=>e.mb_id)}`}>
                      {this.state.motherboard.map(e=>e.mb_name)}
                    </Link>
                  </p>
                }                
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to='memory'>
                  Memory
                </Link>
              </td>
              <td>
                
                {this.props.list.memory === 0 
                ?
                  <button>
                    <Link to='/memory'>
                      Choose Memory 
                    </Link>
                  </button>
                :
                <p>
                  <Link to={`/memory/${this.state.memory.map(e=>e.mem_id)}`}>
                    {this.state.memory.map(e=>e.mem_name)}
                  </Link>
                </p>
                }
                
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to='/internal-storage'>
                  Storage
                </Link>
              </td>
              <td>
                {this.props.list.storage === 0 
                ?
                  <button>
                    <Link to='/internal-storage'>
                      Choose Storage 
                    </Link>
                  </button>
                  :
                  <p>
                    <Link to={`/internal-storage/${this.state.intStorage.map(e=>e.int_storage_id)}`}>
                      {this.state.intStorage.map(e=>e.int_storage_name)}
                    </Link>
                  </p>
                }
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to='/video-card'>
                  Video Card
                </Link>
              </td>
              <td>                
                {this.props.list.video_card === 0
                ?
                  <button>
                    <Link to='/video-card'>
                      Choose a Video Card
                    </Link>
                  </button>
                  :
                  <p>
                    <Link to={`/video-card/${this.state.video.map(e=>e.video_card_id)}`}>
                      {this.state.video.map(e=>e.video_card_name)}
                    </Link>
                  </p>
                }                
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
              <Link to='/comp-case'>
                Case
              </Link>
              </td>
              <td>                
                {this.props.list.compcase === 0
                ?
                <button>
                  <Link to='/comp-case'>
                    Choose a Case
                  </Link>
                </button>
                :                
                <p>
                  <Link to={`/comp-case/${this.state.compcase.map(e=>e.case_id)}`}>
                    {this.state.compcase.map(e=>e.case_name)}
                  </Link>
                </p>
                }                
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
              <Link to='power-supply'>
                Power Supply
              </Link>
              </td>
              <td>
                
                {this.props.list.psu === 0 
                ?
                <button>
                  <Link to='power-supply'>
                    Choose a Power Supply
                  </Link>
                </button>              
                :
                <p>
                  <Link to={`/power-supply/${this.state.cpu.map(e=>e.psu_id)}`}>
                    {this.state.psu.map(e=>e.psu_name)}
                  </Link>
                </p>
                }
                
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