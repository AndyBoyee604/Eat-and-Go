import React from 'react';
import { useQuery } from '@apollo/client';
import ResturantList from '../components/resturantList/resturantList';
import { QUERY_Resturant } from '../utils/queries';


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
                <h1 style={titleStyle}>Unison</h1>
                
                    <div className="row" style={resturantStyle}>
                        <div className="col-sm-8">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Hmong bar and food</h5>
                                     <img className="img1" src={resturant.image}></img> 
                                    <p className="card-text">
                                        Pay a shit ton of money to get messed up and eat fried food.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="resturant">
                <h1 style={titleStyle}>Pho 99</h1>
                
                    <div className="row" style={resturantStyle}>
                        <div className="col-sm-8">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Locally owned Vietnamese resturant</h5>
                                    {/* <img className="img1" src={resturant.image}></img> */}
                                    <p className="card-text">
                                        Good portions of Pho Diet Bac
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="resturant">
                <h1 style={titleStyle}>Mandarin</h1>
                
                    <div className="row" style={resturantStyle}>
                        <div className="col-sm-8">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Chinese/Viet cusine</h5>
                                    {/* <img className="img1" src={resturant.image}></img> */}
                                    <p className="card-text">
                                        Pretty gud stuff
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
