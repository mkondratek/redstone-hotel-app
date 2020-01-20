import React, {Component} from "react";
import {Parallax, ParallaxBanner} from "react-scroll-parallax/cjs";

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