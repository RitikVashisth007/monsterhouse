import React, { Component } from 'react'
import './Card-list.css'
import Cards from '../Cards/Cards'
import SearchBox from '../SearchBox/SearchBox'

class Card extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             user:[],
             searchUser:''

        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>Response.json()).then(data=>{this.setState({user:data})})

    }

    render() {
        const {user,searchUser} = this.state;
        const filterSearch = user.filter(user=>user.name.toLowerCase().includes(searchUser.toLowerCase()))


        return (
            <div>
              
              <SearchBox changeHandler={(e)=>this.setState({searchUser:e.currentTarget.value})}/>

            <div className="Card-list">
                
                {filterSearch.map(user=>(
                    <Cards  key={user.name} monster={user}/>
                ))}

                
            </div>
                   
            </div>
        )
    }
}

export default Card
