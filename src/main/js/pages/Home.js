import React, {Component} from "react";
import {RegularParallax} from "../util/RegularParallax";
import {RandomQuote} from "../util/RandomQuote";

class Home extends Component {
    render() {
        return (
            <div>
                <RegularParallax src="parallaxImgs/Outside.png"/>
                <div className="content">
                    <h2>Home</h2>
                    <RandomQuote/>

                    <p>
                        Redstone Hotel has joined the brand’s new
                        premier tier of hotels, renowned for their enticing destinations, distinguished design,
                        excellence in service and guest experiences.

                        A unique place, a memorable time, in a unique way...
                        Redstone Hotel - hotel with tradition.
                    </p>

                </div>
                <RegularParallax src="parallaxImgs/Landscape.png"/>
            </div>
        );
    }
}

export default Home;
