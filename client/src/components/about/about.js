import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const pStyle = {
    margin: '30px'
}

function About() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Welcome</h1>
            <p className="lead" style={pStyle}> </p>
            <hr className="my-4"></hr>
        </div>
    )
}

export default About;