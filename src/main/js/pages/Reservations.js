import React, {Component} from "react";
import {RegularParallax} from "../util/RegularParallax";
import DatePicker from "react-datepicker";

import "../../../../node_modules/react-datepicker/dist/react-datepicker.css";

class Reservations extends Component {
    constructor(props) {
        super(props);
        let now = new Date();
        this.state = {
            startDate: now,
            endDate: now
        }
    }

    setStartDate(date) {
        const newEndDate = this.state.endDate < date ? date : this.state.endDate;
        this.setState({startDate: date, endDate: newEndDate});
    }

    setEndDate(date) {
        const newStartDate = this.state.startDate > date ? date : this.state.startDate;
        this.setState({startDate: newStartDate, endDate: date});
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
                            Date:
                            <DatePicker
                                selected={startDate}
                                onChange={date => this.setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                minDate={Date.now()}
                            />
                            <DatePicker
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
