import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h1>Home</h1>
            <p>Current User is: {user? user.displayName : 'No body'}</p>
        </div>
    );
};

export default Home;