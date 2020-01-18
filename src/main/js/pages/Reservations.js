import React, {Component} from "react";
import {RegularParallax} from "../util/RegularParallax";
import DatePicker from "react-datepicker";

import "../../../../node_modules/react-datepicker/dist/react-datepicker.css";
const client = require('../client');

class Reservations extends Component {
    constructor(props) {
        super(props);
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        this.state = {
            firstName: "",
            lastName: "",
            roomId: "ra",
            fromDate: today,
            toDate: tomorrow
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setFromDate(date) {
        const newToDate = this.state.toDate;
        if (newToDate.getDate() <= date.getDate()) {
            newToDate.setDate(date.getDate() + 1);
        }
        this.setState({fromDate: date, toDate: newToDate});
    }

    setToDate(date) {
        const newFromDate = this.state.fromDate;
        if (newFromDate.getDate() >= date.getDate()) {
            newFromDate.setDate(date.getDate() - 1)
        }
        if (newFromDate.getDate() < new Date().getDate()) {
            newFromDate.setDate(newFromDate.getDate() + 1);
            date.setDate(date.getDate() + 1);
        }
        this.setState({fromDate: newFromDate, toDate: date});
    }

    handleSubmit(event) {
        client({method: 'POST', path: '/api/reservations', headers: {'Content-Type': 'application/json'}, entity: this.state}).done(response => {
            console.log(response); //todo redirect to home
        });

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const {fromDate, toDate} = this.state;
        return (
            <div>
                <RegularParallax src="parallaxImgs/Enchant.png"/>
                <div className="content">
                    <h2>Reservations</h2>
                    <p>Book your stay at the Redstone Hotel. Spend your nights safely from creepers and zombies. This is
                        an ideal place to gather the team for further journey. Our professional service is ready to
                        serve you. <i>Reserve now.</i></p>

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name: <input type="text" name="firstName" onChange={this.handleChange}/>
                        </label><br/>
                        <label>
                            Surname: <input type="text" name="lastName" onChange={this.handleChange}/>
                        </label><br/>
                        <label>
                            Room: <select name="roomId" onChange={this.handleChange}>
                            <option value="ra">Room A</option>
                            <option value="rb">Room B</option>
                            <option value="rc">Room C</option>
                            <option value="rd">Room D</option>
                        </select>
                        </label><br/>
                        <label>
                            From: <DatePicker
                            selected={fromDate}
                            onChange={date => this.setFromDate(date)}
                            selectsStart
                            startDate={fromDate}
                            endDate={toDate}
                            minDate={Date.now()}
                        />
                        </label><br/>
                        <label>
                            To: <DatePicker
                            selected={toDate}
                            onChange={date => this.setToDate(date)}
                            selectsEnd
                            startDate={fromDate}
                            endDate={toDate}
                            minDate={fromDate}
                        />
                        </label><br/>
                        <label>
                            Additional comments: <textarea name='comments' onChange={this.handleChange}/>
                        </label><br/>
                        <input type="submit" value="Reserve"/>
                    </form>

                    <p>We look forward to your presence.</p>
                </div>
                <RegularParallax src="parallaxImgs/Billard.png"/>
            </div>
        );
    }
}

export default Reservations;
