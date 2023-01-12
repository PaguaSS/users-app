import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import formStyles from '../../../resources/css/Forms.module.css';
import { useState } from "react";

const UserForm = props => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("0");

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };

    const isNumber = (n) => { return !isNaN(parseFloat(n)) && !isNaN(n - 0) };

    const formSubmitHandler = event => {
        event.preventDefault();
        let errorMsg = "";

        if (username.trim().length === 0) {
            errorMsg = "Please enter a non-empty username";
        } else if (!isNumber(age)) {
            errorMsg = "Please enter a valid age";
        } else if (parseInt(age) < 0) {
            errorMsg = "Please enter a valid age (a number starting at 0)";
        }

        if (errorMsg.length > 0) {
            props.onShowErrorModal({visible: true, msg: errorMsg});
        } else {
            props.onShowErrorModal({visible: false, msg: ""});
            props.onAddUser({ username: username, age: age }); 
            
            setUsername("");
            setAge("0");
        }
    };

    return (
        <Card>
            <form className={`${formStyles.form} ${formStyles['card-style']}`}>
                <div className={formStyles['form-control']}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={usernameChangeHandler} />
                </div>
                <div className={formStyles['form-control']}>
                    <label>Age (Years)</label>
                    <input type="number" value={age} onChange={ageChangeHandler} />
                </div>
                <Button onClick={formSubmitHandler}>Add User</Button>
            </form>
        </Card>
    )
};

export default UserForm;