import React from 'react';
import { Form } from "react-bootstrap";
import "./style.scss"

interface FormFieldProps {
    label: string;
    placeholder: string;
    invalid: boolean;
    success: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, invalid, success, onChange }) => { 
    let message = "";
    let labelClasses = " form-field ";
    let inputClasses = " form-input ";

    if (invalid){
        labelClasses += " invalid "
        inputClasses += " invalid "
        message = "This field is required"
    }else if (success){
        labelClasses += " success "
        inputClasses += ' success '
        message = "This field is valid"
    } 
    
    return (
    
    <Form className='form-container'>
        <p className={labelClasses}>
        <label className={labelClasses}>{label}</label>
        <small className='message'>{message}</small>
        </p>
        <Form.Control className={inputClasses} type="text" placeholder={placeholder} onChange={onChange} />
    </Form>
)};

export default FormField;