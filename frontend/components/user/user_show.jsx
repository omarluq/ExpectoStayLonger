
import { SignalCellularNullSharp } from '@material-ui/icons';
import React from 'react';
import {Link} from 'react-router-dom'
import ListingItem from "../listing_index/listing_index_item"

class ShowUser extends React.Component {


    constructor(props){
        super(props)
    }


    

    render(){
        if(!this.props.user) return SignalCellularNullSharp
        let listings = this.props.user[0].user_listing.map((listing, i) => <Link className="imglink" to={`/listing/${listing.id}`}>
                                                                            <li className='showlisting' key={`${listing} ${i}`} > 
                                                                                <div className="listingimg" >
                                                                                    <img className="listing-img" src={listing.photos[0]} width='250' height="200" />
                                                                                </div>
                                                                                <br /> 
                                                                                <h4>
                                                                                    {listing.title} 
                                                                                </h4>
                                                                            </li>  
                                                                            </Link> )
        
        

        return (

            <div className="usershow">
                
                <div className="userInfo">
                <h4 className="titles">
                    Hi {this.props.user[0].name} this is your profile info
                </h4>
                <p>
                    {this.props.user[0].bio}
                </p>
                </div>

                <ul className = "userlistings">
                    <h4 className="titles">Listings by you</h4>
                    {listings}
                    <button className="makenewlisting">
                    <Link className="user-link" to="/new/listing" >Add a new listing</Link>
                    </button>
                </ul>

                <ul className = "userlistings" >
                    <h4 className="titles">Reviews by you</h4>
                </ul>
                

            </div>
        
        )
    }
}


export default ShowUser

