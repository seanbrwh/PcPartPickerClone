import React, { Component } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/Pagination'

export default class MotherboardTable extends Component {
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
    this.setState({currentCpus: arrayCopy})
  }
  render() {
    const {
      motherboard,      
    } = this.state;
    console.log(motherboard)
    const totalMbs = motherboard.length;

    if (totalMbs === 0) return null;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th onClick={()=>this.sortBy('mb_name', this.state.asc)}>
                Motherboard {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>                         
              <th onClick={()=>this.sortBy('mb_name', this.state.asc)}>
                Cpu Socket {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>                         
              <th onClick={()=>this.sortBy('mb_name', this.state.asc)}>
                Form Factor {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>                         
              <th onClick={()=>this.sortBy('mb_name', this.state.asc)}>
                Ram Slots {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>                         
              <th onClick={()=>this.sortBy('mb_name', this.state.asc)}>
                Max Ram {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
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
                  <td>{e.mb_name}</td>
                  <td>{e.cpusocket}</td>
                  <td>{e.formfactor}</td>
                  <td>{e.memoryslots}</td>                  
                  <td>{e.maximumsupportedmemory}</td>                  
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
