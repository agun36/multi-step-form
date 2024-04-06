import { Form } from "react-bootstrap";
import './style.scss'
import React from "react";


interface MonthlySelectProps {
     change: boolean;
     isMonthly: boolean;
     switchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
     handleBillingCycleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
const MonthlySelect: React.FC<MonthlySelectProps> = ({change, switchChange}) => {
    

    return (
        <div className="monthly-select">
            <Form className="form-monthly">
                <Form.Label className={change ? "disable" : "active"}> Monthly</Form.Label>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    value={change.toString() }
                    onChange={switchChange}
                />
                <Form.Label className={change ? "active" : "disable"}>Yearly</Form.Label>
            </Form>
        </div>
    )
}

export default MonthlySelect;