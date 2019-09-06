import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChatIcon from '@material-ui/icons/Chat';
import EmailIcon from '@material-ui/icons/Email';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class BottomNavigationBar extends React.Component {
    
    render() {
        return (
            <div >
                <BottomNavigation
                    id="bottom"
                    showLabels
                >
                    <BottomNavigationAction style={{ color: 'white' }} onClick={() => window.location.href = '/about'} label="About" icon={<ChatIcon />} />
                    <BottomNavigationAction style={{ color: 'white' }} onClick={() => window.location.href = '/contact'} label="Contact Us" icon={<EmailIcon />} />
                </BottomNavigation>
            </div>
        );
    }
}


export default BottomNavigationBar;