import { React, useState } from "react";
import { Form } from 'react-redux-form'
import FormInput from './FormInput'
import { required } from "../functions"
import { useHistory } from "react-router-dom"

const isValidCreditScore = (num) => {
    return (num >= 300 && num <= 850) 
}

export default function IntakeForm(props) {
    const [formValidity, setFormValidity] = useState(false)
    const history = useHistory()

    const submitHandler = () => {
        history.push("/approval-form-results")
    }

    const isFormValid = (purchasePrice, make, model, yearlyIncome, creditScore) => {
        if (required(purchasePrice) &&
        required(make) &&
        required(model) &&
        required(yearlyIncome) &&
        required(creditScore)) {
            setFormValidity(true)
        } else {
            setFormValidity(false)
        }
    
    }

    return (
        <Form
            model="intake"
            validators={{ 
                '': ({purchasePrice, make, model, yearlyIncome, creditScore}) => isFormValid(purchasePrice, make, model, yearlyIncome, creditScore)
            }}
            class="app-form"
        >
            <FormInput 
                model="intake.purchasePrice"
                type="number"
                label="Auto Purchase Price"
                validators={{required}}
            />
            <FormInput 
                model="intake.make"
                type="text"
                label="Auto Make"
                validators={{required}}
            />
            <FormInput 
                model="intake.model"
                type="text"
                label="Auto Model"
                validators={{required}}
            />
            <FormInput 
                model="intake.yearlyIncome"
                type="number"
                label="Annual Income (estimated)"
                validators={{required}}
            />
            <FormInput 
                model="intake.creditScore"
                type="number"
                label="Credit Score (estimated)"
                validators={{required, isValidCreditScore}}
            />
            <button type="submit" disabled={!formValidity} onClick={() => { submitHandler() }}>
                Next
            </button>
        </Form>
    )
}