import React, {Component} from "react";
import {RegularParallax} from "../util/RegularParallax";

const superagent = require('superagent');

class Rooms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: []
        }
    }

    componentDidMount() {
        superagent.get('/api/rooms')
            .then(res => {
                this.setState({rooms: res.body._embedded.rooms})
            });
    }

    render() {
        return (
            <div>
                <RegularParallax src="parallaxImgs/Night.png"/>
                <div className="content">
                    <h2>Rooms</h2>
                    <p>We have everything you need. Have a look into our offer!</p>

                    <RoomList rooms={this.state.rooms}/>

                    <p>We are ready to serve you.</p>
                </div>
                <RegularParallax src="parallaxImgs/Underground.png"/>
            </div>
        );
    }
}


class RoomList extends React.Component {
    render() {
        const room = this.props.rooms.map((room, i) =>
            <Room key={i + 1} id={i + 1} room={room}/>
        );
        return (
            <table className="roomTable">
                <tbody>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                {room}
                </tbody>
            </table>
        )
    }
}

class Room extends React.Component {
    render() {
        const url = "http://localhost:8080/api/rooms/image/" + this.props.id;
        return (
            <tr>
                <td><img className="preview" src={url}/></td>
                <td>{this.props.room.name}</td>
                <td>{this.props.room.description}</td>
            </tr>
        )
    }
}

export default Rooms;
