import React, { Component } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/Pagination';
import { connect } from 'react-redux'
import { addStorage } from '../../../Ducks/Reducer'
import { withRouter } from 'react-router-dom'


class IntStorageTable extends Component {
  constructor(){
    super()
    this.state = {
      intStorage:[],
      currentIntStorage:[],
      currentPage:null,
      totalPages:null,
      asc: 'desc',
    }
  }
  componentDidMount(){
    axios.get('/api/internal-storage').then(res=>{
      this.setState({intStorage:res.data})
    })
  }
  onPageChanged = data => {
    const {intStorage} = this.state
    const { currentPage, totalPages, pageLimit} = data

    const offSet = (currentPage - 1) * pageLimit
    const currentIntStorage = intStorage.slice(offSet, offSet + pageLimit)
    this.setState({currentPage, currentIntStorage, totalPages})
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
    const {
      intStorage,      
    } = this.state;
    console.log(intStorage)
    const totalIntStorage = intStorage.length;

    if (totalIntStorage === 0) return null;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th onClick={()=>this.sortBy('cpuname', this.state.asc)}>
                Storage {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortBy('operatingfrequency', this.state.asc)}>
                Form {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortByNum('cores', this.state.asc)}>
                Capcity {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortByNum('thermaldesignpower', this.state.asc)}>
                Cache {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>              
              <th onClick={()=>this.sortByNum('thermaldesignpower', this.state.asc)}>
                Price/GB {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>              
              <td>Rating</td>
              <td>Price</td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.currentIntStorage.map(e=>{
                return (
                  <tr key={e.int_storage_id}>
                  <td><input type="checkbox"/></td>
                  <td>{e.int_storage_name}</td>
                  <td>{e.formfactor}</td>
                  <td>{e.capacity}</td>
                  <td>{e.cache}</td>                  
                  <td>{e.pricepergb}</td>                  
                  <td> </td>
                  <td> </td>
                  <td> <button onClick={()=>this.props.addStorage(e.int_storage_name)}>Add</button> </td>
                  </tr>
                )
              })
            }
          </tbody>          
        </table>
        <div>
          <Pagination
                totalRecords={totalIntStorage}
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
export default withRouter(connect(mapState, {addStorage})(IntStorageTable))