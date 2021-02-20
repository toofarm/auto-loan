import React from "react"
import PropTypes from 'prop-types'
import { Control, Errors } from 'react-redux-form'

export default function FormInput(props) {
    const errorMsgs = {
        required: "Please fill in this field",
        isValidCreditScore: "You credit score must be a number between 300 and 850",
        isValidEmail: "Please enter a valid email address"
    }

    return (
        <div className="form-input">
            <label htmlFor={props.model}>{props.label}</label>
            <Errors 
                model={props.model}
                messages={errorMsgs}
                show={(field) => field.touched && !field.focus}
                class="form-input-error"
            />
            <Control 
                model={props.model} 
                id={props.model} 
                type={props.type}
                validators={props.validators}
            />
        </div>
    )
}

FormInput.propTypes = {
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    validators: PropTypes.object
}