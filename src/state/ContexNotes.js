import React, { useState } from 'react'
import UserContex from './UserContex'

export default function ContexNotes(props) {
    const [state, setState] = useState()
    const[loading,setLoading]=useState(false)
    const [results,setResults]=useState([])  

    const loader =async (domain) => {
        setResults([])
        setLoading(true)
        if(!domain.includes('.')){
            domain= domain.concat('.com')
        }
        try{
         const url =`https://api.whoisfreaks.com/v1.0/domain/availability?apiKey=ce352caf23de444dab94160ab70580f3&domain=${domain}&sug=true&count=10`
         const response = await fetch(url)
         const data =await response.json();
         setLoading(false)
       console.log(data)
         setResults(data)
        }catch(err){
            setLoading(false)
        }
    }

    return (
        <div>
            <UserContex.Provider value={{ state, setState, results, loader ,loading }}>
                {props.children}
            </UserContex.Provider>
        </div>
    )
}
