import React from 'react'
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

class CreateReservation extends React.Component {
    
    constructor(props){
        super(props)
        this.state = this.props.reservation
        this.dateRange = []
        this.setDateRange()
    }


    setDateRange(){
        let that = this 
        this.props.bloackedDates.forEach((range)=>{
            let start = new Date(range[0])
            let end = new Date(range[1])
            let diff = (end.getTime() - start.getTime())/ (1000 * 3600 * 24) 
            for (let i=0; i <= diff; i++){
                let temp = `${start.getFullYear()}/${start.getMonth() + 1}/${start.getDate() + 1}`
                that.dateRange.push(start)
                start = new Date(temp)
            }     
        })
    }


    handleSubmit(e){
        e.preventDefault();
        if (this.state.guest_id){
            this.props.createReservation(this.state)} 
        else {
            this.props.openModal()
        }
    }


   


    componentDidUpdate(prevProps){
        if (this.props.reservation.guest_id !== prevProps.reservation.guest_id) this.setState({['guest_id']: this.props.reservation.guest_id});
    }

    setTotalPrice(){
        let diffrence = (this.state.end_date.getTime() - this.state.start_date.getTime()) / (1000 * 3600 * 24)
        this.setState({['total_price']: diffrence * this.props.listingPrice })
    }

    handleDate(e){
        let {startDate, endDate} = e.selection
        this.setState({['start_date']: startDate, ['end_date']: endDate }, ()=>this.setTotalPrice())
    }


    render(){
        let selectionRange;
        if (this.state.start_date === ""){
            selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'}
        } else if (this.state.start_date !== "" && this.state.end_date === "") {
            selectionRange = {
            startDate: this.state.start_date,
            endDate: new Date(),
            key: 'selection'} 
        } else if (this.state.end_date !=='') {
            selectionRange = {
            startDate: this.state.start_date,
            endDate: this.state.end_date,
            key: 'selection'}
        }

        return (
            <form onSubmit={(e)=> this.handleSubmit(e)} className="resForm">
                <h4>Book this property</h4>
                <br />
                <div className="resDates">
                 <DateRange
                    ranges={[selectionRange]}
                    onChange={(e)=>this.handleDate(e)}
                    editableDateInputs={true}
                    showSelectionPreview={true}
                    months={1}
                    direction="vertical"
                    showDateDisplay={false}
                    showMonthAndYearPickers={true}
                    minDate={new Date()}
                    disabledDates={this.dateRange}
                    rangeColors={["teal"]}
                />
                
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
