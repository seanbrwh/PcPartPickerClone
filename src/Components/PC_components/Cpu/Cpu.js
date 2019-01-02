import React, { Component } from 'react'
import CpuTable from './CpuTable'
import 'rheostat/initialize';



class Cpu extends Component {
  constructor(props){
    super(props)
    this.state = {      
      min: 2,
      max: 32,
      valueOne: 2, 
      ValueTwo: 32,
      rand:0,
      cores:undefined
    }
    
  }
  handleChange = (e) => {
    console.log(e.target)
  }
  handleCheck = (e) => {
    this.setState({cores:e.target.value})
  }
  render() {
    return (
      <div>
        <div className="current-part-list-full">
          <div className='part-banner'>
            <h1>Choose A Cpu</h1>
          </div>
        </div>
        <div className='case-page'>
          <div className="case-col-left">
            <div className="case-filter">
              <h2>Filters</h2>
              <hr/>
              <h2>Merchants / Pricing</h2>
              <label><input type="checkbox"/>Include Mail In Rebates</label>
              <label><input type="checkbox"/>Use Amazon Smile Links</label>
              <span>Show Merchants...</span>              
              <div className='comp-build-filter'>
                <h3>Rating</h3>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
              </div>
              <div className='comp-build-filter'>
                <h3>Manufacturer</h3>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <span>Show All...</span>
              </div>
              <div className='comp-build-filter'>
                <h3>Series</h3>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <span>Show All...</span>
              </div>
              <div className='comp-build-filter'>
                <h3>Cores</h3>
                <label htmlFor=""><input value='2' name='Manufacturer' onChange={this.handleCheck} type="checkbox"/> 2</label>
                <label htmlFor=""><input value='4' name='Manufacturer' onChange={this.handleCheck} type="checkbox"/> 4</label>
                <label htmlFor=""><input value='6' name='Manufacturer' onChange={this.handleCheck} type="checkbox"/> 6</label>
                <label htmlFor=""><input value='8' name='Manufacturer' onChange={this.handleCheck} type="checkbox"/> 8</label>
                <label htmlFor=""><input value='10' name='Manufacturer' onChange={this.handleCheck} type="checkbox"/> 10</label>
                <label htmlFor=""><input value='12' name='Manufacturer' onChange={this.handleCheck} type="checkbox"/> 12</label>                
                <label htmlFor=""><input value='16' name='Manufacturer' onChange={this.handleCheck} type="checkbox"/> 16</label>                
                <label htmlFor=""><input value='18' name='Manufacturer' onChange={this.handleCheck} type="checkbox"/> 18</label>                
                <label htmlFor=""><input value='32' name='Manufacturer' onChange={this.handleCheck} type="checkbox"/> 32</label>                
                <span>Show All...</span>
              </div>              
              
              <div className='comp-build-filter'>
                <h3>Power Supply</h3>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
              </div>
              <div className='comp-build-filter'>
                <h3>Side Panel Window</h3>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
              </div>
              <div className='comp-build-filter'>
                <h3>Front Panel USB 3.0</h3>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
              </div>
              <div className='comp-build-filter'>
                <h3>MotherBoard Form Factors</h3>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
              </div>              
            </div>
          </div>
          <div className="case-col-right">
            <CpuTable
              cores={this.state.cores}
            />
          </div>
        </div>    
      </div>
    )
  }
}
export default (Cpu)