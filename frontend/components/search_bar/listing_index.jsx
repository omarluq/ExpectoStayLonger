import { ThumbUpSharp } from '@material-ui/icons'
import React from 'react'
import ListingItem from './listing_index_item'
import Map from './map'



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
            <div className="stays" id="stays">
                
                <ul className="listings">
                <h4 className="wizarding">Stays in the wizarding world</h4>
                    {listings}
                </ul>
                < Map />
            </div>
        )
    }




}


export default ListingIndex