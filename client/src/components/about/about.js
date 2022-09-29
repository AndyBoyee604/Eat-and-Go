import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import photo from '../../../public/images'

const imgStyle = {
    padding: '20px',
    height: '500px',
    width: '900px'
}

const linkStyle = {
    color: '#66ccff'
}

const pStyle = {
    margin: '30px'
}

function About() {
    return(
        <div className="jumbotron">
  <h1 className="display-4">Welcome</h1>
  <img class="steak" src={photo} width="1400px" height="1000px" alt="steak" style={imgStyle}></img>
  <p className="lead" style={pStyle}> </p>
  <hr className="my-4"></hr>
</div>
    )
}

export default About;