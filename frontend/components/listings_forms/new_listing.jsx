import React from 'react'

class NewListing extends React.Component {



    constructor(props){
        super(props)
        this.state = this.props.listing
    }


    handleChange(field){
        (e) => 
        this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({host_id: this.props.session.id})
        this.props.createListing(this.state)
    }



    render(){

        return (
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <br />
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
                <input type="checkbox" value={this.state.house_elf} onChange={this.handleChange('house_elf')}className="new-listing-form" />
                </label>
                <br />
                <label> Owl friendly?
                <input type="checkbox" value={this.state.owl_friendly} onChange={this.handleChange('owl_friendly')} className="new-listing-form" />
                </label>
                <br />
                <button>Finish</button>
            </form>
        )
    }
}

export default NewListing

