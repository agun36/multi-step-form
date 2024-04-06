import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./style.scss";

interface AddOnProps {
    selectedAddOns: string[];
    setSelectedAddOns: React.Dispatch<React.SetStateAction<string[]>>;
    addOns: string[];
    nextStepClicked: boolean;
}

const AddOn: React.FC<AddOnProps> = ({nextStepClicked, selectedAddOns, setSelectedAddOns, addOns}) => {
    const [isChecked, setIsChecked] = useState<{ [key: string]: boolean }>(
       addOns ? addOns.reduce((acc, curr) => ({ ...acc, [curr]: false }), {}): {}
    );

    const handleAddOnClick = (addOn: string) => {
        if (nextStepClicked) {
           return;
        }
        if (selectedAddOns.includes(addOn)) {
            setSelectedAddOns(selectedAddOns.filter(a => a !== addOn));
            setIsChecked(prevState => ({ ...prevState, [addOn]: false }));
        } else {
            setSelectedAddOns([...selectedAddOns, addOn]);
            setIsChecked(prevState => ({ ...prevState, [addOn]: true }));
        }

    };

    return (
        <div className="add-on">
            <div className="add-on-header">
                <h1>Pick add-ons</h1>
                <small>Add-ons help enhance your gaming experience.</small>
            </div>
            <div className="add-on-container">
                {addOns.map((addOn, index) => (
                    <div key={index} className={`container card ${isChecked[addOn] ? 'checked' : 'unchecked'}`}>
                        <Form.Check type="checkbox" id={`check-api-checkbox-${index}`} checked={(selectedAddOns || []).includes(addOn)}>
                            <Form.Check.Input type="checkbox" onChange={() => handleAddOnClick(addOn)} />
                            <Form.Check.Label>{addOn}</Form.Check.Label>
                            <div className="add-on-description">
                                {addOn === 'Online service' ? 'Access to multiplayer games' :
                                addOn === 'Larger storage' ? 'Extra 1TB of cloud save' :
                                'Custom theme on your profile'}
                            </div>
                        </Form.Check>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AddOn;