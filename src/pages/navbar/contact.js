import React from "react";
import "../../css/pages/contact.css"

const Contact = () => {
    return (
        <>
            <h3>Contact</h3>
            <div id="formFieldsWrapper">
                <div className="formFields">
                    <p className="formFieldNames">Name</p>
                    <input required></input>
                </div>
                <div className="formFields">
                    <p className="formFieldNames">Email Address</p>
                    <input required></input>
                </div>
                <div className="formFields">
                    <p className="formFieldNames">Subject</p>
                    <input></input>
                </div>
                <div className="formFields">
                    <p className="formFieldNames">Message</p>
                    <input id="messageInput" required></input>
                </div>
                <p><button className="submitBtn">submit</button></p>
            </div>
        </>
    )
}

export default Contact;
