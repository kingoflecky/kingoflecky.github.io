import { useState } from "react";
import "../css/components/contactForm.css";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/7400a8d0-09cd-11ee-8267-d3eb100789b4";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      console.log(name, email, subject, message);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h3>Thank you!</h3>
        <p>Your message has sent.</p>
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} action={FORM_ENDPOINT} method="POST">
        <div id="formFieldsWrapper">
          <div className="formFields">
            <label htmlFor="name" className="formFieldNames">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>

          <div className="formFields">
            <label htmlFor="email" className="formFieldNames">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>

          <div className="formFields">
            <label htmlFor="subject" className="formFieldNames">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            ></input>
          </div>

          <div className="formFields">
            <label htmlFor="message" className="formFieldNames">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            className="submitBtn"
            type="submit"
            name="submit"
            id="submit"
            value="submit"
          >
            {" "}
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
