import React, {Component} from "react";

const client = require('../client');

export class RandomQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            author: ""
        }
    }

    componentDidMount() {
        this.updateQuote();
    }

    updateQuote() {
        client({method: 'GET', path: 'https://api.quotable.io/random'}).done(response => {
            this.setState({
                content: response.entity.content,
                author: response.entity.author
            });
        });
    }

    render() {

        const {content, author} = this.state;

        return (
            <div className="quoteBox">
                <p className="content">"{content}"</p>
                <p className="author">{author}</p>
            </div>
        );
    }
}