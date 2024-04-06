import Button  from "react-bootstrap/Button";

const FooterSection = ({activeTab, showSummary, handleNextStepModified, handleClick}: {activeTab: string, showSummary: boolean, handleNextStepModified: () => void, handleClick: () => void }) => {
    const footerClass = showSummary ? "footer-none": "footer"
    
    return (
                    <footer className={footerClass}>
                    {activeTab === 'first' && (
                        <div className="m-l">
                            <Button className="btn-next " onClick={handleClick}> 
                                Next Step
                            </Button>
                        </div>
                    )}
                    {activeTab === 'second' && (
                        <>
                            <Button className="btn-back">
                                Go Back
                            </Button>
                            <Button className="btn-next" >
                                Next Step
                            </Button>
                        </>
                    )}
                    {activeTab === 'third' && (
                        <>
                            <Button className="btn-back">
                                Go Back
                            </Button>
                            <Button className="btn-next" >
                                Next Step
                            </Button>
                        </>
                    )}
                    {activeTab === 'fourth' && (
                       
                            showSummary && (
                                <>
                                <Button className="btn-back">
                                    Go Back
                                </Button>
                                <Button className="btn-next" onClick={handleNextStepModified}>
                                    Next Step
                                </Button>
                                </>
                            )
                    )}
                </footer>
            
    );
};

export default FooterSection;