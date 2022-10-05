import React from 'react';
import { useQuery } from '@apollo/client';
import ResturantList from '../components/resturantList/resturantList';
import { QUERY_Resturant } from '../utils/queries';
import lotus from '../images/lotus.jpg';
import bole from '../images/bole.jpg';
import flame from '../images/flame.jpg';
import cheng from '../images/cheng.jpg';
import india from '../images/india.jpg';
import pho400 from '../images/400.jpg';
import redsea from '../images/redsea.jpg';
import nook from '../images/nook.jpg';

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

const Resturant = () => {
    const { loading, data } = useQuery(QUERY_Resturant);
    const resturant = data?.resturant || [];

    return (
        <div className="top-level">
            <div>
                {loading ? (
                    <div>LOADING...</div>
                ) : (
                    <ResturantList
                        resturant={resturant}
                    />
                )}
            </div>
            <section className="resturant">
                <h1 style={titleStyle}>The Lotus Maple Grove</h1>
                <div className="row" style={resturantStyle}>
                    <div className="col-sm-8">
                        <div className="card text-center">
                            <div className="card-body">
                                <img className="img1" src={lotus} alt='lotus maple grove'></img>
                                <p className="card-text">
                                    Vietnamese Cuisine
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resturant">
                <h1 style={titleStyle}>Bole</h1>
                <div className="row" style={resturantStyle}>
                    <div className="col-sm-8">
                        <div className="card text-center">
                            <div className="card-body">
                                <img className="img1" src={bole} alt='bole'></img>
                                <p className="card-text">
                                    Ethiopian Cuisine
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resturant">
                <h1 style={titleStyle}>Cheng Heng</h1>
                <div className="row" style={resturantStyle}>
                    <div className="col-sm-8">
                        <div className="card text-center">
                            <div className="card-body">
                                <img className="img1" src={cheng} alt='cheng heng'></img>
                                <p className="card-text">
                                    Cambodian Cuisine
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resturant">
                <h1 style={titleStyle}>Taste of India</h1>
                <div className="row" style={resturantStyle}>
                    <div className="col-sm-8">
                        <div className="card text-center">
                            <div className="card-body">
                                <img className="img1" src={india} alt='taste of india'></img>
                                <p className="card-text">
                                    Indian Cuisine
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resturant">
                <h1 style={titleStyle}>Pho 400</h1>
                <div className="row" style={resturantStyle}>
                    <div className="col-sm-8">
                        <div className="card text-center">
                            <div className="card-body">
                                <img className="img1" src={pho400} alt='pho 400'></img>
                                <p className="card-text">
                                    Vietnamese Cuisine
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resturant">
                <h1 style={titleStyle}>Red Sea</h1>
                <div className="row" style={resturantStyle}>
                    <div className="col-sm-8">
                        <div className="card text-center">
                            <div className="card-body">
                                <img className="img1" src={redsea} alt='red sea'></img>
                                <p className="card-text">
                                    Ethiopian & Eritrean Cuisine
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resturant">
                <h1 style={titleStyle}>The Nook</h1>
                <div className="row" style={resturantStyle}>
                    <div className="col-sm-8">
                        <div className="card text-center">
                            <div className="card-body">
                                <img className="img1" src={nook} alt='the nook'></img>
                                <p className="card-text">
                                    Burgers, Drinks and Bowling
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

// import { QUERY_Resturant } from '../utils/queries'
// const Resturants = () => {
//     const { loading, data } = useQuery(QUERY_Resturant);
//     const resturant = data?.resturant || [];

//     return (
//         <div className="top-level">
//             <div className="post-list">
//                 {loading ? (
//                     <div>LOADING...</div>
//                 ) : (
//                     <resturantList 
//                     resturant={resturant}
//                     />
//                 )}
//             </div>
//             <div>
//                 <resturantList />
//             </div>
//         </div>
//     )
// }

export default Resturant;
