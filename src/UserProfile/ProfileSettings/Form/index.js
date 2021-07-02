import React, { useState } from 'react';
import InputField from '../InputFields/index';
import { updateCurrentUser } from '../../../actions/currentUser';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUserToPreview } from '../../../actions/userToPreview';


const Form = ({ userData }) => {
    const [errorMsg, setErrorMsg] = useState();
    const [changedData, setChangedData] = useState({});
    const url = `http://localhost:3000/users`;
    const dispatch = useDispatch();
    const history = useHistory();


    const validateUsername = value => {
        if (!value.length) {
            setErrorMsg("*Username can not be empty");
            return false;
        }
        setErrorMsg(null);
        return true
    }


    const handleBlur = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "username" && !validateUsername(value)) return;

        if (name.includes("about")) {
            let newName = name.split(".")[1];
            setChangedData({
                ...changedData,
                about: {
                    ...userData.about,
                    [newName]: value
                }
            })
        } else {
            setChangedData({
                ...changedData,
                [name]: value,
            })
        }
    }

    const handleInputChange = (value) => {
        validateUsername(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!changedData) return;
        let bool = true;
        for (let key in changedData) {
            if (changedData[key] !== userData[key]) {
                bool = false;
                break;
            }
        }
        if (!bool) {
            if (errorMsg) {
                return;
            }
            fetch(`${url}?id=${userData.id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error("wrong request")
                })
                .then(data => {
                    if (data.length && data[0].id !== userData.id) {
                        setErrorMsg("Username is already picked. Choose another username")
                    } else {
                        setErrorMsg(null);
                        fetch(`${url}/${userData.id}`, {
                            method: "PATCH",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify({ ...userData, ...changedData }),
                        })
                            .then(response => response.json())
                            .then(data => {
                                dispatch(updateCurrentUser(data));
                                dispatch(setUserToPreview(data));
                                history.push('/profile/about')
                            })
                            .catch(error => console.log(error));
                    }
                })
                .catch(error => console.log(error.message))
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <InputField
                labelName="Username"
                type="text"
                name="username"
                value={userData.username}
                handleBlur={handleBlur}
                errorMsg={errorMsg}
                handleInputChange={handleInputChange}
            />
            <InputField
                labelName="Date of Birth"
                type="text"
                name="about.birthDate"
                value={userData.about ? userData.about.birthDate ? userData.about.birthDate : "" : ""}
                pattern="(?:19|20)[0-9]{2}/(?:(?:0[1-9]|1[0-2])/(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])/(?:30))|(?:(?:0[13578]|1[02])-31))"
                handleBlur={handleBlur}
                handleInputChange={handleInputChange}
            />
            <InputField
                labelName="Country and City"
                type="text"
                name="about.livesIn"
                value={userData.about?.livesIn ? userData.about.livesIn : ""}
                handleBlur={handleBlur}
                handleInputChange={handleInputChange}
            />
            <InputField
                labelName="Work"
                type="text"
                name="about.employment"
                value={userData.about?.employment ? userData.about.employment : ""}
                handleBlur={handleBlur}
                handleInputChange={handleInputChange}
            />
            <InputField
                labelName="Education"
                type="text"
                name="about.education"
                value={userData.about?.education ? userData.about.education : ""}
                handleBlur={handleBlur}
                handleInputChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form
