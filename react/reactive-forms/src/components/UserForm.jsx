import { useState } from "react";
import styles from "../styles/UserForm.module.css";
import {FIRSTNAMEERROR, LASTNAMEERROR, EMAILERROR, PASSWORDERROR, CONFIRMPASSWORDERROR} from '../utils/userValidations';
const UserForm = () => {

    const defaultFormData = {
        firstName: {value: "", error: ""},
        lastName: {value: "", error: ""},
        email: {value: "", error: ""},
        password: {value: "", error: ""},
        confirmPassword: {value: "", error: ""}
    }
    const [formData, setFormData] = useState(defaultFormData); 

    const createUser = (e) => {
        e.preventDefault();
        setFormData(defaultFormData);
    }

    const onChangeHandler = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        let formDataCopy = structuredClone(formData); 
        formDataCopy[key].value = value
        setFormData(validateForm(formDataCopy))
    }

    const validateForm = (formDataCopy) => {
        
        // console.log(formDataCopy);
        if (formDataCopy.firstName.value.length < 3 && formDataCopy.firstName.value.length !== 0) {
            formDataCopy.firstName.error = FIRSTNAMEERROR
        } else {
            formDataCopy.firstName.error = "";
        }

        if (formDataCopy.lastName.value.length < 3 && formDataCopy.lastName.value.length !== 0) {
            formDataCopy.lastName.error = LASTNAMEERROR;
        } else {
            formDataCopy.lastName.error = "";
        }

        if (formDataCopy.email.value.length < 8 && formDataCopy.email.value.length !== 0) {
            formDataCopy.email.error = EMAILERROR;
        } else {
            formDataCopy.email.error = "";
        }
        if (formDataCopy.password.value.length < 8 && formDataCopy.password.value.length !== 0) {
            formDataCopy.password.error = PASSWORDERROR;
        } else {
            formDataCopy.password.error = "";
        }

        if (formDataCopy.confirmPassword.value !== formDataCopy.password.value) {
            formDataCopy.confirmPassword.error = CONFIRMPASSWORDERROR;
        } else {
            formDataCopy.confirmPassword.error = "";
        }
        console.log(formDataCopy);
        return formDataCopy
    }

    return (
        <>
            <form onSubmit={createUser}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" onChange={onChangeHandler} type="text" value={formData.firstName.value} />
                    <p>{formData.firstName.error}</p>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" onChange={onChangeHandler} type="text" value={formData.lastName.value} />
                    <p>{formData.lastName.error}</p>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input name="email" onChange={onChangeHandler} type="text" value={formData.email.value} />
                    <p>{formData.email.error}</p>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input name="password" onChange={onChangeHandler} type="password" value={formData.password.value} />
                    <p>{formData.password.error}</p>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input name="confirmPassword" onChange={onChangeHandler} type="password" value={formData.confirmPassword.value} />
                    <p>{formData.confirmPassword.error}</p>
                </div>
                <div className={styles.submitGroup}>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default UserForm;