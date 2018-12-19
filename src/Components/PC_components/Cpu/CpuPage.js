import React, { Component } from 'react'
import axios from 'axios'
import PageRating from '../../PageRating/PageRating'
import { connect } from 'react-redux'
import { addCpu } from '../../../Ducks/Reducer'
import { withRouter } from 'react-router-dom'

class CpuPage extends Component {
  constructor(){
    super()
    this.state = {
      cpu:[]
    }
  }
  componentDidMount(){
    axios.get(`/api/cpu/${this.props.match.params.id}`).then(res=>{
      this.setState({cpu:res.data})
    })
  }
  addCpu(id){
    this.props.addCpu(id)
    this.props.history.push('/list')
  }
  render() {
    console.log(this.state.cpu)
    return (
      <div>
        {this.state.cpu.map(e=>{
          return (
          <div id="cpu-page-header" key={e.cpu_id}>
            <p>CPU</p>
            <h1>{e.cpuname}</h1>
            <PageRating/>
            (Average / Number of Ratings)
          </div>
          )
        })}
        <div id='cpu-page-flex'>
          <div id='cpu-page-left'>
            <div id="cpu-page-item-con">
              <div id='cpu-img-con'>
                <img src="" alt="Item"/>
              </div>
              <div id='cpu-page-quan-add'>
                <label htmlFor="">Quanity</label>
                <select name="" id="">
                  <option value="1">1</option>
                </select>
                <p id='add-part' onClick={()=>this.addCpu(this.state.cpu.map(e=>e.cpu_id))}>Add to Part List</p>
              </div>
              <div id="save-add-fav">
              <div>
                <p>Save to Favorites</p>
              </div>
              <div>
                <p>Add to Inventory</p>
              </div>
              </div>
            </div>
            <div id='spec-block'>
              <h1>Specifications</h1>
              <hr/>
                {this.state.cpu.map(e=>{
                  return(
                  <ul key={e.cpu_id}>
                    <p>
                      Manufacturer
                    </p>
                      <li>                    
                        {e.manufacturer}
                      </li>
                    <p>
                      Part Number
                    </p>
                      <li>
                        {e.partnum}
                      </li>
                    <p>
                      Data Width
                    </p>
                      <li>
                      {e.datawidth}
                      </li>
                    <p>
                      Socket
                    </p>
                      <li>
                      {e.socket}
                      </li>
                    <p>
                      Operating Frequency
                    </p>
                      <li>
                      {e.operatingfrequency}
                      </li>
                    <p>
                      turbo Frequency
                    </p>
                      <li>
                      {e.turbofrequency}
                      </li>
                    <p>
                      Cores
                    </p>
                      <li>
                      {e.cores}
                      </li>
                    <p>
                      L1 Cache
                    </p>  
                      <li>
                      {e.l1cache} 
                      </li>
                    <p>
                      L2 Cache
                    </p>
                      <li>
                      {e.l2cache}
                      </li>
                    <p>
                      L3 Cache
                    </p>
                      <li>
                      {e.l3cache}
                      </li>
                    <p>
                      Lithography
                    </p>
                      <li>
                      {e.lithography}
                      </li>
                    <p>
                      TDP
                    </p>  
                      <li>
                      {e.thermaldesignpower}
                      </li>
                    <p>
                      Includes Cpu Cooler
                    </p>
                      <li>
                      {e.includescpucooler}
                      </li>
                    <p>
                      MultiThreading
                    </p>
                      <li>
                      {e.simultaneousmultithreading}
                      </li>
                    <p>
                      Integreated Graphics
                    </p>
                      <li>
                      {e.integratedgraphics}
                      </li>
                  </ul>
                )
              })}
            </div>
          </div>
          <div id='cpu-page-right'>
            
          </div>
        </div>
      </div>
    )
  }
}
function mapState(state){
  let {list} = state
  return {
    list
  }
}
export default withRouter(connect(mapState, {addCpu})(CpuPage))