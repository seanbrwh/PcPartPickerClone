import React, { Component } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/Pagination';

export default class Compc_caseTable extends Component {
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
  sortBy(key, type) {
    let arrayCopy = [...this.state.currentCases];
    arrayCopy.sort(this.compareValues(key, type));
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentCases: arrayCopy});
  }
  
  render() {
    console.log(this.state)
    const {
      c_case,
      currentCases,
      currentPage,
      totalPages
    } = this.state;

    const totalCases = c_case.length;

    if (totalCases == 0) return null;

    return (
      
      <div>
        <table>
          <thead>
            <tr>
              <th onClick={()=>this.sortBy('case_name', this.state.asc)}>
                Case {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.currentCases.map(e=>{
                return (
                  <tr key={e.case_id}>
                    {e.case_name}
                  </tr>
                )
              })
            }
          </tbody>
          <tfoot>
            <td>
              <h2>Total Cases {totalCases}</h2>
              <h2>Current Page {currentPage} / {totalPages}</h2>
            </td>
            <td>
              <Pagination
              totalRecords={totalCases}
              pageLimit={50}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
              />
            </td>
          </tfoot>
        </table>
      </div>
    )
  }
}
