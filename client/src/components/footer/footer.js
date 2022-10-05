import React from 'react'; 
import './footer.css'

const imgStyle = {
    width: '75px',
    height: '75px',
    padding: '10px'
}

const copyStyle = {
    padding: '10px',
    fontWeight: 'bold'
}

function Footer() {
    return(
        <div className="footer" id="footer">
            <p style={copyStyle}>© Team itWorksOnLocal 2022</p>
        </div>
    )
}

export default Footer;