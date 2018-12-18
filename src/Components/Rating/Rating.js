import React, { Component } from 'react'

export default class Rating extends Component {
  render() {
    return (
      <div>
        <i className='fas fa-star empty-star'></i>
        <i className='fas fa-star empty-star'></i>
        <i className='fas fa-star empty-star'></i>
        <i className='fas fa-star empty-star'></i>
        <i className='fas fa-star empty-star'></i>
        <span>(0)</span>
      </div>
    )
  }
}
