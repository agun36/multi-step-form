import {  Button, Tab } from "react-bootstrap";
import  { Dispatch, SetStateAction} from 'react';
import About from "./about";
import './style.scss'
import PlanSelect from "./planSelect";
import AddOn from "./addOn";
import Summary from "./summary";
import ModalBox from "../../pages/thankYou";




export default function DesktopSections({  handleNextStepModified, showSummary, showThankYou, nextStepClicked, handleCardClick, selectedCard, selectedPlans, setSelectedPlans, selectedAddOns, setSelectedAddOns, submitted,  addOns, handleClick}: { showSummary: boolean, showThankYou: boolean, selectedPlans: string[], setSelectedPlans: Dispatch<SetStateAction<string[]>>, selectedAddOns: string[], setSelectedAddOns: Dispatch<SetStateAction<string[]>>, submitted: boolean, addOns: string[], handleClick: () => void, handleCardClick: (title: string) => void, selectedCard: string, nextStepClicked: boolean, handleNextStepModified: () => void}) {
    return (
        <div  className=" section-container">
            <Tab.Content>
                <Tab.Pane eventKey="first">
                        <About submitted={submitted}  />
                        <footer className="m-l">
                        <Button type="submit" className="btn-next " onClick={handleClick}> 
                        Next Step
                        </Button>
                        </footer>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                        <PlanSelect handleCardClick={handleCardClick} selectedCard={selectedCard} setSelectedPlans={setSelectedPlans}/>
                        <footer>
                            <Button className="btn-back">
                                Go Back
                            </Button>
                            <Button className="btn-next">
                                Next Step
                            </Button>

                        </footer>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                        <AddOn  nextStepClicked={nextStepClicked}  addOns={addOns} selectedAddOns={selectedAddOns} setSelectedAddOns={setSelectedAddOns} />
                        <footer>
                            <Button className="btn-back">
                                Go Back
                            </Button>
                            <Button className="btn-next">
                                Next Step
                                </Button>

                        </footer>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                        {showSummary && !showThankYou && (
                           <>
                           <Summary selectedPlans={selectedPlans} selectedAddOns={selectedAddOns}/>
                           <footer>
                           <Button className="btn-back">
                               Go Back
                           </Button>
                           <Button className="btn-next" onClick={handleNextStepModified}>
                               Next Step
                           </Button>

                       </footer>
                           </>
                        )}

                        {showThankYou && (
                            <ModalBox addOns={addOns} selectedAddOns={selectedAddOns} selectedPlans={selectedPlans} />
                        )}
                        
                </Tab.Pane>
            </Tab.Content>         
        </div>
    )
}