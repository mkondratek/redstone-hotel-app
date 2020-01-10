import {ParallaxProvider} from "react-scroll-parallax/cjs";

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./pages/Home"
import Reservations from "./pages/Reservations"
import Restaurant from "./pages/Restaurant"
import MeetingsAndEvents from "./pages/MeetingsAndEvents";
import RoomsAndApartments from "./pages/RoomsAndApartments";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {reservations: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/reservations'}).done(response => {
            this.setState({reservations: response.entity._embedded.reservations});
        });
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <header>Redsonte Hotel</header>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/restaurant">Restaurant</NavLink></li>
                        <li><NavLink to="/reservations">Reservation</NavLink></li>
                        <li><NavLink to="/meetings_and_events">Meetings And Events</NavLink></li>
                        <li><NavLink to="/rooms_and_apartments">Rooms And Apartment</NavLink></li>
                    </ul>
                    <ParallaxProvider className="wrapper">
                        <Route exact path="/" component={Home}/>
                        <Route path="/restaurant" component={Restaurant}/>
                        <Route path="/reservations" component={Reservations}/>
                        <Route path="/meetings_and_events" component={MeetingsAndEvents}/>
                        <Route path="/rooms_and_apartments" component={RoomsAndApartments}/>
                    </ParallaxProvider>
                    <div className="verticalSpace"></div>
                    <footer>
                        Redstone Hotel, Overload (1200, 68, -550)<br/>
                        mkondratek (c)
                    </footer>
                </div>
            </HashRouter>
        )
    }
}

class ReservationList extends React.Component {
    render() {
        const reservations = this.props.reservations.map(reservation =>
            <Reservation key={reservation._links.self.href} reservation={reservation}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Description</th>
                </tr>
                {reservations}
                </tbody>
            </table>
        )
    }
}

class Reservation extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.reservation.firstName}</td>
                <td>{this.props.reservation.lastName}</td>
                <td>{this.props.reservation.description}</td>
            </tr>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);