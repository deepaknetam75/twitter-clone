import React, {useState} from 'react';
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('post').add({
            displayName: 'Deepak',
            username: 'deepaknetam',
            verified: true,
            text: tweetMessage,
            image : tweetImage,
            avatar: "https://images.unsplash.com/photo-1603665409265-bdc00027c217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
        });

        setTweetImage("");
        setTweetMessage("");


    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://images.unsplash.com/photo-1603665409265-bdc00027c217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"/>
                    <input 
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type="text"
                    />
                </div>
                <input 
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Enter Image URL" 
                    type="text"
                />
                <Button type="submit" onClick={sendTweet} className="tweetBox__button">Tweet </Button>
            </form>
        </div>
    )
}

export default TweetBox
