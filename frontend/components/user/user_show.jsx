
import React from 'react';
import {Link} from 'react-router-dom'

class ShowUser extends React.Component {


    constructor(props){
        super(props)
    }


    

    render(){
        if(!this.props.user) return null
        return (

            <div>
                
                <h1>Hi, I'm {this.props.user[this.props.match.params.userId].name}</h1>
                <button>
                    <Link to="/new/listing" >Add a new listing</Link>
                </button>

            </div>
        
        )
    }
}


export default ShowUser

