import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import InputField from './InputField';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../css-modules/SignForm/style.css";



function SignForm({ performSubmit }) {
    const [loggingin, setLoggingin] = useState(true);
    const [registering, setRegistering] = useState(false);
    const [fbLogin, setFbLoogin] = useState(false);
    const [validUsername, setValidUsername] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [validConfPass, setValidConfPass] = useState(true);
    const [wrongDataMsg, setWrongDataMsg] = useState();


    const createLoginForm = () => {
        if (!registering && loggingin) return;
        if (registering) setRegistering(false);
        if (!loggingin) setLoggingin(true);
    }

    const createSignupForm = () => {
        if (registering && !loggingin) return;
        if (!registering) setRegistering(true);
        if (loggingin) setLoggingin(false);
    }

    const validateUsername = (text) => {
        if (!text) return false;
        return text.length;
    }

    const validatePassword = (password) => {
        if (!password.match(/[a-z]/g) ||
            !password.match(/[A-Z]/g) ||
            !password.match(/[0-9]/g) ||
            password.length < 8) {
            return false;
        }
        return true;
    }

    const validateConfirm = (password) => {
        let pass = document.querySelector("input[name = Password]");
        if (password !== pass.value) {
            return false;
        }
        return true;
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateData = {
        Username: validateUsername,
        Password: validatePassword,
        Email: validateEmail,
        ConfPass: validateConfirm,
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
        if(registering) setValidData[name](validate(e.target.value));
    }

    const handleFocus = (e) => {
        if (e.target.tagName !== "INPUT") return;
        const name = e.target.name;
        if (!name) return;
        setValidData[name](true);
    }



    const saveUserData = (data, url) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => performSubmit(data))
            .catch(error => console.log(error));
    }

    const filterData = (data, obj) => {
        let filteredByUsername = data.filter(user =>
            user.username === obj.username);
        let filteredByEmail = data.filter(user =>
            user.email === obj.email)
        let filteredByPassord = data.filter(user =>
            user.password === obj.password);
        if (loggingin) {
            filteredByUsername.length && filteredByPassord.length ?
                performSubmit(filteredByUsername[0]) :
                setWrongDataMsg("Wrong username or password");

        } else if (registering) {
            if (filteredByUsername.length || filteredByEmail.length || filteredByPassord.length) {
                if (filteredByUsername.length) setWrongDataMsg("Username already exists");
                else if (filteredByEmail.length) setWrongDataMsg("An account with this email already exists");
                else { setWrongDataMsg("Password is already occupied") }
            } else {
                setWrongDataMsg(null);
                saveUserData(obj, " http://localhost:3000/users")
            }
        } else if (fbLogin) {
            filteredByEmail.length ? performSubmit(filteredByEmail[0]) : saveUserData(obj, "http://localhost:3000/fbUsers")
        }
    }

    const checkUserDataExists = (obj, url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    if (loggingin) {
                        setWrongDataMsg("Wrong username or password");
                        return;
                    } else {
                        setWrongDataMsg(null);
                        saveUserData(obj, url);
                    }
                } else {
                    filterData(data, obj)
                }
            })
    }



    const handleFbClick = () => setFbLoogin(true);

    const responseFacebook = (response) => {
        if (response.status === "unknown") {
            setFbLoogin(false);
            return;
        }
        console.log(response)
        setWrongDataMsg(null);
        checkUserDataExists(response, "http://localhost:3000/fbUsers");
    }


    const formSubmit = (e) => {
        const form = e.target.closest("form");
        e.preventDefault();
        if(registering) {
           if (!validUsername
                || !validEmail
                || !validPassword
                || !validConfPass) return;
        } 
        let data = {};
        data["username"] = form.Username.value;
        data["email"] = registering ? form.Email.value : null;
        data["password"] = form.Password.value;
        if(loggingin) {
            if(!data.username.length || !data.password.length ){
                setWrongDataMsg("*All fields are required");
                return;
            }
        }
        checkUserDataExists(data, "http://localhost:3000/users");
    }

    return (
        <div className = "sign__form">
            <div className = "main__wrapper">
            <div className = "inner__wrapper">
            <div className = "buttons__wrapper">
            <div className={ loggingin ? "active btn__wrapper" : "btn__wrapper" }>
            <button className = "button"
                onClick={createLoginForm}>
                Login
             </button>
             </div>
             <div className={ registering ? "active btn__wrapper" : "btn__wrapper" }>
            <button className = "button"
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
                        className ="confirm__password__wrapper"
                        name="ConfPass"
                        icon={faLock}
                        inputType="password"
                        placeholder="Confirm password"
                        handleFocusout={handleFocusout}
                        errorMsg={!validConfPass ? ("*Passwords should match") : null}
                    />) : null}

                <div className="sign__btn">
                    <button>{registering ? "Register" : "Log In"}</button>
                    {wrongDataMsg && loggingin ? <p className = "errorMsg">{wrongDataMsg}</p> : null}
                </div>
                {loggingin ? (
                    <div className="facebook__login">
                    <div className = "or__wrapper">
                        <span></span>
                        <span className="or">or</span>
                        <span></span>
                        </div>
                        <FacebookLogin
                            appId="455003679284935"
                            autoLoad={false}
                            fields="name,email,picture"
                            onClick={handleFbClick}
                            callback={responseFacebook}
                        />
                    </div>) : null}
            </form>
            </div>
            </div>
        </div>
    )
}

export default SignForm;


