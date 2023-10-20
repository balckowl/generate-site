import React from 'react'
import { auth } from '../../api/firebase.js';

const Logout = () => {
    return (
        <div className="align-self-center d-none d-sm-block text-white" onClick={() => auth.signOut()}>
            <a className="nav-link" href="#">Logout</a>
        </div>
    );
};

export default Logout;