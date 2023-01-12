import React, { useContext, useEffect, useState } from 'react'
import domain from './Pics/domain.png'
import bac from './Pics/bac.jpg'
import Container from './Container';
import UserContex from '../state/UserContex'

export default function Search() {
    const [searchValue, setSearchValue] = useState()
    const i = useContext(UserContex)
    
    const handleClick = (e) => {
        setSearchValue(e.target.value)
    }

    const searchSubmit = (e) => {
        e.preventDefault()
        i.setState(searchValue)
        i.loader(`${searchValue}`)
        setSearchValue('')
    }


    useEffect(() => {
        const str = "That's A free and Best Site That helps you to search The Available Domain Names Easily And Efficiently"
        const str1 = str.split(" ")
        let str2

        str1.forEach(elem => {
            if (elem !== "undefined") {
                str2 += `<div class='hover:-translate-y-2 ease-out mx-1 cursor-pointer hover:font-bold duration-300 flex hover:text-cyan-500'>${elem}</div> `
            }
        })
       
        let info = document.getElementById('info');
        let res = str2.replace(/undefined/, '')
        info.innerHTML = res


    }, [])

    return (
        <div>
            
            <div className="w-[98vw] p-11 mt-10 bg-cover " style={{ backgroundImage: `url(${bac})` }}>
                <div className=' hidden lg:flex justify-around'>
                    <div id='info' className='hidden lg:flex w-96 content-center flex-wrap text-white font-semibold'></div>
                    <div className=""><img src={domain} className='w-96 hover:scale-105 duration-300' alt="" /></div>
                </div>
                <div>
                    <form className="flex items-center flex-col">
                        <h1 className='text-white font-bold text-3xl mb-3'>Search Here</h1>
                        <div className='flex items-center '>
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-[80vw] ">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input onChange={handleClick} type="text" id="simple-search" className=" border relative z-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 bg-white focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-white  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a Domain Name" value={searchValue} required />
                            </div>
                            <button type="submit" onClick={searchSubmit} className="p-2.5 ml-2 text-sm font-medium text-white bg-cyan-500 rounded-lg border border-blue-700 hover:bg-white hover:text-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-500 dark:hover:bg-white dark:focus:ring-blue-800"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                        </div>
                    </form>

                </div>
            </div>
            <Container />
        </div>
    )
}
