import React from 'react'
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import mapboxgl from '!mapbox-gl'



class NewListing extends React.Component {



    constructor(props){
        super(props)
        this.state = this.props.listing
    }


    handleChange(field){
       return (e) => 
        this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcmx1cSIsImEiOiJja3RhOGt0N3UxanE2MnduMWNsNW9lMXdnIn0.EmKLSdfjJDUYIIW8wieFLw';
        const geocoder = mbxGeocoding({
            accessToken: mapboxgl.accessToken
        });


        // let getGioCode = geocoder.forwardGeocode({
        //     query: `${this.state.street_address}, ${this.state.city}`,
        //     limit: 1
        // }).send().then((response)=>{
        //     const match = response.body;
        //     const coordinates = match.features[0].geometry.coordinates;
        //     const placeName = match.features[0].place_name;
        //     const center = match.features[0].center


        //     return {
        //     type: 'feature',
        //     center: center,
        //     geometry: {
        //         type: "Point",
        //         coordinates: coordinates,
        //     },
        //     properties: {
        //         description: placeName,
        //     }
        //     }
        // }, [])


        let getGioCode = geocoder.forwardGeocode({
            query: `${this.state.street_address}, ${this.state.city}`,
            limit: 1
        })

        

        console.log(getGioCode);
        debugger
        e.preventDefault()
        this.setState({host_id: this.props.session.id})
        debugger
        this.props.createListing(this.state)
    }



    render(){

        return (

            <div className="new-listing-div">
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <br className="new-listing-form"/>
                <h4>Hey! listing a new Magical place?</h4>
                <br />
                <input type="text" value={this.state.title} onChange={this.handleChange('title')} placeholder="title" className="new-listing-form" />
                <br />
                <textarea value={this.state.description} onChange={this.handleChange('description')} placeholder="description" className="new-listing-form" cols="30" rows="10"></textarea>
                <br />
                <input type="text" value={this.state.street_address} onChange={this.handleChange('street_address')} placeholder="street address" className="new-listing-form" />
                <br />
                <input type="text" value={this.state.city} onChange={this.handleChange('city')} placeholder="city" className="new-listing-form" />
                <br />
                <input type="text" value={this.state.country} onChange={this.handleChange('country')} placeholder="country" className="new-listing-form" />
                <br />
                <input type="text" value={this.state.postcode} onChange={this.handleChange('postcode')} placeholder="postcode" className="new-listing-form" />
                <br />
                <input type="number" value={this.state.price} onChange={this.handleChange('price')} placeholder="price in galleons" className="new-listing-form" />
                <br />
                <input type="number" value={this.state.num_of_beds} onChange={this.handleChange('num_of_beds')} placeholder="number of beds" className="new-listing-form" />
                <br />
                <label> Comes with house elf ?
                <input type="checkbox" value={this.state.house_elf} onChange={this.handleChange('house_elf')} className="new-listing-form" />
                </label>
                <br />
                <label> Owl friendly?
                <input type="checkbox" value={this.state.owl_friendly} onChange={this.handleChange('owl_friendly')} className="new-listing-form" />
                </label>
                <br />
                <button>Finish</button>
            </form>
            </div>
        )
    }
}

export default NewListing
