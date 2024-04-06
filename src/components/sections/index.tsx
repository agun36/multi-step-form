import React, { Dispatch, SetStateAction } from 'react';
import './style.scss'

import DesktopSections from './desktop';
import { useMediaQuery } from 'react-responsive';
import MobileSections from './MobileSect';

interface SectionsProps {
    children?: React.ReactNode;
    activeTab?: string | undefined;
    selectedPlans: string[];
    setSelectedPlans: Dispatch<SetStateAction<string[]>>;
    selectedAddOns: string[];
    selectedCard: string;
    setSelectedAddOns: Dispatch<SetStateAction<string[]>>;
    submitted: boolean;
    showSummary: boolean;
    showThankYou: boolean;
    handleNextStepModified: () => void;
    handleNextStep: () => void;
    handleClick: () => void;
    handleCardClick: (title: string) => void;
    addOns: string[];
    nextStepClicked: boolean;
}



export default function Sections({ handleNextStepModified,  showSummary, showThankYou, nextStepClicked, selectedCard, selectedPlans, setSelectedPlans, setSelectedAddOns, submitted, handleNextStep, selectedAddOns, activeTab, addOns, handleClick, handleCardClick }: SectionsProps) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
      })
      const isMobile = useMediaQuery(
          {
            query: '(max-width: 768px)'
          }
      )
    
    return (
       <>
        {isDesktopOrLaptop && <DesktopSections  handleNextStepModified={handleNextStepModified} showSummary={showSummary} showThankYou={showThankYou}  nextStepClicked={nextStepClicked} handleCardClick={handleCardClick} selectedCard={selectedCard} addOns={addOns}  selectedPlans={selectedPlans} setSelectedPlans={setSelectedPlans} selectedAddOns={selectedAddOns} setSelectedAddOns={setSelectedAddOns} submitted={submitted}  handleClick={handleClick}/>}
        {isMobile && <MobileSections nexStepClicked={nextStepClicked} handleClick={handleClick} handleCardClick={handleCardClick} selectedCard={selectedCard} addOns={addOns} activeTab={activeTab} selectedPlans={selectedPlans} setSelectedPlans={setSelectedPlans} selectedAddOns={selectedAddOns} setSelectedAddOns={setSelectedAddOns} submitted={submitted} handleNextStep={handleNextStep} showSummary={showSummary} showThankYou={showThankYou} />}
       </>
    )
}