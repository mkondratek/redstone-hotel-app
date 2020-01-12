import React, {Component} from "react";
import {RegularParallax} from "../util/RegularParallax";

class MeetingsAndEvents extends Component {
    render() {
        return (
            <div>
                <RegularParallax src="parallaxImgs/Morning.png"/>
                <div className="content">
                    <h2>Meetings And Events</h2>
                    <p>The Redstone Hotel is a place connecting people. Are you looking for companions on a trip to
                        Nether or End? Do you need hands to work on a construction site? Do you want to meet someone new
                        or organize your event? Come to us!</p>
                </div>
                <RegularParallax src="parallaxImgs/Party.png"/>
            </div>
        );
    }
}

export default MeetingsAndEvents;
