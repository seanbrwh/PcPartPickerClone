import React, { Component } from 'react'
import axios from 'axios'
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


class Comp_case extends Component {
  constructor(){
    super()
    this.state = {
      comp_case:[],
      value:0,
      min: 1,
      max: 1930,
      rand:0
    }
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }
  componentDidMount(){
    axios.get('/api/comp-case').then(res=>{
      this.setState({comp_case:res.data})
    })
    this.rand()
  }
  rand(){
    let randNum = Math.random() * (999-20) + 20;
    this.setState({rand: Math.floor(randNum).toFixed(2)})
  }
  render() {
    const {value, min, max} = this.state;
    const {classes} = this.props;
    console.log(this.state.comp_case)
    return (
      <div>
        <div className="current-part-list-full">
          <div className='part-banner'>
            <h1>Choose A Case</h1>
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
            <table>
              <tbody>
                <tr>
                  <th>&nbsp;</th>
                  <th>Case</th>
                  <th>Type</th>
                  <th>Ext. 5&frac14;</th>
                  <th>Int. 3&frac12;</th>
                  <th>Power Supply</th>
                  <th>Rating</th>
                  <th>Price</th>
                  <th>&nbsp;</th>
                </tr>
                {this.state.comp_case.map(e=>{
                  return (
                  <tr>
                    <td><input type='checkbox'/></td>
                    <td>{e.case_name}</td>
                    <td>{e.case_type}</td>
                    <td></td>
                    <td>{e.int3p5bays}</td>
                    <td>{e.includespowersupply}</td>
                    <td></td>
                    <td>{this.state.rand}</td>
                    <td></td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>    
      </div>
    )
  }
}
Slider.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Comp_case)