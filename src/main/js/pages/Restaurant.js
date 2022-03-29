import React, {Component} from "react";
import {RegularParallax} from "../util/RegularParallax";
import ReactTable from "react-table";
import namor from "namor";

// import "../../../../node_modules/react-table/react-table.css";

const superagent = require('superagent');

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

function makeData() {
    return range(33).map(d => {
        return {...newDish()}
    });
}

const newDish = () => {
    return {
        dishName: namor.generate({words: 1, numbers: 0}),
        price: Math.floor(Math.random() * 30),
        isVegetarian: Math.random() < 0.4
    }
};

class Restaurant extends Component {
    constructor() {
        super();
        this.state = {
            data: makeData() //todo: remove random data
        };
    }

    // componentDidMount() {
    //     superagent.get('/dish')
    //         .then(res => {
    //             this.setState({data: res.body})
    //         });
    // }

    render() {
        const {data} = this.state;
        const {vegetarian} = this.props.match.params;
        const defaultFilter = {
            id: "over",
            value: vegetarian === "true" ? "true" : "all"
        };
        return (
            <div>
                <RegularParallax src="parallaxImgs/Supper.png"/>
                <div className="content">
                    <h2>Restaurant</h2>
                    <p>Dining at the Redstone Hotel's restaurant is a real feast for the palate. Soups, meat, cakes and
                        much more. Check our menu!</p>

                    <ReactTable
                        data={data}
                        filterable
                        sortable
                        defaultFiltered={[defaultFilter]}
                        columns={[
                            {
                                Header: "Dish Name",
                                accessor: "dishName",
                                filterMethod: (filter, row) =>
                                    row[filter.id].includes(filter.value)
                            },
                            {
                                Header: "Price",
                                accessor: "price"
                            },
                            {
                                Header: "Type",
                                accessor: "isVegetarian",
                                id: "over",
                                Cell: ({value}) => (value ? "Vegetarian" : "Regular"),
                                filterMethod: (filter, row) => {
                                    if (filter.value === "true") {
                                        return row[filter.id];
                                    }

                                    return true;
                                },
                                Filter: ({filter, onChange}) =>
                                    <select
                                        onChange={event => onChange(event.target.value)}
                                        style={{width: "100%"}}
                                        value={filter ? filter.value : "all"}>
                                        <option value="all">Show All</option>
                                        <option value="true">Vegetarian</option>
                                    </select>
                            }]
                        }
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
                <RegularParallax src="parallaxImgs/Restaurant.png"/>
            </div>
        );
    }
}

export default Restaurant;