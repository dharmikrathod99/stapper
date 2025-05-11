import { useEffect, useRef, useState } from "react";

function CheckoutStepper({ step = [] }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);



    const handleNext = () => {
        setCurrentStep((prevStep) => {
            if (prevStep === step.length) {
                setIsComplete(true);
                return prevStep;
            } else {
                return prevStep + 1;
            }
        });
    };
    const ActiveComponent = step[currentStep - 1]?.Component;




    return (
        <>
            <div className="stepper" key={step.name}>
                {step.map((step, index) => {
                    return (
                        <div className="stepper ">
                            <div className="step-number">
                                {currentStep > index + 1 || isComplete ? (
                                    <span>✔</span>
                                ) : (
                                    index + 1
                                )}
                            </div>
                            <div className="step-name"><h2 className="margine">--------------------------</h2></div>
                        </div>
                    );
                })}
            </div>

            <div className="container  bg-black ">
                <ActiveComponent />
            </div>

            {
                !isComplete && (
                    <div className="container bg-black d-flex justify-content-center">
                        <button className="btn btn-primary mt-3 bg" onClick={handleNext}>
                            {currentStep === step.length ? "submit" : "Next"}
                        </button>
                    </div>
                )
            }
        </>
    );
};

export default CheckoutStepper;