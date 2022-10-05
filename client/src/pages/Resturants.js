import React from 'react';
import { useQuery } from '@apollo/client';
import ResturantList from '../components/resturantList/resturantList';
import { QUERY_Resturant } from '../utils/queries';

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
            <div>
                asdfasfsadfdsfasdfasdfasfasfasdf
            </div>
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