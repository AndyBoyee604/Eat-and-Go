import React from 'react';
import { useQuery } from '@apollo/client';

import ResturantList from '../components/ResturantList/resturantList'

import { QUERY_Resturant } from '../utils/queries'

const Resturants = () => {
    const { loading, data } = useQuery(QUERY_Resturant);
    const resturants = data?.resturants || [];

    return (
        <div className="top-level">
            <div className="post-list">
                {loading ? (
                    <div>LOADING...</div>
                ) : (
                    <ResturantList 
                    resturants={resturants}
                    />
                )}
            </div>
        </div>
    )
}

export default Resturants;