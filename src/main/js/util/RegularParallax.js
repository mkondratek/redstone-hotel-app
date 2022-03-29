import React, {Component} from "react";
import {ParallaxBanner} from "react-scroll-parallax";

export class RegularParallax extends Component {
    render() {
        return (<ParallaxBanner layers={[
            {
                image: this.props.src,
                amount: 0.4
            }]}

            style={{
                height: '330px'
            }}
        />);
    }
}