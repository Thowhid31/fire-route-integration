import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div>
            <h1>Login</h1>

            <button onClick={signInWithGoogle}>Sign in with Google</button> <br/>
                <br/>
            <form>
                
                <input type="email" placeholder='Your Email' /><br/>
                <input type="password" placeholder='Your Password' /> <br/>
                <input type="submit" value='Login' />
            </form>
        </div>
    );
};

export default Login;