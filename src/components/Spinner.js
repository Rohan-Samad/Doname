import React, { Component } from 'react'
import spinner from './spinner.gif';
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center flex justify-center m-auto items-center h-[30vh] w-[90vw]'>
      
        <img src={spinner} className='w-28 h-28' alt="Loading" />
       
      </div>
    )
  }
}
