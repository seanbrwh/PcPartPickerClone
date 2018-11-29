import React, { Component } from 'react'
import Slider from '@material-ui/lab/Slider'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';

const styles = {
  root: {
    width: '100%',
    marginTop:'20px',
  },
  slider: {
    padding: '2px 0px',
  },
};

class Build extends Component {
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
      <div>
        <div className="current-part-list-full color-2">
          <div className='part-banner'>
            <h1>Completed Builds</h1>
          </div>
        </div>
        <div className='comp-build-page'>
          <div className='comp-left-col'>
            <div className='comp-button'>
              <button>Create A Completed Build</button>
            </div>
            <div className="comp-build-filter">
              <h2>Filters</h2>
              <hr/>
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
                <h3>Published</h3>
                <select name="" id="">
                  <option value="">All</option>
                  <option value="">Past Day</option>
                  <option value="">Past Week</option>
                  <option value="">Pat Month</option>
                  <option value="">Past Year</option>
                </select>
              <div className='margin'>
                <div className='comp-filter-check'>
                  <h3>Featured Build</h3>
                    <label><input type="checkbox"/>All</label>
                    <label><input type="checkbox"/>Yes</label>
                    <label><input type="checkbox"/>No</label>
                </div>
                <div className='comp-filter-check'>
                  <h3>CPU</h3>
                    <label><input type="checkbox"/>All</label>
                    <label><input type="checkbox"/>Intel Core i5-4690k</label>
                    <label><input type="checkbox"/>Intel Core i5-6600k</label>
                    <label><input type="checkbox"/>Intel Core i7-4790K</label>
                    <label><input type="checkbox"/>Intel Core i7-6700k</label>
                    <label><input type="checkbox"/>Intel Core i7-7700k</label>
                    <span>Show All...</span>
                </div>
                <div className='comp-filter-check'>
                  <h3>CPU OverClocked</h3>
                    <label><input type="checkbox"/>All</label>
                    <label><input type="checkbox"/>Yes</label>
                    <label><input type="checkbox"/>No</label>
                </div>
                <div className='comp-filter-check'>
                  <h3>Cpu Cooler</h3>
                    <label><input type="checkbox"/>All</label>
                    <label><input type="checkbox"/>Stock</label>
                    <label><input type="checkbox"/>Cooler Master Hyper 212 EVO</label>
                    <label><input type="checkbox"/>Corsair H100i</label>
                    <label><input type="checkbox"/>Corsair H100i v2</label>
                    <label><input type="checkbox"/>Corsair H60</label>
                    <span>Show All...</span>
                </div>
                <div className='comp-filter-check'>
                  <h3>Video Card</h3>
                    <label><input type="checkbox"/>All</label>
                    <label><input type="checkbox"/>GeForce GTX 1060 6GB</label>
                    <label><input type="checkbox"/>GeForce GTX 1070</label>
                    <label><input type="checkbox"/>GeForce GTX 1080</label>
                    <label><input type="checkbox"/>GeForce GTX 1080Ti</label>
                    <label><input type="checkbox"/>GeForce GTX 970</label>
                    <span>Show All...</span>
                </div>
                <div className='comp-filter-check'>
                  <h3>SLI/CROSSFIRE</h3>
                    <label><input type="checkbox"/>All</label>
                    <label><input type="checkbox"/>2-Way CrossFire</label>
                    <label><input type="checkbox"/>2-Way SLI</label>
                    <label><input type="checkbox"/>3-Way CrossFire</label>
                    <label><input type="checkbox"/>3-Way SLI</label>
                    <label><input type="checkbox"/>Single GPU</label>
                    <span>Show All...</span>
                </div>
                <div className='comp-filter-check'>
                  <h3>Case</h3>
                    <label><input type="checkbox"/>All</label>
                    <label><input type="checkbox"/>Corsair 200R</label>
                    <label><input type="checkbox"/>Corsair Air 540</label>
                    <label><input type="checkbox"/>NZXT S340 (Black)</label>
                    <label><input type="checkbox"/>NZXT S340 (White)</label>
                    <label><input type="checkbox"/>NZXT S340 Elite (White)</label>
                    <span>Show All...</span>
                </div>
                <div className='comp-filter-check'>
                  <h3>Case Type</h3>
                  <label><input type="checkbox"/>All</label>
                  <label><input type="checkbox"/>ATX Full Tower</label>
                  <label><input type="checkbox"/>ATX Mid Tower</label>
                  <label><input type="checkbox"/>MicroATX Mid Tower</label>
                  <label><input type="checkbox"/>MicroATX Mini Tower</label>
                  <label><input type="checkbox"/>Mini ATX Tower</label>
                  <span>Show All...</span>
                </div>
              </div>              
            </div>
          </div>
          <div className='comp-right-col'>

          </div>
        </div>
      </div>
    )
  }
}
Slider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Build)