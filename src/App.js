import { useState } from "react";

//Exporting App COmponent
export default function App() {
  //Defining all the message
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  //Definng the state for step number
  const [stepNumber, setStep] = useState(1);

  //Defining state for close button
  const [isOpen, setIsOpen] = useState(true);

  //Function to handle previous button
  const handlePrevious = () => {
    if (stepNumber > 1) {
      setStep(stepNumber - 1);
    }
  };

  //Function to handle next button
  const handleNext = () => {
    if (stepNumber < 3) {
      setStep(stepNumber + 1);
    }
  };

  //Function to handle close button
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>

      {/* Conditional rendering of steps and messages based on isOpen state */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* Highlights the active step based on stepNumber */}
            <div className={`${stepNumber === 1 ? "active" : ""}`}>1</div>
            <div className={`${stepNumber === 2 ? "active" : ""}`}>2</div>
            <div className={`${stepNumber === 3 ? "active" : ""}`}>3</div>
          </div>

          {/* Display the current message based on stepNumber */}
          <StepMessage stepNumber={stepNumber}>
            {messages[stepNumber - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() =>
                  alert(`Learn how to ${messages[stepNumber - 1]}`)
                }
              >
                Learn How{" "}
              </Button>
            </div>
          </StepMessage>

          {/* Buttons to navigate between steps */}
          <div className="buttons">
            <Button onClick={handlePrevious} bgColor="#7950f2" textColor="#fff">
              <span>👈 Previous</span>
            </Button>

            <Button onClick={handleNext} bgColor="#7950f2" textColor="#fff">
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ onClick, textColor, bgColor, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ stepNumber, children }) {
  return (
    <p className="message">
      <h3>Step {stepNumber}</h3>
      {children}
    </p>
  );
}
