import Tab  from "react-bootstrap/Tab";
import SideBar from "../components/sideBar";
import Sections from "../components/sections";
import "./style.scss"
import { Dispatch, SetStateAction, useState } from "react";

import { useMediaQuery } from "react-responsive";
import FooterSection from "@/components/footer/FooterSection";
interface HomePagesProps {
    selectedPlans: string[];
    setSelectedPlans: Dispatch<SetStateAction<string[]>>;
    setSelectedAddOns: Dispatch<SetStateAction<string[]>>
    selectedAddOns: string[];
    addOns: string[]
    submitted: boolean;
    selectedCard: string;
    showSummary: boolean;
    showThankYou: boolean;
    handleNextStep: () => void;
    handleClick: () => void;
    handleNextStepModified: () => void;
    handleCardClick: (title: string) => void;
    nextStepClicked: boolean;
}

export default function HomePages({handleNextStepModified,  showSummary, showThankYou, nextStepClicked, selectedCard,selectedPlans, setSelectedPlans, selectedAddOns, setSelectedAddOns, submitted, handleNextStep, addOns, handleClick, handleCardClick}: HomePagesProps) {
    const [activeTab, setActiveTab] = useState('first');

    const isMobile = useMediaQuery(
        {
            query: '(max-width: 768px)'
        }
    )


    return (
        <main className='page-wrapper'>
            <Tab.Container activeKey={activeTab} onSelect={(k) => k ? setActiveTab(k) : null} id="left-tabs-example" defaultActiveKey="first">
                <div className="page-container">
                <SideBar/>
                <Sections  handleNextStepModified={handleNextStepModified}  showSummary={showSummary} showThankYou={showThankYou}  nextStepClicked={nextStepClicked} handleCardClick={handleCardClick} selectedCard={selectedCard}  handleClick={handleClick} activeTab={activeTab} selectedPlans={selectedPlans} setSelectedPlans={setSelectedPlans} setSelectedAddOns={setSelectedAddOns} submitted={submitted} handleNextStep={handleNextStep} selectedAddOns={selectedAddOns} addOns={addOns} /> 
                {
                    isMobile && <FooterSection showSummary={showSummary} handleNextStepModified={handleNextStepModified} handleClick={handleClick}  activeTab={activeTab}/>
                }
                </div>
        </Tab.Container>
        </main>
    )
}