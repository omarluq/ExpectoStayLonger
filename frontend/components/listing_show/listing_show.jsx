
import { Button } from '@material-ui/core'
import React from 'react'




class ListingShow extends React.Component{

    handleDelete(){
        this.props.deleteListing(this.props.match.params.listingId)
        this.props.history.push("/")
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId)
    }



    render(){
        if (!this.props.listing) return null
        let deleteButton;
        if (this.props.listing.host_id === this.props.session.id){
            deleteButton = <button onClick = {()=>this.handleDelete()}>Delete Listing</button>} 
            else {
            deleteButton = <div></div>
        }

       let photos = this.props.listing.photos.map(photo=> <img src= {photo} width='300' height="300" />)
            

        return (
            <div>
            {photos}
            <h4>{this.props.listing.title}</h4>
            <p>{this.props.listing.description}</p>
            <p>{this.props.listing.street_address}, {this.props.listing.city}, {this.props.listing.country}</p>
            <p>{this.props.listing.price} Galleon / night</p>
            {deleteButton}
            </div>
            
        )
    }
}
export default ListingShow