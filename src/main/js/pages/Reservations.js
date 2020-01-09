import React, {Component} from "react";
import {Parallax} from "react-scroll-parallax/cjs";

class Reservations extends Component {
    render() {
        return (
            <div>
                <Parallax y={[-20, 20]} tagOuter="figure">
                    <img className="parallaxImg" src="parallaxImgs/Enchant.png"/>
                </Parallax>
                <div className="content">
                    <h2>Reservations</h2>
                    <p>Cras facilisis urna ornare ex volutpat, et
                        convallis erat elementum. Ut aliquam, ipsum vitae
                        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                        metus nec massa. Maecenas hendrerit laoreet augue
                        nec molestie. Cum sociis natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus.</p>

                    <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
                </div>
                <Parallax y={[-20, 20]} tagOuter="figure">
                    <img className="parallaxImg" src="parallaxImgs/Billard.png"/>
                </Parallax>
            </div>
        );
    }
}

export default Reservations;