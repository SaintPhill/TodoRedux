import React from 'react'
import './NavBar.css'
import PropTypes from 'prop-types'
import {FILTER_VALUES} from "../Redux/Actions";

class NavBar extends React.PureComponent {
    state = {
        isOpen: false
    };

    render() {
        const {props} = this;
        return (
            <div id="wrapper" className={this.state.isOpen ? "active" : ""}>
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav" id="sidebar_menu">
                        <span onClick={() => this.setState({isOpen: !this.state.isOpen})} className="hamburger">☰</span>
                    </ul>
                    <ul id="sidebar" className="sidebar-nav">
                        <li onClick={() => props.onCLick(FILTER_VALUES.ALL)}><a href="#!">All</a></li>
                        <li onClick={() => props.onCLick(FILTER_VALUES.ACTIVE)}><a href="#!">Active</a></li>
                        <li onClick={() => props.onCLick(FILTER_VALUES.COMPLETED)}><a href="#!">Complete</a></li>
                    </ul>
                </div>
            </div>
        )
    };
}

NavBar.propTypes = {
    onCLick: PropTypes.func.isRequired
};


export default NavBar