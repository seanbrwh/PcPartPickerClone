import React, { Component } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/Pagination';
import { connect } from 'react-redux'
import { addCase } from '../../../Ducks/Reducer'
import { withRouter } from 'react-router-dom'



class CompCaseTable extends Component {
  constructor(){
    super()
    this.state = {
      c_case:[],
      currentCases:[],
      currentPage:null,
      totalPages:null,
      asc: 'desc',
    }
  }
  componentDidMount(){
    axios.get('/api/comp-case').then(res=>{
      this.setState({c_case:res.data})
    })
  }
  onPageChanged = data => {
    const {c_case} = this.state
    const { currentPage, totalPages, pageLimit} = data

    const offSet = (currentPage - 1) * pageLimit
    const currentCases = c_case.slice(offSet, offSet + pageLimit)
    this.setState({currentPage, currentCases, totalPages})
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
    let arrayCopy = [...this.state.currentCases];
    arrayCopy.sort(this.compareValues(key, type));
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentCases: arrayCopy});
  }
  sortByNum(key, type){
    let arrayCopy = [...this.state.currentCases]
    arrayCopy.sort(this.compareNums(key, type))
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentCases: arrayCopy})
  }  
  render() {
    console.log(this.state.c_case)
    const {
      c_case,      
    } = this.state;

    const totalCases = c_case.length;

    if (totalCases === 0) return null;

    return (      
      <div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th onClick={()=>this.sortBy('case_name', this.state.asc)}>
                Case {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortBy('case_type', this.state.asc)}>
                Type {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortByNum('ext5p25bays', this.state.asc)}>
                Ext. 5&frac14; {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortByNum('int3p5bays', this.state.asc)}>
                Int. 3&frac12; {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <th onClick={()=>this.sortBy('includespowersupply', this.state.asc)}>
                Power Supply {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
              <td>Rating</td>
              <td>Price</td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.currentCases.map(e=>{
                return (
                  <tr key={e.case_id}>
                  <td><input type="checkbox"/></td>
                  <td>{e.case_name}</td>
                  <td>{e.case_type}</td>
                  <td>{e.ext5p25bays === 'undefined' ? 0 : e.ext5p25bays}</td>
                  <td>{e.int3p5bays === 'undefined' ? 0 : e.int3p5bays}</td>
                  <td>{e.includespowersupply}</td>
                  <td> </td>
                  <td> </td>
                  <td> <button onClick={()=>this.props.addCase(e.case_name)}>Add</button> </td>
                  </tr>
                )
              })
            }
          </tbody>          
        </table>
        <div>
          <Pagination
                totalRecords={totalCases}
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
export default withRouter(connect(mapState, {addCase})(CompCaseTable))