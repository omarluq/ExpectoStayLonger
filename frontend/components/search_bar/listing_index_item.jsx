
import React from 'react'



const ListingItem = props => {


    return (
        <li>
            {props.listing.title}
            {props.listing.price}
        </li>
    )
}


export default ListingItem