import { SetStateAction, useState } from "react";
import FormField from "./formField";
import "./style.scss"
interface AboutProps {
    submitted: boolean;
}
export default function About({ submitted }: AboutProps) {
    const [enteredName, setEnterName] = useState<string>("");
    const [enteredEmail, setEnteredEmail] = useState<string>("");
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState<string>("");
    const emailNotValid = submitted && !enteredEmail.includes("@")
    const nameNotValid = submitted && enteredName.trim().length < 3;
    const emailIsValid = enteredEmail.includes("@");
    const nameIsValid = enteredName.trim().length >= 3;
    const phoneNumberNotValid = submitted && !/^(\+234)\d{11}$/.test(enteredPhoneNumber);
    const phoneNumberIsValid = /^(\+234)\d{11}$/.test(enteredPhoneNumber);

    const handleInputChange= (identifier: string, value: SetStateAction<string>) => {
        if (identifier === "email") {
          setEnteredEmail(value);
        } else if (identifier === "name") {
          setEnterName(value);
        } else if (identifier === "phoneNumber") {
          setEnteredPhoneNumber(value);
        }else{
            console.log("Invalid identifier")
        }
      }

    return (
      <div className="about">
        <div className="about-header">
          <h1>Personal info</h1>
          <small>Please provide your name, email address, and phone number</small>
        </div>
        <FormField label="Name" placeholder="Enter your name" invalid={nameNotValid} success={submitted && nameIsValid} onChange={(e) => handleInputChange("name", e.target.value)}/>
        <FormField label="Email" placeholder="Enter your email" invalid={emailNotValid} success={submitted && emailIsValid} onChange={(e) => handleInputChange("email", e.target.value)}/>
        <FormField  label="Phone Number" placeholder="Enter your phone number" invalid={phoneNumberNotValid} success={submitted && phoneNumberIsValid} onChange={(e) => handleInputChange("phoneNumber", e.target.value)}/>
      </div>
    );
  }