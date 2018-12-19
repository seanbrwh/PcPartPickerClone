import React, { Component } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/Pagination'
import { connect } from 'react-redux'
import { addMotherboard } from '../../../Ducks/Reducer'
import { withRouter, Link } from 'react-router-dom'
import Rating from '../../Rating/Rating'

class MotherboardTable extends Component {
  constructor(){
    super()
    this.state = {
      motherboard:[],
      currentMbs:[],
      currentPage:null, 
      totalPages:null,
      asc:'desc'
    }
  }
  componentDidMount(){
    axios.get('/api/motherboard').then(res=>{
      this.setState({motherboard:res.data})
    })
  }
  onPageChanged = data => {
    const {motherboard} = this.state
    const { currentPage, totalPages, pageLimit} = data

    const offSet = (currentPage - 1) * pageLimit
    const currentMbs = motherboard.slice(offSet, offSet + pageLimit)
    this.setState({currentPage, currentMbs, totalPages})
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
    let arrayCopy = [...this.state.currentMbs];
    arrayCopy.sort(this.compareValues(key, type));
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentCpus: arrayCopy});
  }
  sortByNum(key, type){
    let arrayCopy = [...this.state.currentMbs]
    arrayCopy.sort(this.compareNums(key, type))
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentMbs: arrayCopy})
  }
  addMotherboard(id){
    this.props.addMotherboard(id)
    this.props.history.push('/list')
  }
  render() {
    const {
      motherboard,      
    } = this.state;
    const totalMbs = motherboard.length;

    if (totalMbs === 0) return null;
    return (
      <div>
        <table className='table'>
          <thead className='table-head'>
            <tr>
              <th>&nbsp;</th>
              <th className='table-th' onClick={()=>this.sortBy('mb_name', this.state.asc)}>
                <p>
                Motherboard 
                </p>
                <div>
                  <span className='fa fa-angle-down angle-down'></span>
                  <span className='fa fa-angle-up angle-up'></span>
                </div>
              </th>                         
              <th onClick={()=>this.sortBy('mb_name', this.state.asc)}>
                <p>
                Cpu Socket 
                </p>
                <div>
                  <span className='fa fa-angle-down angle-down'></span>
                  <span className='fa fa-angle-up angle-up'></span>
                </div>
              </th>                         
              <th onClick={()=>this.sortBy('mb_name', this.state.asc)}>
                <p>
                Form Factor 
                </p>
                <div>
                  <span className='fa fa-angle-down angle-down'></span>
                  <span className='fa fa-angle-up angle-up'></span>
                </div>
              </th>                         
              <th onClick={()=>this.sortBy('mb_name', this.state.asc)}>
                <p>
                Ram Slots 
                </p>
                <div>
                  <span className='fa fa-angle-down angle-down'></span>
                  <span className='fa fa-angle-up angle-up'></span>
                </div>
              </th>                         
              <th onClick={()=>this.sortBy('mb_name', this.state.asc)}>
                <p>
                Max Ram 
                </p>
                <div>
                  <span className='fa fa-angle-down angle-down'></span>
                  <span className='fa fa-angle-up angle-up'></span>
                </div>
              </th>                         
              <td>Rating</td>
              <td>Price</td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.currentMbs.map(e=>{
                return (
                  <tr key={e.mb_id}>
                  <td><input type="checkbox"/></td>
                  <td>
                    <Link to={`/motherboard/${e.mb_id}`}>
                      {e.mb_name}
                    </Link>
                  </td>
                  <td>{e.cpusocket}</td>
                  <td>{e.formfactor}</td>
                  <td>{e.memoryslots}</td>                  
                  <td>{e.maximumsupportedmemory}</td>                  
                  <td> <Rating/></td>
                  <td> </td>
                  <td> <button onClick={()=> this.addMotherboard(e.mb_id)}>Add</button> </td>
                  </tr>
                )
              })
            }
          </tbody>          
        </table>
        <div>
          <Pagination
                totalRecords={totalMbs}
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
export default withRouter(connect(mapState, {addMotherboard})(MotherboardTable))