import React from "react";
import { Link } from "react-router-dom";


import '../../App.css'

const linkStyle = {
  color: "#66ccff",
};

const titleStyle = {
  backgroundColor: "#66ccff",
  padding: "20px",
};

const resturantStyle = {
  padding: "20px",
  backgroundColor: '#212429',
  justifyContent: 'Center'
};

const imgStyle = {
  height: "300px",
  width: "500px",
};

const ResturantList = ({ resturant }) => {
  if (!resturant.length) {
    return <h3>No Resturants</h3>;
  }

    return (
      <section className="resturant">

        <h1 style={titleStyle}>Resturants</h1>
        {resturant.map((resturant) => (
          <div className="row" key={resturant._id} style={resturantStyle}>
          <div className="col-sm-8">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{resturant.name}</h5>
                <img className="img1" src={resturant.image}></img>
                <p className="card-text">
                  {resturant.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </section>
    )
};

export default ResturantList;
