import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import FirebaseContext from '../context/firebase';

import Head from 'next/head';
import Link from 'next/link';

function Login() {
    const router = useRouter();
    const { firebase } = useContext(FirebaseContext);

    const [ emailAddress, setEmailAddress ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ error, setError ] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
            history.push("/");
        } catch (error) {
            setEmailAddress("");
            setPassword("");
            setError(error.message);
        }
    };

    return (
        <div>
            <Head>
                <title>Login - Instagram</title>
            </Head>
            <div className="container flex mx-auto max-w-screen-md items-center h-screen">
                <div className="flex w-3/5">
                    <img src="/img/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
                </div>
                <div className="flex flex-col w-2/5">
                    <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
                        <h1 className="flex justify-center w-full">
                            <img src="/img/logo.png" alt="Instagram" className="mt-2 w-6/12 wb-4"/>
                        </h1>

                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                        <form onSubmit={handleLogin} method="post">
                            <input 
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email address"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setEmailAddress(target.value) } 
                            />
                            <input 
                            aria-label="Enter your password address"
                            type="password"
                            placeholder="Password"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setPassword(target.value) } 
                            />
                            <button
                                disabled={isInvalid}
                                type="submit"
                                className={`bg-blue-medium text-white w-full rounded h-8 font-bold
                                ${isInvalid && 'opacity-50'}`}>
                                Log In        
                            </button>
                        </form>
                    </div>
                    <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
                        <p className="text-sm">
                            Don't have an account?{` `}
                            <Link 
                                href="/signup"
                                className="font-bold text-blue-medium">
                                    Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )     
}

export default Login;