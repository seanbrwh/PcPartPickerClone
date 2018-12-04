import React, { Component } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/Pagination'

export default class CpuCoolerTable extends Component {
  constructor(){
    super()
    this.state = {
      cpuCooler:[],
      currentCpuCoolers:[],
      currentPage:null,
      totalPages:null,
      asc: 'desc',
    }
  }
  componentDidMount(){
    axios.get('/api/cpu-cooler').then(res=>{
      this.setState({cpuCooler:res.data})
    })
  }
  onPageChanged = data => {
    const {cpuCooler} = this.state
    const { currentPage, totalPages, pageLimit} = data

    const offSet = (currentPage - 1) * pageLimit
    const currentCpuCoolers = cpuCooler.slice(offSet, offSet + pageLimit)
    this.setState({currentPage, currentCpuCoolers, totalPages})
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
    let arrayCopy = [...this.state.currentCpuCoolers];
    arrayCopy.sort(this.compareValues(key, type));
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentCpus: arrayCopy});
  }
  sortByNum(key, type){
    let arrayCopy = [...this.state.currentCpuCoolers]
    arrayCopy.sort(this.compareNums(key, type))
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentCpus: arrayCopy})
  }
  render() {
    const {
      cpuCooler,      
    } = this.state;
    console.log(cpuCooler)
    const totalCpuCoolers = cpuCooler.length;

    if (totalCpuCoolers === 0) return null;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th onClick={()=>this.sortBy('cpu_cooler_name', this.state.asc)}>
                Cpu Cooler {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortBy('fanrpm', this.state.asc)}>
                Fan RPM {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortBy('noiselevel', this.state.asc)}>
                Noise Level {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th>Rating</th>
              <th>Price</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.currentCpuCoolers.map(e=>{
                return (
                  <tr key={e.cpu_cooler_id}>
                  <td><input type="checkbox"/></td>
                  <td>{e.cpu_cooler_name}</td>
                  <td>{e.fanrpm}</td>
                  <td>{e.noiselevel}</td>                                 
                  <td> </td>
                  <td> </td>
                  <td> <button>Add</button> </td>
                  </tr>
                )
              })
            }
          </tbody>          
        </table>
        <div>
          <Pagination
                totalRecords={totalCpuCoolers}
                pageLimit={50}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
          />
        </div>
      </div>
    )
  }
}
