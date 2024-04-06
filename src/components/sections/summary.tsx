import { useState } from "react";
import Table  from "react-bootstrap/Table";
import './style.scss'
interface SummaryProps {
    selectedPlans: string[];
    selectedAddOns: string[];
}
export default function Summary({ selectedPlans, selectedAddOns }: SummaryProps) {
    const [isMonthly, setIsMonthly] = useState<boolean>(true);
   
    const handleBillingCycleChange = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setIsMonthly(!isMonthly);
    };
    return (
        <div className="summary">
            <div className="summary-header">
                <h1>Finishing up</h1>
                <small>Double-check everything looks OK before confirming.</small>
            </div>

            <>
                {selectedPlans && selectedPlans.map((plan, index) => {
                    return (
                        <Table key={index} responsive className="summary-table " >
                            <thead className="summary-table-head">
                                <tr className="summary-table-row">
                                   <>
                                   <th className="summary-table-title">{plan}({isMonthly ? 'Monthly' : 'Yearly'})
                                    </th>
                                    <td>{isMonthly ? '$9/mo' : '$90/yr'}</td>
                                   </>
                                </tr>
                                 <tr>
                                    <th><a href="#" onClick={handleBillingCycleChange}>Change</a></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody  className="summary-table-body">
                                {selectedAddOns.map((addOn, index) => (
                                    <tr key={index} className="summary-table-ro add-on-row">
                                        <>
                                        <td className="summary-table-title">{addOn}</td>
                                        <td>{isMonthly ? '$1/mo' : '$10/yr'}</td>
                                        </>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="summary-table-row">
                                    <>
                                    <td className="summary-table-title">Total (per {isMonthly ? 'month' : 'year'})</td>
                                    <td>{isMonthly ? '$9/mo' : '$90/yr'}</td>
                                    </>
                                </tr>
                            </tfoot>
                        </Table>)
                }
                )}
                
            </>

        </div>
        
    );
}