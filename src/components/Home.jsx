import React from 'react'
import { auth } from '../../api/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Login';
import Logout from './Logout';

const Home = () => {
    const [user] = useAuthState(auth);

    return (
        <>
            <header>
                <div className="p-2 mb-4 head">
                    <div className="d-flex">
                        <div className="d-flex flex-grow-1">
                            <div className="align-self-center">
                                <div className="top-icon px-2">
                                    <i className="bi bi-gear"></i>
                                </div>
                            </div>
                            <div className="top-name align-self-center fs-2">
                                <a className="navbar-brand" href="#">CSS Generater</a>
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            {user ? (<Logout />) : (<Login />)}
                            <div className="vr text-white" style={{ width: '3px' }}></div>
                            <div className="align-self-center d-none d-sm-block text-white">
                                <a className="nav-link" href="#">My account</a>
                            </div>
                            {user ?
                                <img src={user.photoURL} alt="" /> :
                                <div className="align-self-center">
                                    <div className="person-icon pe-2">
                                        <i className="bi bi-person-circle"></i>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="row gy-5 py-3">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">liner-gradient</h3>
                                    <div className="card-icon text-center">
                                        <i className="bi bi-brush"></i>
                                    </div>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">

                                <div className="card-body">
                                    <h3 className="card-title">box-shadow</h3>
                                    <div className="card-icon text-center">
                                        <i className="bi bi-back"></i>
                                    </div>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">

                                <div className="card-body">
                                    <h3 className="card-title">flex-container</h3>
                                    <div className="card-icon text-center">
                                        <i className="bi bi-grid-3x3-gap"></i>
                                    </div>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">

                                <div className="card-body">
                                    <h3 className="card-title">talk-to-AI</h3>
                                    <div className="card-icon text-center">
                                        <i className="bi bi-chat-left-text"></i>
                                    </div>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className='bottom-0 w-100 mt-4'>
                <div className="p-3 border-top border-3">
                    <div className="d-flex justify-content-center m-1">
                        <div className="align-self-center">
                            <div className="top-icon px-2">
                                <i class="bi bi-gear"></i>
                            </div>
                        </div>
                        <div className="top-name align-self-center fs-2">
                            <a className="navbar-brand" href="#">CSS Generater</a>
                        </div>
                    </div>
                    <p className='text-center text-white'>&copy; Team Name 2023</p>
                </div>
            </footer>
        </>
    )
}

export default Home