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
          <div className="message">{`${stepNumber}:${
            messages[stepNumber - 1]
          }`}</div>

          {/* Buttons to navigate between steps */}
          <div className="buttons">
            <button className="btn" onClick={handlePrevious}>
              Previous
            </button>
            <button className="btn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
