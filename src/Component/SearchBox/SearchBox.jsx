
import React from 'react'
import './SearchStyle.css'

const SearchBox =(props)=> {
    return (
        <div>
            <input className="search" type="search" placeholder="Search Monster" onChange={props.changeHandler}/>
        </div>
    )
}


export default SearchBox