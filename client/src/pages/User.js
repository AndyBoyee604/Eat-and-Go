import React from 'react';
import { useQuery } from '@apollo/client';


import { QUERY_USER } from '../utils/queries'

import Auth from '../utils/auth'

const UserPage = () => {
    const username = Auth.getProfile().data.username
    console.log(username)

    const { loading } = useQuery(QUERY_USER, {
        variables: { username }
    });

    return (
        <div className="top-level">
            <div className="post-list">
                {loading ? (
                    <div>LOADING...</div>
                ) : (
                    <h1 className="">{ }saved should be here.</h1>
                )}
            </div>
        </div>
    )
}

export default UserPage;