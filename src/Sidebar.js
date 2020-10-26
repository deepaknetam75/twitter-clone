import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutLineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PerIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            {/*Sidebar options*/}
            <TwitterIcon className="sidebar__twitter_icon"/>
            <SidebarOptions active text="Home" Icon={HomeIcon}/>
            <SidebarOptions text="Explore" Icon={SearchIcon}/>
            <SidebarOptions text="Notifications" Icon={NotificationsNoneIcon}/>
            <SidebarOptions text="MailOutLine" Icon={MailOutLineIcon}/>
            <SidebarOptions text="Bookmarks" Icon={BookmarkBorderIcon}/>
            <SidebarOptions text="List" Icon={ListAltIcon}/>
            <SidebarOptions text="Profile" Icon={PerIdentityIcon}/>
            <SidebarOptions text="More" Icon={MoreHorizIcon}/>

            {/* Button  */}
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar
