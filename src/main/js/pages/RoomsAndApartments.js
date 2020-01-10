import React, {Component} from "react";
import {RegularParallax} from "../util/RegularParallax";

class RoomsAndApartments extends Component {
    render() {
        return (
            <div>
                <RegularParallax src="parallaxImgs/Night.png"/>
                <div className="content">
                    <h2>Rooms And Apartments</h2>
                    <p>Cras facilisis urna ornare ex volutpat, et
                        convallis erat elementum. Ut aliquam, ipsum vitae
                        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                        metus nec massa. Maecenas hendrerit laoreet augue
                        nec molestie. Cum sociis natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus.</p>

                    <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
                </div>
                <RegularParallax src="parallaxImgs/Underground.png"/>
            </div>
        );
    }
}

export default RoomsAndApartments;
