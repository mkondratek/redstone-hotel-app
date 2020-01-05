const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

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
            <ReservationList reservations={this.state.reservations}/>
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