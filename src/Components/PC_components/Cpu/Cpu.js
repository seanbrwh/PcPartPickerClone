import React, { Component } from 'react'
import Slider from '@material-ui/lab/Slider'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import CpuTable from './CpuTable'

const styles = {
  root: {
    width: '80%',
    marginTop:'20px',
  },
  slider: {
    padding: '22px 0px',
  },
};


class Cpu extends Component {
  constructor(){
    super()
    this.state = {      
      value:0,
      min: 1,
      max: 1930,
      rand:0,
      manufacturer:''
    }
    this.handleCheck.bind(this)
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }
  handleCheck = (e) => {
    this.setState({manufacturer:e.target.value})
  }
  render() {
    const {value, min, max} = this.state;
    const {classes} = this.props;
    console.log(this.state.manufacturer)
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
              <div className={classes.root}>
              <h3>Price</h3>
                <div className='money-slider'>
                  ${this.state.value} - $1900
                </div>
                <Slider
                  classes={{container: classes.Slider}} 
                  min={min}
                  max={max}
                  value={value}
                  aria-labelledby="label"
                  onChange={this.handleChange}                                  
                />
              </div>
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
                <label htmlFor=""><input value='Corsair' name='Manufacturer' onChange={this.handleCheck} type="checkbox"/></label>
                <label htmlFor=""><input value='Thermaltake' name='Manufacturer' onChange={this.handleCheck} type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <label htmlFor=""><input type="checkbox"/></label>
                <span>Show All...</span>
              </div>
              <div className='comp-build-filter'>
                <h3>Color</h3>
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
                <h3>Type</h3>
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
              <div className={classes.root}>
                <div className='money-slider'>
                  ${this.state.value} - $1900
                </div>
                <Slider
                  classes={{container: classes.Slider}} 
                  min={min}
                  max={max}
                  value={value}
                  aria-labelledby="label"
                  onChange={this.handleChange}                                  
                />
              </div><div className={classes.root}>
                <div className='money-slider'>
                  ${this.state.value} - $1900
                </div>
                <Slider
                  classes={{container: classes.Slider}} 
                  min={min}
                  max={max}
                  value={value}
                  aria-labelledby="label"
                  onChange={this.handleChange}                                  
                />
              </div><div className={classes.root}>
                <div className='money-slider'>
                  ${this.state.value} - $1900
                </div>
                <Slider
                  classes={{container: classes.Slider}} 
                  min={min}
                  max={max}
                  value={value}
                  aria-labelledby="label"
                  onChange={this.handleChange}                                  
                />
              </div><div className={classes.root}>
                <div className='money-slider'>
                  ${this.state.value} - $1900
                </div>
                <Slider
                  classes={{container: classes.Slider}} 
                  min={min}
                  max={max}
                  value={value}
                  aria-labelledby="label"
                  onChange={this.handleChange}                                  
                />
              </div><div className={classes.root}>
                <div className='money-slider'>
                  ${this.state.value} - $1900
                </div>
                <Slider
                  classes={{container: classes.Slider}} 
                  min={min}
                  max={max}
                  value={value}
                  aria-labelledby="label"
                  onChange={this.handleChange}                                  
                />
              </div><div className={classes.root}>
                <div className='money-slider'>
                  ${this.state.value} - $1900
                </div>
                <Slider
                  classes={{container: classes.Slider}} 
                  min={min}
                  max={max}
                  value={value}
                  aria-labelledby="label"
                  onChange={this.handleChange}                                  
                />
              </div>
            </div>
          </div>
          <div className="case-col-right">
            <CpuTable
              manufacturer={this.state.manufacturer}
            />
          </div>
        </div>    
      </div>
    )
  }
}
Slider.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Cpu)