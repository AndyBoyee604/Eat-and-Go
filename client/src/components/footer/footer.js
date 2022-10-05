import React from 'react';
import './footer.css'

const copyStyle = {
    padding: '10px',
    fontWeight: 'bold'
}

function Footer() {
    return (
        <div className="footer" id="footer">
            <p style={copyStyle}>© Team itWorksOnLocal 2022</p>
        </div>
    )
}

export default Footer;