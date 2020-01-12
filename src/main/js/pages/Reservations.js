import React, {Component} from "react";
import {RegularParallax} from "../util/RegularParallax";
import DatePicker from "react-datepicker";

import "../../../../node_modules/react-datepicker/dist/react-datepicker.css";

class Reservations extends Component {
    constructor(props) {
        super(props);
        const today = new Date();
        const tommorow = new Date();
        tommorow.setDate(tommorow.getDate() + 1);
        this.state = {
            startDate: today,
            endDate: tommorow
        }
    }

    setStartDate(date) {
        const newEndDate = this.state.endDate;
        if (newEndDate.getDate() <= date.getDate()) {
            newEndDate.setDate(date.getDate() + 1);
        }
        this.setState({startDate: date, endDate: newEndDate});
    }

    setEndDate(date) {
        const newStartDate = this.state.startDate;
        if (newStartDate.getDate() >= date.getDate()) {
            newStartDate.setDate(date.getDate() - 1)
        }
        if (newStartDate.getDate() < new Date().getDate()) {
            newStartDate.setDate(newStartDate.getDate() + 1);
            date.setDate(date.getDate() + 1);
            this.setState({startDate: newStartDate, endDate: date});
        } else {
            this.setState({startDate: newStartDate, endDate: date});
        }
    }

    render() {
        const {startDate, endDate} = this.state;
        return (
            <div>
                <RegularParallax src="parallaxImgs/Enchant.png"/>
                <div className="content">
                    <h2>Reservations</h2>
                    <p>Book your stay at the Redstone Hotel. Spend your nights safely from creepers and zombies. This is
                        an ideal place to gather the team for further journey. Our professional service is ready to
                        serve you. <i>Reserve now.</i></p>

                    <form>
                        <label>
                            Name: <input type="text" name="name"/>
                        </label><br/>
                        <label>
                            Surname: <input type="text" name="surname"/>
                        </label><br/>
                        <label>
                            Room: <select>
                            <option value="ra">Room A</option>
                            <option value="rb">Room B</option>
                            <option value="rc">Room C</option>
                            <option value="rd">Room D</option>
                        </select>
                        </label><br/>
                        <label>
                            From: <DatePicker
                            selected={startDate}
                            onChange={date => this.setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            minDate={Date.now()}
                        />
                        </label><br/>
                        <label>
                            To: <DatePicker
                            selected={endDate}
                            onChange={date => this.setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
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
