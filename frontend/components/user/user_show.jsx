
import React from 'react';


class ShowUser extends React.Component {


    constructor(props){
        super(props)
    }


    

    render(){
        if(!this.props.user) return null
        return (

            <div>
                
                <h1>Hi, I'm {this.props.user[this.props.match.params.userId].name}</h1>
            </div>
        
        )
    }
}


export default ShowUser

