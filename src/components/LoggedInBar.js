import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class LoggedInBar extends React.Component {
    constructor() {
        super()
        this.state = {
            anchorEl: null,
            mobileMoreAnchorEl: null,
        }
    };

    handleProfileMenuOpen = event => {
        event.preventDefault()
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    }

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };


    render() {

        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >
            
            </Menu>
        );
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: '#070A11' }}>
                        <IconButton component={Link} to="/" className={classes.button} aria-label="Home">
                        </IconButton>


                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>

                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }
}

LoggedInBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoggedInBar);