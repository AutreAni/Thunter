import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import InputField from './InputField';
import { validateData } from './validate';
import { setCurrentUser } from '../actions/currentUser';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../css-modules/SignForm/style.css";
import { registerCurrentUser } from '../actions/currentUser';



const SignForm = () => {
    const [loggingin, setLoggingin] = useState(true);
    const [registering, setRegistering] = useState(false);
    const [validUsername, setValidUsername] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [validConfPass, setValidConfPass] = useState(true);
    const [wrongDataMsg, setWrongDataMsg] = useState();
    const BASE_URL = `http://localhost:3000/users`;
    let fbLogin = false;
    let processing = false;
    const dispatch = useDispatch();

    const createLoginForm = () => {
        if (!registering && loggingin) return;
        if (registering) setRegistering(false);
        if (!loggingin) setLoggingin(true);
        setWrongDataMsg(null);
        setValidUsername(true);
        setValidEmail(true);
        setValidConfPass(true);
        setValidPassword(true);
    }

    const createSignupForm = () => {
        if (registering && !loggingin) return;
        if (!registering) setRegistering(true);
        if (loggingin) setLoggingin(false);
        setWrongDataMsg(null);
        setValidUsername(true);
        setValidEmail(true);
        setValidConfPass(true);
        setValidPassword(true);
    }

    const setValidData = {
        Username: setValidUsername,
        Password: setValidPassword,
        Email: setValidEmail,
        ConfPass: setValidConfPass,
    }

    const handleFocusout = (e) => {
        if (e.target.tagName !== "INPUT") return;
        const name = e.target.name;
        if (!name) return;
        const validate = validateData[name];
        if (registering) setValidData[name](validate(e.target.value));
    }

    const handleFocus = (e) => {
        if (e.target.tagName !== "INPUT") return;
        const name = e.target.name;
        if (!name) return;
        setValidData[name](true);
    }



    const registerNewUser = (data) => {
        dispatch(registerCurrentUser(data, BASE_URL))
    }

    const checkUserLoginCredentials = (obj) => {
        const url = fbLogin ? `${BASE_URL}?email=${obj.email}` : `${BASE_URL}?username=${obj.username}&password=${obj.password}`
        fetch(url)
            .then(response => {
                if (response.status !== 200) {
                    processing = false;
                    throw new Error();
                }
                setWrongDataMsg(null);
                return response.json()
            })
            .then(data => {
                if (!data.length && !fbLogin) {
                    setWrongDataMsg("Wrong username or password");
                    return;
                } else if (!data.length && fbLogin) {
                    registerNewUser(obj);
                    return;
                }
                dispatch(setCurrentUser(data[0]))
            })
            .catch(err => setWrongDataMsg("Server is not connected"))
    }

    const checkUserRegisterCredentials = (obj) => {
        fetch(`${BASE_URL}?username=${obj.username}`)
            .then(response => {
                if (response.status !== 200) {
                    processing = false;
                    throw new Error();
                }
                setWrongDataMsg(null);
                return response.json()
            })
            .then(data => {
                if (data.length) {
                    setWrongDataMsg("Username is already taken")
                    return;
                } else {
                    fetch(`${BASE_URL}?email=${obj.email}`)
                        .then(res => res.json())
                        .then(data => {
                            if (data.length) {
                                setWrongDataMsg("An account with this email already exists");
                                return
                            } else {
                                setWrongDataMsg(null);
                                registerNewUser(obj)
                            }
                        })
                        .catch(err => setWrongDataMsg("Server is not connected"))
                }
            })
            .catch(err => setWrongDataMsg("Server is not connected"))
    }

    const handleFbClick = () => {
        if (processing) return;
        fbLogin = true;
    }

    const responseFacebook = (response) => {
        if (!fbLogin) return;
        if (response.status === "unknown") {
            fbLogin = false;
            return;
        }
        checkUserLoginCredentials({
            email: response.email,
            username: response.name.split(" ")[0],
            picture: response.picture.data.url,
        });
    }


    const formSubmit = (e) => {
        debugger;
        if (processing) return;
        processing = true;
        const form = e.target.closest("form");
        e.preventDefault();
        let data = {};
        data["username"] = form.Username.value;
        data["email"] = registering ? form.Email.value : null;
        data["password"] = form.Password.value;
        data["confPass"] = registering ? form.ConfPass.value : null;

        if (loggingin && !fbLogin) {
            if (!data.username.length || !data.password.length) {
                processing = false;
                setWrongDataMsg("*All fields are required");
                return;
            }
        } else if (registering) {
            if (!data.username.length || !data.password.length
                || !data.email.length || !data.confPass.length) {
                processing = false;
                setWrongDataMsg("*All fields are required");
                return;
            } else if (!validUsername
                || !validEmail
                || !validPassword
                || !validConfPass) {
                processing = false;
                return;
            } else {
                checkUserRegisterCredentials(data);
            }

        }
        checkUserLoginCredentials(data);
    }



    return (
        <div className="sign__form">
            <div className="main__wrapper">
                <div className="inner__wrapper">
                    <div className="buttons__wrapper">
                        <div className={loggingin ? "active btn__wrapper" : "btn__wrapper"}>
                            <button className="button"
                                onClick={createLoginForm}>
                                Login
             </button>
                        </div>
                        <div className={registering ? "active btn__wrapper" : "btn__wrapper"}>
                            <button className="button"
                                onClick={createSignupForm}>
                                Sign Up
             </button>
                        </div>
                    </div>
                    <form id="form"
                        onSubmit={formSubmit}
                        onFocus={handleFocus}
                    >
                        <InputField
                            className="username__wrapper"
                            name="Username"
                            icon={faUser}
                            inputType="text"
                            placeholder="Username"
                            handleFocusout={handleFocusout}
                            errorMsg={!validUsername && registering ? "*Field can not be empty" : null}
                        />

                        {registering ?
                            (<InputField
                                className="email__wrapper"
                                name="Email"
                                icon={faEnvelope}
                                inputType="email"
                                placeholder="Email"
                                handleFocusout={handleFocusout}
                                errorMsg={!validEmail ? "*Please, insert a valid email" : null}
                            />) : null}

                        <InputField
                            className="password__wrapper"
                            name="Password"
                            icon={faLock}
                            inputType="password"
                            placeholder="Password"
                            handleFocusout={handleFocusout}
                            errorMsg={!validPassword && registering ? ("*Password must be at least 8 characters, must contain a lowercase letter, an uppercase letter and a digit"
                            ) : null}
                        />
                        {registering ?
                            (<InputField
                                className="confirm__password__wrapper"
                                name="ConfPass"
                                icon={faLock}
                                inputType="password"
                                placeholder="Confirm password"
                                handleFocusout={handleFocusout}
                                errorMsg={!validConfPass ? ("*Passwords should match") : null}
                            />) : null}

                        <div className="sign__btn">
                            <button>{registering ? "Register" : "Log In"}</button>
                            {wrongDataMsg ? <p className="errorMsg">{wrongDataMsg}</p> : null}
                        </div>
                        {loggingin ? (
                            <div className="facebook__login">
                                <div className="or__wrapper">
                                    <span className="or"></span>
                                    <span className="or text">or</span>
                                    <span className="or"></span>
                                </div>
                                <div className="fbButton">
                                    <FontAwesomeIcon icon={faFacebook}
                                        className="faFacebook" />
                                    <FacebookLogin
                                        appId="455003679284935"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        onClick={handleFbClick}
                                        callback={responseFacebook}
                                    />
                                </div>
                            </div>) : null}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignForm;


