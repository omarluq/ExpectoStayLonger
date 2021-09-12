import React from 'react'

class CreateReservation extends React.Component {
    
    constructor(props){
        super(props)
        this.state = this.props.reservation
        this.end = 'notallowed'
    }


    handleSubmit(e){
        e.preventDefault();
        if (this.state.guest_id){
            this.props.createReservation(this.state)} 
        else {
            this.props.openModal()
        }
    }


    handleChange(field) {
       
        return (
            e => {
                if (field === 'start_date'){
                    this.end = ""
                } else if (field === 'end_date') {
                    this.setTotalPrice(e)
                }
                let date = e.target.value.split('-')
                let mydate = new Date(date[0], date[1] - 1, date[2])
                this.setState({[field]: mydate})
            }
        )
    }


    componentDidUpdate(prevProps){
        if (this.props.reservation.guest_id !== prevProps.reservation.guest_id) this.setState({['guest_id']: this.props.reservation.guest_id});
    }

    setTotalPrice(e){
        let endDate = e.target.value.split('-')
        let myendDate = new Date(endDate[0], endDate[1] - 1, endDate[2])
        let diffrence = (myendDate.getTime() - this.state.start_date.getTime()) / (1000 * 3600 * 24)
        this.setState({['total_price']: diffrence * this.props.listingPrice })
    }


    render(){

        return (
            <form onSubmit={(e)=> this.handleSubmit(e)} className="resForm">
                <h4>Book this property</h4>
                <br />
                <div className="resDates">
                <label> Start Date: <br />
                    <input type="date" onChange={this.handleChange('start_date')} />
                </label>
                <br />
                <br />
                <label> End Date: <br />
                    <input className={this.end} type="date" onChange={this.handleChange('end_date')} />
                </label>
                <br />
                <br />
                <p>price: {this.props.listingPrice} Galleon / night</p>
                <br />
                <p>Total price: {this.state.total_price} Galleons</p>
                
                </div>
                <br />
                <button className="resButton">Reserve</button>
            </form>
        )
    }

    
}


export default CreateReservation
