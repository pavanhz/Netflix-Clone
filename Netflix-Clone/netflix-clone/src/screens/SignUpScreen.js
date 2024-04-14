import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignUpScreen.css'

const SignUpScreen = () => {
    const emailref = useRef(null);
    const passwordRef = useRef(null);


    //authentication
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
            })
            .catch(error => {
                alert(error.message);
            });
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
            })
            .catch(error => {
                alert(error.message);
            });

    }

    return (
        <div className='signUpScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailref} placeholder='Email' type='email' />
                <input ref={passwordRef} placeholder='Password' type='password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signUpScreen__grey'>New to Netflix? </span>
                    <span className='signUpScreen__link' onClick={register}>Sign Up now</span>

                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen