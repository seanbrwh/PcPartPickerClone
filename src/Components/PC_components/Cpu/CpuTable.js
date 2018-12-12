import React, { Component } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/Pagination';
import { connect } from 'react-redux'
import { addCpu } from '../../../Ducks/Reducer'
import { withRouter } from 'react-router-dom'

class CpuTable extends Component {
  constructor(){
    super()
    this.state = {
      cpu:[],
      currentCpus:[],
      currentPage:null,
      totalPages:null,
      asc: 'desc',
    }
  }
  componentDidMount(){
    axios.get('/api/cpu').then(res=>{
      this.setState({cpu:res.data})
    })
  }
  onPageChanged = data => {
    const {cpu} = this.state
    const { currentPage, totalPages, pageLimit} = data

    const offSet = (currentPage - 1) * pageLimit
    const currentCpus = cpu.slice(offSet, offSet + pageLimit)
    this.setState({currentPage, currentCpus, totalPages})
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
    let arrayCopy = [...this.state.currentCpus];
    arrayCopy.sort(this.compareValues(key, type));
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentCpus: arrayCopy});
  }
  sortByNum(key, type){
    let arrayCopy = [...this.state.currentCpus]
    arrayCopy.sort(this.compareNums(key, type))
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentCpus: arrayCopy})
  }
  render() {
    console.log(this.props.list)
    const {
      cpu,      
    } = this.state;
    console.log(cpu)
    const totalCpus = cpu.length;

    if (totalCpus === 0) return null;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th onClick={()=>this.sortBy('cpuname', this.state.asc)}>
                Cpu {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortBy('operatingfrequency', this.state.asc)}>
                Speed {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortByNum('cores', this.state.asc)}>
                Cores {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortByNum('thermaldesignpower', this.state.asc)}>
                TDP{this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>              
              <td>Rating</td>
              <td>Price</td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.currentCpus.map(e=>{
                return (
                  <tr key={e.cpu_id}>
                  <td><input type="checkbox"/></td>
                  <td>{e.cpuname}</td>
                  <td>{e.operatingfrequency}</td>
                  <td>{e.cores}</td>
                  <td>{e.thermaldesignpower}</td>                  
                  <td> </td>
                  <td> </td>
                  <td> <button onClick={() => this.props.addCpu(e.cpu_id)}>Add</button> </td>                  
                  </tr>
                )
              })
            }
          </tbody>          
        </table>
        <div>
          <Pagination
                totalRecords={totalCpus}
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

export default withRouter(connect(mapState, {addCpu})(CpuTable))