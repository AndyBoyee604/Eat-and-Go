import React from 'react';
import Navigation from '../navigation/navigation'
import './header.css'
import Auth from '../../utils/auth'

const Header = () => {
    return (
        <div className="nav">
            <Navigation />
        </div>
    )
}

export default Header;