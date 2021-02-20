import { React } from "react";
import { Form } from 'react-redux-form';
import FormInput from "./FormInput"
import { required } from "../functions"

export default function SignUpForm(props) {
    
    const submitHandler = () => {
        console.log("submitting form")
    }

    const isValidEmail = (v) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(v).toLowerCase());
    }
    
    return (
        <Form
            model="signUp"
            onSubmit={() => submitHandler()}
            class="app-form"
        >
            <FormInput 
                model="signup.email"
                type="string"
                label="Email address"
                validators={{required, isValidEmail}}
            />
            <FormInput 
                model="signup.password"
                type="string"
                label="Password"
                validators={{required}}
            />
            <FormInput 
                model="signup.passwordConfirm"
                type="string"
                label="Confirm your password"
                validators={{required}}
            />
            <button type="submit">
                Sign Up
            </button>
        </Form>
    )
}