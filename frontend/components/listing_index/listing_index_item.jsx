
import React from 'react'
import { Link } from 'react-router-dom'


const ListingItem = props => {
    let houseElf; 
    let owlFriendly;
    console.log();
    if (props.listing.house_elf) {
        houseElf = <p className="listingp">This listing comes with a staff of house elves</p>
    } else {
        houseElf = <p className="listingp">This listing doesnt come with house elves</p>
    }
    if (props.listing.owl_friendly) {
        owlFriendly = <p className="listingp">This listing welcomes your owls</p>
    } else {
        owlFriendly = <p className="listingp">Keep your owls home they are not welcome here</p>
    }
   
    return (
        <Link className="imglink" to={`/listing/${props.listing.id}`}>
        <div className="listingdiv">
            <div className="listingimg" >
            <img className="listing-img" src={props.listing.photos[0]} width="300" height="200" />
            </div>
            
        <li className="indlisting">
            <h4 >{props.listing.title}</h4>
            <br />
            {houseElf}
            {owlFriendly}
            <p className="listingp"> {props.listing.num_of_beds * 2} guests • {props.listing.num_of_beds} beds </p>
            <br />
            <address>
            {props.listing.street_address}, <br />
            {props.listing.city}, {props.listing.country}
            </address>
            <br />
            <p>{props.listing.price} Galleon / night</p>
        </li>
        </div>
        </Link>
    )
}


export default ListingItem