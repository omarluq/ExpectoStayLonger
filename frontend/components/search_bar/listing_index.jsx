import { ThumbUpSharp } from '@material-ui/icons'
import React from 'react'
import ListingItem from './listing_index_item'



class ListingIndex extends React.Component {

    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.fetchListings(this.props.match.params.city)
    }



    render(){
        // if (!this.props.listings) return null
        debugger
        let listings = this.props.listings.map(listing=> <ListingItem listing={listing} />)
        return (
            <>
            <h1>Welcome to listings</h1>
            <ul>
                {listings}
            </ul>
            </>
        )
    }




}


export default ListingIndex