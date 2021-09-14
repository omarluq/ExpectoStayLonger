import React from 'react'

class CreateReview extends React.Component {


    constructor(props){
        super(props)
        this.state = this.props.review
    }

    handleChange(field){
        
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createReview(this.state)
        this.setState({["body"]: '', ["rating"]: ''})
        this.props.fetchListing(this.props.match.params.listingId)
    }

    render(){
        return (
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <h4>Leave a Review</h4>
                <label> Give it a rating
                    <select onChange={this.handleChange('rating')}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </label>
                <textarea value={this.state.body} onChange={this.handleChange('body')}></textarea>
                <button>Submit</button>
            </form>
        )
    }
}

export default CreateReview