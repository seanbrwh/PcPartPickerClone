import React, { Component } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/Pagination'
import { connect } from 'react-redux'
import { addCpuCooler } from '../../../Ducks/Reducer'
import { withRouter, Link } from 'react-router-dom'
import Rating from '../../Rating/Rating'

class CpuCoolerTable extends Component {
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
    let arrayCopy = [...this.state.cpuCooler];
    arrayCopy.sort(this.compareValues(key, type));
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentCpuCoolers: arrayCopy});
  }
  sortByNum(key, type){
    let arrayCopy = [...this.state.cpuCooler]
    arrayCopy.sort(this.compareNums(key, type))
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentCpuCoolers: arrayCopy})
  }
  addCpuCooler(id){
    this.props.addCpuCooler(id)
    this.props.history.push('/list')
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
        <table className='table'>
          <thead className='table-head'>
            <tr>
              <th>&nbsp;</th>
              <th className='table-th' onClick={()=>this.sortBy('cpu_cooler_name', this.state.asc)}>
              <p>
                Cpu Cooler 
              </p>
              <div>
                  <span className='fa fa-angle-down angle-down'></span>
                  <span className='fa fa-angle-up angle-up'></span>
                </div>
              </th>
              <th onClick={()=>this.sortBy('fanrpm', this.state.asc)}>
              <p>
                Fan RPM 
              </p>
              <div>
                  <span className='fa fa-angle-down angle-down'></span>
                  <span className='fa fa-angle-up angle-up'></span>
                </div>
              </th>
              <th onClick={()=>this.sortBy('noiselevel', this.state.asc)}>
              <p>
                Noise Level 
              </p>
              <div>
                  <span className='fa fa-angle-down angle-down'></span>
                  <span className='fa fa-angle-up angle-up'></span>
                </div>
              </th>
              <th>
                <p>
                  Rating                
                </p>
                <div>
                  <span className='fa fa-angle-down angle-down'></span>
                  <span className='fa fa-angle-up angle-up'></span>
                </div>
              </th>
              <th>
                <p>
                  Price
                </p>
              </th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.currentCpuCoolers.map(e=>{
                return (
                  <tr key={e.cpu_cooler_id}>
                  <td><input type="checkbox"/></td>
                  <td>
                    <Link to={`/cpu-cooler/${e.cpu_cooler_id}`}>
                      {e.cpu_cooler_name}
                    </Link>
                  </td>
                  <td>{e.fanrpm === 'undefined' ? '' : e.fanrpm}</td>
                  <td>{e.noiselevel === 'undefined' ? '' : e.noiselevel}</td>                                 
                  <td><Rating/> </td>
                  <td> </td>
                  <td> <button onClick={()=> this.addCpuCooler(e.cpu_cooler_id)}>Add</button> </td>
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
function mapState(state){
  let {list} = state
  return {
    list
  }
}
export default withRouter(connect(mapState, {addCpuCooler})(CpuCoolerTable))