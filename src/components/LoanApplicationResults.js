import { React } from "react";
import SignUpForm from "./SignUpForm"

export default function LoanApplicationResults(props) {
    const loanApproved = false
    
    return (
        <div className="application-results">
            {loanApproved ? <SignUpForm /> :
                <div className="application-denied">
                    <h2>Your loan application was rejected</h2>
                    We're sorry, but we're not able to provide you with an auto loan at this time. For more information, please contact our customer service team at 555-555-0055
                </div>
            }
        </div>
    )
}