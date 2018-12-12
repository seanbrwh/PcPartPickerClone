import React, { Component } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/Pagination';
import { connect } from 'react-redux'
import { addMemory } from '../../../Ducks/Reducer'
import { withRouter } from 'react-router-dom'

class MemoryTable extends Component {
  constructor(){
    super()
    this.state = {
      memory:[],
      currentMemory:[],
      currentPage:null,
      totalPages:null,
      asc: 'desc',
    }
  }
  componentDidMount(){
    axios.get('/api/memory').then(res=>{
      this.setState({memory:res.data})
    })
  }
  onPageChanged = data => {
    const { memory } = this.state
    const { currentPage, totalPages, pageLimit} = data

    const offSet = (currentPage - 1) * pageLimit
    const currentMemory = memory.slice(offSet, offSet + pageLimit)
    this.setState({currentPage, currentMemory, totalPages})
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
    let arrayCopy = [...this.state.currentMemory];
    arrayCopy.sort(this.compareValues(key, type));
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentMemory: arrayCopy});
  }
  sortByNum(key, type){
    let arrayCopy = [...this.state.currentMemory]
    arrayCopy.sort(this.compareNums(key, type))
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentMemory: arrayCopy})
  }
  render() {
    const {
      memory,      
    } = this.state;
    console.log(memory)
    const totalMemory = memory.length;

    if (totalMemory === 0) return null;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th onClick={()=>this.sortBy('cpuname', this.state.asc)}>
                Memory {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortBy('operatingfrequency', this.state.asc)}>
                Speed {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortByNum('cores', this.state.asc)}>
                Type {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortByNum('thermaldesignpower', this.state.asc)}>
                CAS{this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>                                          
              <th onClick={()=>this.sortByNum('thermaldesignpower', this.state.asc)}>
                Size{this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>              
              <th onClick={()=>this.sortByNum('thermaldesignpower', this.state.asc)}>
                Price/GB{this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>              
              <td>Rating</td>
              <td>Price</td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.currentMemory.map(e=>{
                return (
                  <tr key={e.mem_id}>
                  <td><input type="checkbox"/></td>
                  <td>{e.mem_name}</td>
                  <td>{e.speed}</td>
                  <td>{e.mem_type}</td>
                  <td>{e.caslatency}</td>                  
                  <td>{e.size}</td>                  
                  <td>{e.pricepergb}</td>                  
                  <td> </td>
                  <td> </td>
                  <td> <button onClick={()=>this.props.addMemory(e.mem_name)}>Add</button> </td>
                  </tr>
                )
              })
            }
          </tbody>          
        </table>
        <div>
          <Pagination
                totalRecords={totalMemory}
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
  let {list} = state
  return {
    list
  }
}
export default withRouter(connect(mapState, {addMemory})(MemoryTable))