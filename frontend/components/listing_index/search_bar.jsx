import React from "react"
import SearchIcon from '@material-ui/icons/Search'
import {withRouter} from 'react-router'


class SearchBar extends React.Component{


    constructor(props){
        super(props)
        this.state = {city: ""}
    }



    redirect(){
        this.props.history.location.pathname = "/"
        this.props.history.replace(`listings/${this.state.city}`)
    }


    handleChange(e){
        this.setState({city: e.target.value})
    }





    render(){
        return (
            <form className ="search">
                <label className='searchlabel'> CheckIn
                    <br />
                    <input className="date" type="date" placeholder="Date" />
                </label>
                <label className='searchlabel'> Checkout
                    <br />
                    <input className="date" type="date" placeholder="Date"/>
                </label>
                <label className='searchlabel'>Location: 
                    <br />
                    <input onChange={(e)=>this.handleChange(e)} type="search" className="inputs" placeholder="city"/>
                </label>
                <button onClick ={()=>this.redirect()}><SearchIcon/></button>
            </form>
        )
    }
}


export default withRouter(SearchBar)