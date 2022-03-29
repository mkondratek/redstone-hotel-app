import React, {Component} from "react";
import {RegularParallax} from "../util/RegularParallax";
import DatePicker from "react-datepicker";
import "../../../../node_modules/react-datepicker/dist/react-datepicker.css";
import {Navigate} from "react-router-dom";

const superagent = require('superagent');

class Reservations extends Component {
    constructor(props) {
        super(props);
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        this.state = {
            firstName: "",
            lastName: "",
            roomId: "",
            fromDate: today,
            toDate: tomorrow,
            rooms: [],
            redirectToHome: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        superagent.get('/room/names')
            .then(res => {
                this.setState({rooms: res.body})
            });
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
        superagent.post('/reservation')
            .set('Content-Type', 'application/json')
            .send(this.state)
            .then(() => {
                this.setState({redirectToHome: true})
            }).catch(err => {
            alert(err.message);
        });

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const {fromDate, toDate, redirectToHome} = this.state;

        if (redirectToHome === true) {
            window.scrollTo(0, 0);
            alert("Success!");
            return <Navigate to="/"/>;
        }

        const options = this.state.rooms.map(n => <option key={n} value={n}>{n}</option>);

        return (
            <div>
                <RegularParallax src="parallaxImgs/Enchant.png"/>
                <div className="content">
                    <h2>Reservations</h2>
                    <p>Book your stay at the Redstone Hotel. Spend your nights safely from creepers and zombies. This is
                        an ideal place to gather the team for further journey. Our professional service is ready to
                        serve you. <i>Reserve now.</i></p>

                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <label>
                                Name: <input type="text" name="firstName"
                                             onChange={this.handleChange}/>
                            </label>
                        </p>
                        <p>
                            <label>
                                Surname: <input type="text" name="lastName"
                                                onChange={this.handleChange}/>
                            </label>
                        </p>
                        <p>
                            <label>
                                Room: <select name="roomId" onChange={this.handleChange}>
                                {options}
                            </select>
                            </label>
                        </p>
                            <label className="datePickerLabel">
                                From: <DatePicker
                                selected={fromDate}
                                onChange={date => this.setFromDate(date)}
                                selectsStart
                                startDate={fromDate}
                                endDate={toDate}
                                minDate={Date.now()}
                            />
                            </label>
                            <label className="datePickerLabel">
                                To: <DatePicker
                                selected={toDate}
                                onChange={date => this.setToDate(date)}
                                selectsEnd
                                startDate={fromDate}
                                endDate={toDate}
                                minDate={fromDate}
                            />
                            </label>
                        <p>
                            <label>
                                Comments: <textarea name='comments' onChange={this.handleChange}/>
                            </label>
                        </p>
                        <p id="submit">
                            <label>
                                <input type="submit" value="Reserve"/>
                            </label>
                        </p>
                    </form>

                    <p>We look forward to your presence.</p>
                </div>
                <RegularParallax src="parallaxImgs/Billard.png"/>
            </div>
        );
    }
}

export default Reservations;
