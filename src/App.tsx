
import {  useCallback,  useState } from "react";
import HomePages from "./pages/HomePages";
   
export default function App() {
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [selections, setSelections] = useState<Array<{plans: string[], addOns: string[]}>>([]);
  const [nextStepClicked, setNextStepClicked] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<string>('');
  const [showSummary, setShowSummary] = useState<boolean>(true);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
    
   const addOns = ['Online service', 'Larger storage', 'Customizable profile'];
 
  const handleNextStep = useCallback(() => {
    if (nextStepClicked ) {
      setNextStepClicked(false);
      return;
    }
    setSelections([...selections, {plans: selectedPlans, addOns: selectedAddOns}]);
    // Set nextStepClicked to true after handleNextStep is called
  }, [selectedPlans, selectedAddOns, selections, nextStepClicked, setNextStepClicked]);

  const handleNextStepModified = () => {
    if(selectedPlans.length > 0 && selectedAddOns.length > 0) {
      handleNextStep();
      setShowSummary(false);
      setShowThankYou(true);
    } else {
      alert('Please make a selection before proceeding.');
    }
  }
  function handleClick() {
    setSubmitted(true);
  }
  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    setSelectedPlans([title]);
};
  return (
    <div  className="Apps" data-bs-theme='blue'>
    <HomePages  showThankYou={showThankYou} 
    showSummary={showSummary} 
    handleNextStepModified={handleNextStepModified} nextStepClicked={nextStepClicked} handleCardClick={handleCardClick} selectedCard={selectedCard}  addOns={addOns} selectedPlans={selectedPlans} setSelectedPlans={setSelectedPlans} setSelectedAddOns={setSelectedAddOns} selectedAddOns={selectedAddOns} handleNextStep={handleNextStep} submitted={submitted} handleClick={handleClick}/>
    </div>
  )
}