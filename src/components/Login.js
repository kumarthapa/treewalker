import firebase from 'firebase/app'
import {LoginAuth} from '../context/MessageProvider'
import Button from "@material-ui/core/Button";
const Login = () => {
    const provider=new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt:'select_account'})
    const {signInWithGoogle}=LoginAuth();

    const submitHandler=()=>{
        signInWithGoogle(provider)
    }

    return (
        <div>
            <h1>Welcome user Please login with google ID</h1>
            <Button
        variant="contained"
        color="secondary"
        onClick={submitHandler}
          >
          Sign In
          </Button>
        </div>
    )
}

export default Login