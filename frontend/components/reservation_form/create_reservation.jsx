import React from 'react'

class CreateReservation extends React.Component {
    
    constructor(props){
        super(props)
        this.state = this.props.reservation
    }


    handleSubmit(e){
        e.preventDefault();
        if (this.state.guest_id){
            debugger
            this.props.createReservation(this.state)} 
        else {
            this.props.openModal()
        }
    }


    handleChange(field) {
        return (
        e => (
        this.setState({[field]: e.target.value})))
    }


    render(){

        return (
            <form onSubmit={(e)=> this.handleSubmit(e)} className="resForm">
                <div className="resDates">
                <label> Start Date
                    <input type="date" value={this.state.start_date} onChange={this.handleChange('start_date')} />
                </label>
                <label> End Date
                    <input type="date" value={this.state.end_date} onChange={this.handleChange('end_date')} />
                </label>
                </div>
                <button className="resButton">Reserve</button>
            </form>
        )
    }

    
}


export default CreateReservation
