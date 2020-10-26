import React from 'react'
import "./Widgets.css"
import {TwitterTimelineEmbed,TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetsContainer">
                <h2>Whats Happening</h2>
                <TwitterTweetEmbed tweetId={'933354946111705097'}/>
                <TwitterTimelineEmbed sourceType="profile" screenName="deepak" options={{height:400}}/>
                <TwitterShareButton url={""} options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}/>
            </div>
        </div>
    )
}

export default Widgets
