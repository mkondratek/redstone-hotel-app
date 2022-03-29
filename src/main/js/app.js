import {ParallaxProvider} from "react-scroll-parallax";
import {HashRouter, NavLink, Route} from "react-router-dom";

import Home from "./pages/Home"
import Reservations from "./pages/Reservations"
import Restaurant from "./pages/Restaurant"
import MeetingsAndEvents from "./pages/MeetingsAndEvents";
import Rooms from "./pages/Rooms";

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <header>
                        <div className="icon"></div>
                        Redstone Hotel
                        <div className="icon"></div>
                    </header>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li id="restaurant"><NavLink to="/restaurant">Restaurant</NavLink>
                            <ul className="dropdown">
                                <li><NavLink to="/restaurant">Regular menu</NavLink></li>
                                <li><NavLink to="/restaurant/true">Vegetarian menu</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/reservations">Reservation</NavLink></li>
                        <li><NavLink to="/meetings_and_events">Meetings And Events</NavLink></li>
                        <li><NavLink to="/rooms">Rooms</NavLink></li>
                    </ul>
                    <ParallaxProvider className="wrapper">
                        <Route exact path="/" component={Home}/>
                        <Route path="/restaurant/:vegetarian?" component={Restaurant}/>
                        <Route path="/reservations" component={Reservations}/>
                        <Route path="/meetings_and_events" component={MeetingsAndEvents}/>
                        <Route path="/rooms" component={Rooms}/>
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

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);