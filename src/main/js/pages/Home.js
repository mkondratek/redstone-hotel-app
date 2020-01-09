import React, {Component} from "react";
import {Parallax} from "react-scroll-parallax/cjs";

class Home extends Component {
    render() {
        return (
            <div>

                <Parallax y={[-20, 20]} tagOuter="figure">
                    <img className="parallaxImg" src="parallaxImgs/Outside.png"/>
                </Parallax>
                <div className="content">
                    <h2>Home</h2>
                    <p>Cras facilisis urna ornare ex volutpat, et
                        convallis erat elementum. Ut aliquam, ipsum vitae
                        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                        metus nec massa. Maecenas hendrerit laoreet augue
                        nec molestie. Cum sociis natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in elementum magna. In dictum
                        sollicitudin mollis. Praesent malesuada mi ac metus ultricies, non ullamcorper libero commodo.
                        Fusce in metus quam. Phasellus rhoncus sed arcu et vulputate. Morbi justo nisl, luctus auctor
                        turpis et, consectetur dapibus arcu. Nulla facilisi. Vivamus vitae velit iaculis, ullamcorper
                        lacus bibendum, vulputate sem. Nam laoreet tempor libero et consectetur. Nunc consectetur felis
                        eleifend venenatis congue. Nulla vitae nibh ornare, ultrices risus nec, mollis elit. Aenean eget
                        gravida purus. Donec commodo ornare nunc, id rhoncus orci blandit nec. Aliquam nec nunc at quam
                        interdum sodales. Integer elementum felis nec mi eleifend aliquam.
                    </p>
                    <p>Suspendisse in consectetur ex. Pellentesque ullamcorper purus eu maximus dictum. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus dui orci,
                        rhoncus ut faucibus ut, vulputate ut velit. Nullam eleifend consectetur lectus, id tempus sapien
                        feugiat id. Suspendisse potenti. In non blandit libero. Duis iaculis mollis est congue euismod.
                        Praesent at finibus neque. Integer ut commodo sapien. Etiam at justo quis enim auctor ultrices
                        nec vel neque. Nam ut risus a ipsum tincidunt laoreet. Praesent id feugiat est. Praesent
                        sollicitudin pharetra felis ac bibendum. Quisque egestas pulvinar massa, et dignissim ipsum
                        tempus eget.</p>

                    <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
                </div>

                <Parallax y={[-20, 20]} tagOuter="figure">
                    <img className="parallaxImg" src="parallaxImgs/Landscape.png"/>
                </Parallax>
            </div>
        );
    }
}

export default Home;