import { React } from "react";
import IntakeForm from './IntakeForm'
import { dispatchFormSubmit } from '../functions'

export default function AutoDetails(props) {

    return (
        <div className="auto-details">
            <p className="marketing-copy">Here is some marketing copy. It explains why you should buy this.</p>
            <IntakeForm submitHandler={dispatchFormSubmit} />
        </div>
    )
}