import Tab from "react-bootstrap/Tab";
import { Dispatch, SetStateAction } from 'react';
import About from "./about";
import './style.scss'
import PlanSelect from "./planSelect";
import AddOn from "./addOn";
import Summary from "./summary";
import ModalBox from "../../pages/thankYou";





export default function MobileSections({showSummary, showThankYou, nexStepClicked, selectedPlans, setSelectedPlans, selectedAddOns, setSelectedAddOns, submitted, addOns, handleCardClick, selectedCard}: { showSummary: boolean, showThankYou: boolean, selectedPlans: string[], setSelectedPlans: Dispatch<SetStateAction<string[]>>, selectedAddOns: string[], setSelectedAddOns: Dispatch<SetStateAction<string[]>>, submitted: boolean, handleNextStep: () => void, activeTab: string | undefined, addOns: string[], handleClick: () => void, handleCardClick: (title: string) => void, selectedCard: string, nexStepClicked: boolean}) {
    return (
        <div className=" section-container-mobile">
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <About submitted={submitted} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <PlanSelect handleCardClick={handleCardClick} selectedCard={selectedCard} setSelectedPlans={setSelectedPlans}   />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <AddOn nextStepClicked={nexStepClicked} addOns={addOns} selectedAddOns={selectedAddOns} setSelectedAddOns={setSelectedAddOns} />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                    {
                        showSummary && !showThankYou &&
                        <Summary selectedAddOns={selectedAddOns} selectedPlans={selectedPlans} />
                    }
                    {showThankYou && (
                            <ModalBox addOns={addOns} selectedAddOns={selectedAddOns} selectedPlans={selectedPlans} />
                        )}
                </Tab.Pane>
            </Tab.Content>
            
        </div>
    )
}