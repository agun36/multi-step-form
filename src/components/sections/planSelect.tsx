import CardSection from "./cardSection";
import arcadeImg from '../../assets/images/icon-arcade.svg';
import advanceImg from '../../assets/images/icon-advanced.svg';
import './style.scss'
import { useState } from "react";
import MonthlySelect from "./monthlySelect";



export default function PlanSelect({ handleCardClick, selectedCard}: {setSelectedPlans: (plans: string[]) => void, selectedCard: string, handleCardClick: (title: string) => void}) {
    const [change, setChange] = useState<boolean>(false);
    const [isMonthly, setIsMonthly] = useState<boolean>(true);



    const switchChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setChange(event.target.checked)
    }
    const handleBillingCycleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsMonthly(event.target.checked);
      };
    return (
        <div className="plan-wrapper">
            <div className="plan-header">
                <h1>Select your plan</h1>
                <small>You have the option of monthly or yearly billing</small>
            </div>
            <div className="card-section">
                <CardSection title="Arcade" montly={change ? "$9/yr" :'$9/mo'} image={arcadeImg} active={selectedCard === 'Arcade'} onClick={() => handleCardClick('Arcade')}/>
                <CardSection title="Advanced" montly={change ? "$12/yr" :'$12/mo'} image={advanceImg} active={selectedCard === 'Advanced'} onClick={() => handleCardClick('Advanced')}/>
                <CardSection title="Pro" montly={change ? '$15/yr' :'$15/mo'} image={arcadeImg} active={selectedCard === 'Pro'} onClick={() => handleCardClick('Pro')} />
            </div>
            <div className="plan-button">
                <MonthlySelect isMonthly={isMonthly}  change={change} switchChange={switchChange} handleBillingCycleChange={handleBillingCycleChange}/>
            </div>
        </div>
    )
}