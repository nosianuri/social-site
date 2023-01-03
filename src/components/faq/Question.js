import React, { useState } from "react";
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question">
      <div className="question-title">
        <h4 className={`${showAnswer ? "!text-[#FD5D14]" : "!text-[#12232E]"}`}>{title}</h4>
        <button className="question-icons" onClick={handleClick}>
          {showAnswer ? (
            <AiOutlineMinus color="#FD5D14" />
          ) : (
            <AiOutlinePlus color="#006778" />
          )}
        </button>
      </div>
      <div className="question-answer">
        {showAnswer && <p className="px-5 text-[#12232E]">{answer}</p>}
      </div>
    </div>
  );
};

export default Question;