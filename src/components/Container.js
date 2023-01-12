import React, { useContext } from 'react'
import UserContex from '../state/UserContex'
import Comp from './Comp'
import Spinner from './Spinner'
export default function Container() {
    const i = useContext(UserContex)
    console.log(typeof i.results)
    if(i.loading){
      console.log("in loading")
        return (
            <>
        <h1 className='font-bold flex lg:h-[1vh] sm:h-[52vh] justify-center mt-3 my-3 m-auto text-xl'>Available Domains Will Show Here</h1>
        <Spinner/>
            </>
    )}
    else if(i.results.length!==0){
  return (
    <div>

      <h1 className='FullFilled font-bold my-3 flex justify-center mt-3 text-xl'>Available Domains Will Show Here</h1> 
       {console.log("I am in the function")}
       {console.log(i.results)}
      { i.results.domain_available_response.map((elem,i)=>{
        console.log(elem)
        return <Comp key={elem.domain} exists={elem.domainAvailability} domain={elem.domain}/>
    })}  
    </div>
  )}
  else if (i.results.length==0){
    return(
    <div>
      <h1 className='Empty font-bold my-3 lg:h-[15vw] sm:h-[52vh] flex justify-center mt-3 m-auto text-xl'>Available Domains Will Show Here</h1> 
  
    </div>
  )}
  }

