import React, { Component } from 'react'
import axios from 'axios'

export default class Compc_caseTable extends Component {
  constructor(){
    super()
    this.state = {
      c_case:[],
      asc: 'desc'
    }
  }
  componentDidMount(){
    axios.get('/api/comp-case').then(res=>{
      this.setState({c_case:res.data})
    })
  }
  compareValues(key, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
  sortBy(key, type) {
    let arrayCopy = [...this.state.c_case];
    arrayCopy.sort(this.compareValues(key, type));
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({c_case: arrayCopy});
  }
  
  render() {
    console.log(this.props.manufacturer)
    return (
      <div>
        <div className="header">
          <div onClick={() => this.sortBy('case_name', this.state.asc)} >case Name {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}</div>
          <div onClick={() => this.sortBy('int3p5bays')}>int3p5bays</div>          
        </div>
        <div className="rows">
          {
            this.state.c_case.map(e=>{
              return (
              <div key={e.case_id}>
                <div>{e.case_name}</div>
                <div>{e.int3p5bays === 'undefined' ? '' : e.int3p5bays}</div>
              </div>)
            })
          }
        </div>
      </div>
    )
  }
}
