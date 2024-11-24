import { Input, message } from "antd";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth, userRef } from "../App";
import { UseContextAuth } from "../ContextFolder/Context/UseContextAuth";
import { addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export const Register = () => {
    const [registered, setRegistered] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    const { dispatch } = UseContextAuth();

    const handleSignIn = async (e) => {
        e.preventDefault();
        dispatch({ type: 'loading', payload: true });
    
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            dispatch({ type: 'signUser', payload: user });
            setEmail('');
            setPassword('');
            
        } catch (error) {
            console.error('Sign-In Error:', error);
            
            message.error('email or password incorrect');
        } finally {
            dispatch({ type: 'loading', payload: false });
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        dispatch({ type: 'loading', payload: true });
    
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
    
            await sendEmailVerification(user);
            await updateProfile(user, { displayName: fname });
    
            await addDoc(userRef, {
                userName: fname,
                otherName: lname,
                userEmail: user.email,
                userId: user.uid
            });
    
            setEmail('');
            setPassword('');
            setFname('');
            setLname('');
        
            dispatch({ type: 'signUser', payload: user });
        } catch (error) {
            console.error('Sign-Up Error:', error);
            message.error('Sorry an error occured');
        } finally {
            dispatch({ type: 'loading', payload: false });
        }
    };

    return (
        <section>
            <div className="container-fluid">
                <div>
                    <form className="registerForm" onSubmit={registered ? handleSignIn : handleSignUp}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2 className="monserrat">Welcome!</h2>
                            <ion-icon
                                style={{
                                    fontSize: '30px',
                                    border: 'solid white 1px',
                                    cursor: 'pointer',
                                    padding: '3px',
                                    borderRadius: '5px'
                                }}
                                name="close-outline"
                                onClick={() => window.location.href = '/apartmentwebsite'}
                            ></ion-icon>
                        </div>
                        <p>Sign in to book the best apartment just for you</p>
                        {registered ?
                            <>
                                <div>
                                    <label htmlFor='email'>Email</label>
                                </div>
                                <input
                                    className="registerInput"
                                    type="email"
                                    name="email"
                                    autoComplete="new-email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div>
                                    <label htmlFor='password'>Password</label>
                                </div>
                                <Input.Password
                                    className="registerInput"
                                    name="password"
                                    autoComplete="new-password"
                                    placeholder="Type password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Link to={'forgotpassword'} style={{ textAlign: 'right' }}>Forgot password?</Link>
                            </>
                            :
                            <>
                                <div>
                                    <label htmlFor='first-name'>First name</label>
                                </div>
                                <input
                                    className="registerInput"
                                    type="text"
                                    name="first-name"
                                    autoComplete="given-name"
                                    placeholder="First name"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                />
                                <div>
                                    <label htmlFor='last-name'>Last name</label>
                                </div>
                                <input
                                    className="registerInput"
                                    type="text"
                                    name="last-name"
                                    autoComplete="family-name"
                                    placeholder="Last name"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                />
                                <div>
                                    <label htmlFor='email'>Email</label>
                                </div>
                                <input
                                    className="registerInput"
                                    type="email"
                                    name="email"
                                    autoComplete="new-email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div>
                                    <label htmlFor='password'>Password</label>
                                </div>
                                <Input.Password
                                    className="registerInput"
                                    name="password"
                                    autoComplete="new-password"
                                    placeholder="Type password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </>
                        }
                        <button type="submit">Submit</button>
                        <div>
                            <span onClick={() => {
                                setRegistered(!registered);
                                setEmail('');
                                setPassword('');
                                
                            }}
                            style={{
                                cursor:'pointer'
                            }}
                            >
                                {registered ? 'Do not have an account? Sign Up here' : 'Already have an account? Sign in here'}
                            </span>
                        </div>
                        
                    </form>
                </div>
            </div>
        </section>
    );
}