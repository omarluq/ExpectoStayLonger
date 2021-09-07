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
        let listings = this.props.listings.map(listing=> <ListingItem listing={listing} />)
        return (
            <div className="stays">
                <h4 className="wizarding">Stays in the wizarding world</h4>
            <ul className="listings">
                {listings}
            </ul>
            </div>
        )
    }




}


export default ListingIndex