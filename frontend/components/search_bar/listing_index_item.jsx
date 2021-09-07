
import React from 'react'



const ListingItem = props => {


    return (
        <li className="indlisting">
            <h4>{props.listing.title}</h4>
            <p>{props.listing.description}</p>
            <p>{props.listing.street_address}, {props.listing.city}, {props.listing.country}</p>
            <p>{props.listing.price} Galleon / night</p>
        </li>
    )
}


export default ListingItem