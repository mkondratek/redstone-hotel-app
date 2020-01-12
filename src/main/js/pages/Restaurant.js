import React, {Component} from "react";
import {RegularParallax} from "../util/RegularParallax";

class Restaurant extends Component {
    render() {
        return (
            <div>
                <RegularParallax src="parallaxImgs/Supper.png"/>
                <div className="content">
                    <h2>Restaurant</h2>
                    <p>Dining at the Redstone Hotel's restaurant is a real feast for the palate. Soups, meat, cakes and
                        much more. Check our menu!</p>
                </div>
                <RegularParallax src="parallaxImgs/Restaurant.png"/>
            </div>
        );
    }
}

export default Restaurant;