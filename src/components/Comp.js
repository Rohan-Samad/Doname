import React, { useEffect } from 'react'

export default function Comp(props) {
  useEffect(()=>{
    console.log("I am in the Comp")
    console.log(props)

  },[])
  return (
    <div className='w-[60vw] border-2 p-4 border-cyan-500 m-auto my-4 rounded-lg'>
        <div className="flex justify-between items-center">
            <div className="">
        <h1 className='font-semibold'>{props.domain}</h1>
        {props.exists?<div className="text-green-500 text-[12px]">Succesfully This Domain is Available For You &#128525;</div>:<div className="text-red-500 text-[12px]">Unluckly That Domain Is in Use &#128543;</div>}
            </div>
        {props.exists?<div className="text-green-500 text-3xl">&#10003;</div>:<div className="text-red-500 text-3xl">&#10008;</div>}

        </div>
    </div>
  )
}
