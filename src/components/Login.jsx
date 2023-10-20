import { auth, provider } from '../../api/firebase'
import { signInWithPopup } from 'firebase/auth';

const Login = () => {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
    }

    return (
        <div className="align-self-center d-none d-sm-block text-white" onClick={signInWithGoogle}>
            <a className="nav-link" href="#">Login</a>
        </div>
    );
};

export default Login;