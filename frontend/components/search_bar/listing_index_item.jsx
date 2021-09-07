
import React from 'react'
import { Link } from 'react-router-dom'


const ListingItem = props => {


    return (
        <li className="indlisting">
            <Link to={`/listing/${props.listing.id}`}>
            <h4>{props.listing.title}</h4>
            </Link>
            <p>{props.listing.description}</p>
            <p>{props.listing.street_address}, {props.listing.city}, {props.listing.country}</p>
            <p>{props.listing.price} Galleon / night</p>
        </li>
    )
}


export default ListingItem