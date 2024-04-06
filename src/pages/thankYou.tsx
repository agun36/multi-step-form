import thankYou from "../assets/images/icon-thank-you.svg";
import "./style.scss";

interface AddOnProps {
    addOns: string[];
    selectedAddOns: string[];
    selectedPlans: string[];
}
const ModalBox: React.FC<AddOnProps> = () => {
   
 

    return (
        <div className="add-on-thank">
        
        <img src={thankYou} alt="thank you" />
        <h1>Thank you!</h1>
            <p>
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
                support, please feel free to email us at support@me.com.
            </p>
        </div>
    )
}

export default ModalBox;