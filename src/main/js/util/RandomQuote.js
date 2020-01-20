import React, {Component} from "react";

const superagent = require('superagent');

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
        superagent.get('https://api.quotable.io/random')
            .then(res => {
                this.setState({
                    content: res.body.content,
                    author: res.body.author
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