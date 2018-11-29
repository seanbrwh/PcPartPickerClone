import React, { Component } from 'react'
import Slider from '@material-ui/lab/Slider'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';


const styles = {
  root: {
    width: '80%',
    marginTop:'20px',
  },
  slider: {
    padding: '22px 0px',
  },
};

class Guide extends Component {
  constructor(){
    super()
    this.state = {
      value:0,
      min: 1,
      max: 1930
    }
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }
  render() {
    const {classes} = this.props
    const {value,min,max} = this.state
    return (
      <div id="guide-page">      
        <div className="current-part-list-full color">
          <div className='part-banner'>
            <h1>PCPartPicker Build Guides</h1>
          </div>
        </div>
        <div className='guide-page'>
          <div className='guide-col-1'>
            <div className="guide-filter">
              <div className="create-build">
                <button>Create A Build</button>
              </div>
              <h2>Filters</h2>
              <hr/>
              Price
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
              </div>
              <div className='selector-guide'>
                <h3>TAG</h3>
                <label><input type="checkbox"/>All</label>
                <label><input type="checkbox"/>Desktop</label>                
                <label><input type="checkbox"/>Gaming</label>                
              </div>
              <div className='selector-guide'>
                <h3>CPU Manufacturer</h3>
                <label><input type="checkbox"/> ALL</label>                
                <label><input type="checkbox"/> AMD</label>                
                <label><input type="checkbox"/> Intel</label>                
              </div>
              <div className='selector-guide'>
                <h3>GPU Manufacturer</h3>
                <label><input type="checkbox"/> All</label>                 
                <label><input type="checkbox"/> AMD</label>                 
                <label><input type="checkbox"/> AMD (CPU Integrated)</label>                 
                <label><input type="checkbox"/> Intel (CPU Integrated)</label>                 
                <label><input type="checkbox"/> Nvidia</label>                
              </div>
            </div>
          </div>
          <div className='guide-col-2'>
            <div className="guide-col-2-content">
              <h2>Guides</h2>
              <hr/>
              <div className='guide-col-2-build'>
                  <div className='guide-col-img-con'>
                    <img src="" alt=""/>
                      <div>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                      </div>
                  </div>
                  <div className='build-text-con'>
                    <div className='build-text-con-2'>
                      <p>Featured</p>
                      <p>Staff</p>
                      <p>Desktop</p>
                      <p>Gaming</p>
                    </div>
                    <div className='build-name-price'>
                        <h3>Modest AMD Gaming Build</h3>
                        <p>$725.90</p>
                    </div>
                        <p>AMD Ryzen 5 2600</p>
                        <p>Parametric Video Card (Chipset: Radeon RX 580; Video RAM: 8 GB; Length: 223 mm - 403 mm)</p>
                        <p>Cooler Master MasterBox Q300L MicroATX Mini Tower</p>
                      <div className='user-build-con-vote'>
                        <div>
                          <p>by USER</p>  
                        </div>
                        <div>
                          <span><i className="fa fa-comment"></i>103</span>
                          <span><i className="fa fa-arrow-up"></i>25</span>
                        </div>
                      </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
Slider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Guide)