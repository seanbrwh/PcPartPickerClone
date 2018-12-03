import React, { Component } from 'react'
import Pagination from '../Pagination/Pagination'
import axios from 'axios'

export default class Case_Fan extends Component {
  constructor(){
    super()
    this.state = {
      case_Fan:[],
      currentFans:[],
      currentPage:null,
      totalPage:null,
      asc: 'desc'
    }
  }
  componentDidMount(){
    axios.get('/api/case-fan').then(res=>{
      this.setState({case_Fan:res.data})
    })
  }
  onPageChanged = data => {
    const {case_Fan} = this.state
    const { currentPage, totalPages, pageLimit} = data

    const offSet = (currentPage - 1) * pageLimit
    const currentFans = case_Fan.slice(offSet, offSet + pageLimit)
    this.setState({currentPage, currentFans, totalPages})
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
    let arrayCopy = [...this.state.currentFans];
    arrayCopy.sort(this.compareValues(key, type));
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentFans: arrayCopy});
  }
  sortByNum(key, type){
    let arrayCopy = [...this.state.currentFans]
    arrayCopy.sort(this.compareNums(key, type))
    this.state.asc === 'asc' ? this.setState({asc:'desc'}) : this.setState({asc:'asc'})
    this.setState({currentFans: arrayCopy})
  }  

  render() {
    console.log(this.state.case_Fan)
    const { case_Fan } = this.state;

    const totalcase_fans = case_Fan.length;

    if (totalcase_fans === 0) return null;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th onClick={()=>this.sortBy('case_fan_name', this.state.asc)}>
                Case Fan{this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>                           
              <th onClick={()=>this.sortBy('color', this.state.asc)}>
                Color {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>                           
              <th onClick={()=>this.sortBy('size', this.state.asc)}>
                Size {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>                           
              <th onClick={()=>this.sortBy('rpm', this.state.asc)}>
                RPM {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>                           
              <th onClick={()=>this.sortBy('airflow', this.state.asc)}>
                AirFlow {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>                           
              <th onClick={()=>this.sortBy('noiselevel', this.state.asc)}>
                Noise level {this.state.asc === 'asc'  ? (<i className="fa fa-arrow-down"></i>) : (<i className="fa fa-arrow-up"></i>)}
              </th>                           
            </tr>
          </thead>
          <tbody>
            {
              this.state.currentFans.map(e=>{
                return (
                  <tr key={e.case_fan_id}>
                    <td><input type="checkbox"/></td>
                    <td>{e.case_fan_name}</td>
                    <td>{e.color}</td>
                    <td>{e.size}</td>
                    <td>{e.rpm}</td>
                    <td>{e.airflow}</td>
                    <td>{e.noiselevel}</td>
                  </tr>
                )
              })
            }
          </tbody>          
        </table>
        <div>
          <Pagination
                totalRecords={totalcase_fans}
                pageLimit={50}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
          />
        </div>
      </div>
    )
  }
}
