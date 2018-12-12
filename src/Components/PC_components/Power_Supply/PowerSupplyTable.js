import React, { Component } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/Pagination';
import { connect } from 'react-redux'
import { addPsu } from '../../../Ducks/Reducer'
import { withRouter } from 'react-router-dom'


class PowerSupplyTable extends Component {
  constructor(){
    super()
    this.state = {
      psu:[],
      currentPsus:[],
      currentPage:null,
      totalPages:null,
      asc: 'desc',
    }
  }
  componentDidMount(){
    axios.get('/api/power-supply').then(res=>{
      this.setState({psu:res.data})
    })
  }
  onPageChanged = data => {
    const {psu} = this.state
    const { currentPage, totalPages, pageLimit} = data

    const offSet = (currentPage - 1) * pageLimit
    const currentPsus = psu.slice(offSet, offSet + pageLimit)
    this.setState({currentPage, currentPsus, totalPages})
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
  compareNums(key,order = 'asc'){
    return function(a,b){
      let comparison = 0;
      let varA = parseInt(a[key]) ? parseInt(a[key]) : 0
      let varB = parseInt(b[key]) ? parseInt(b[key]) : 0
      if(varA > varB){
        comparison = 1;
      }else if(varA < varB){
        comparison = -1
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      )
    }
  }
  sortBy(key, type) {
    let arrayCopy = [...this.state.currentPsus];
    arrayCopy.sort(this.compareValues(key, type));
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentPsus: arrayCopy});
  }
  sortByNum(key, type){
    let arrayCopy = [...this.state.currentPsus]
    arrayCopy.sort(this.compareNums(key, type))
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentPsus: arrayCopy})
  }
  render() {
  const {
    psu      
  } = this.state;
  console.log(psu)
  const totalPsus = psu.length;

  if (totalPsus === 0) return null;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th onClick={()=>this.sortBy('cpuname', this.state.asc)}>
                Power SUpply {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortBy('operatingfrequency', this.state.asc)}>
                Form {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortByNum('cores', this.state.asc)}>
                Efficiency {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortByNum('thermaldesignpower', this.state.asc)}>
                Watts{this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortByNum('thermaldesignpower', this.state.asc)}>
                Modular{this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>

              <td>Rating</td>
              <td>Price</td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.currentPsus.map(e=>{
                return (
                  <tr key={e.psu__id}>
                    <td><input type="checkbox"/></td>
                    <td>{e.psu_name}</td>
                    <td>{e.type}</td>
                    <td>{e.efficiencycertification}</td>
                    <td>{e.wattage}</td>                  
                    <td>{e.modular}</td>
                    <td> </td>
                    <td> <button onClick={()=>this.props.addPsu(e.psu_name)}>Add</button> </td>
                  </tr>
                )
              })
            }
          </tbody>          
        </table>
        <div>
          <Pagination
                totalRecords={totalPsus}
                pageLimit={50}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
          />
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
export default withRouter(connect(mapState, {addPsu})(PowerSupplyTable))