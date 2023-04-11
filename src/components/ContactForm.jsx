import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import imgPixelated from "../content/images/bg-pixelated.webp";
import imgQuev from "../content/icons/quevdev.webp";

const PUBLIC_KEY = import.meta.env.PUBLIC_KEY;
const SERVICE_ID = import.meta.env.PUBLIC_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.PUBLIC_TEMPLATE_ID;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    inputName: "",
    inputEmail: "",
    inputMessage: "",
  });
  const [formValidations, setFormValidations] = useState({
    validatedName: false,
    validatedEmail: false,
    validatedMessage: false,
  });
  const [formValidated, setFormValidated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showValidationName, setShowValidationName] = useState(false);
  const [showValidationEmail, setShowValidationEmail] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  function handleInputChange(event, targetInput) {
    handleFormValidation(targetInput, event.target.value);
    switch (targetInput) {
      case "name":
        setFormData({ ...formData, inputName: event.target.value });
        break;
      case "email":
        setFormData({ ...formData, inputEmail: event.target.value });
        break;
      case "message":
        setFormData({ ...formData, inputMessage: event.target.value });
        break;
      default:
        break;
    }
  }
  function handleFormValidation(targetInput, targetValue) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (targetInput) {
      case "name":
        if (!targetValue) {
          setShowValidationName(true);
          setFormValidations({ ...formValidations, validatedName: false });
          setFormValidated(false);
          return;
        } else {
          setFormValidations({ ...formValidations, validatedName: true });
        }
        break;
      case "email":
        if (!emailRegex.test(targetValue)) {
          setShowValidationEmail(true);
          setFormValidations({ ...formValidations, validatedEmail: false });
          setFormValidated(false);
          return;
        } else {
          setFormValidations({ ...formValidations, validatedEmail: true });
        }
        break;
      case "message":
        if (!targetValue) {
          setShowValidationMessage(true);
          setFormValidations({ ...formValidations, validatedMessage: false });
          setFormValidated(false);
          return;
        } else {
          setFormValidations({ ...formValidations, validatedMessage: true });
        }
        break;
    }
  }
  function sendEmail() {
    const templateParams = {
      user_name: formData.inputName,
      user_email: formData.inputEmail,
      message: formData.inputMessage,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        window.location.href = "/thank-you";
        console.log("Email sent", response.status, response.text);
      })
      .catch((error) => {
        console.log("Email failed to send.", error);
      });
  }
  function handleFormSubmit() {
    if (formValidated) {
      setFormSubmitted(true);
      sendEmail();
    }
  }

  useEffect(() => {
    if (
      formValidations.validatedName &&
      formValidations.validatedEmail &&
      formValidations.validatedMessage
    )
      setFormValidated(true);
  }, [formValidations]);

  // Reset input elements on component mount
  useEffect(() => {
    const targetName = document.getElementById("inputName");
    const targetEmail = document.getElementById("inputEmail");
    const targetMessage = document.getElementById("inputMessage");

    targetName.value = "";
    targetEmail.value = "";
    targetMessage.value = "";
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="150"
      data-aos-duration="500"
      className="flex flex-col mb-12 w-11/12 mx-auto shadow-xl bg-mid rounded-lg items-center justify-center p-8 md:flex-row"
    >
      <ul className="flex flex-col items-center justify-center gap-4 max-w-max md:w-3/4 lg:w-1/2 mx-auto">
        <li
          className={`flex flex-col w-full ${
            formSubmitted ? "deactivated" : ""
          }`}
        >
          <label className="cursor-pointer mr-4" htmlFor="inputName">
            Name
          </label>
          <input
            className="p-2 rounded-xl shadow-xl"
            placeholder=""
            type="text"
            name="inputName"
            id="inputName"
            onChange={(event) => handleInputChange(event, "name")}
          />
          {!formValidations.validatedName && showValidationName && (
            <aside
              data-aos="fade-right"
              data-aos-once="true"
              className="text-cError mt-2 italic"
            >
              <p>🚫 Please provide a name.</p>
            </aside>
          )}
        </li>
        <li
          className={`flex flex-col w-full ${
            formSubmitted ? "deactivated" : ""
          }`}
        >
          <label className="cursor-pointer mr-4" htmlFor="inputEmail">
            Email
          </label>
          <input
            className="p-2 rounded-xl shadow-xl"
            placeholder="example@email.com"
            type="email"
            name="inputEmail"
            id="inputEmail"
            onChange={(event) => handleInputChange(event, "email")}
          />
          {!formValidations.validatedEmail && showValidationEmail && (
            <aside
              data-aos="fade-right"
              data-aos-once="true"
              className="text-cError mt-2 italic"
            >
              <p>🚫 Please provide a proper email address.</p>
            </aside>
          )}
        </li>
        <li
          className={`flex flex-col gap-1 ${
            formSubmitted ? "deactivated" : ""
          }`}
        >
          <label className="cursor-pointer" htmlFor="inputMessage">
            Message 💬
          </label>
          <textarea
            className="p-2 rounded-xl shadow-xl w-full"
            placeholder="..."
            name="inputMessage"
            id="inputMessage"
            cols="30"
            rows="7"
            onChange={(event) => handleInputChange(event, "message")}
          ></textarea>
          {!formValidations.validatedMessage && showValidationMessage && (
            <aside
              data-aos="fade-right"
              data-aos-once="true"
              className="text-cError mt-2 italic"
            >
              <p>🚫 Please provide a message.</p>
            </aside>
          )}
        </li>
        <li className="mb-4 mt-6 w-full text-center">
          {!formSubmitted && !formValidated && (
            <button className="bg-cAccent deactivated text-cBackground shadow-xl font-bold rounded-lg py-2 px-4">
              <p>Please fill out each field.</p>
            </button>
          )}
          {!formSubmitted && formValidated && (
            <button
              className="bg-cAccent text-cBackground shadow-xl font-bold rounded-lg py-2 px-4"
              onClick={handleFormSubmit}
            >
              Submit ✉️
            </button>
          )}
          {formSubmitted && formValidated && (
            <button className="bg-cAccent activated text-cBackground shadow-xl font-bold rounded-lg py-2 px-4">
              <p>Pending...</p>
              <p className="loading-pulse max-w-max m-auto">✉️</p>
            </button>
          )}
        </li>
      </ul>
      <div className="hidden w-2/3 lg:w-1/2 flex-col md:flex">
        <img
          className="hidden h-full object-cover lg:inline rounded-lg shadow-xl mx-16"
          src={imgPixelated}
          alt=""
        />
        <img
          className="lg:hidden rounded-full shadow-xl mx-24"
          src={imgQuev}
          alt=""
        />
      </div>
    </section>
  );
}
