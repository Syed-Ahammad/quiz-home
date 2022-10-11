import React from "react";
import Option from "../option/Option";

const Quiz = ({ quiz }) => {
  const { options, question } = quiz;
  console.log(quiz)
  const ques = question.replace(/(<([^>]+)>)/gi, "");
  return (
    <div className="border-2 border-cyan-400 m-4 text-center p-4">
      <h1 className="text-xl pb-3">{ques}</h1>
      <form className="grid grid-cols-2 gap-4 justify-center">
       {options.map(option => <Option key={option} option={option}></Option>)}
      </form>
    </div>
  );
};

export default Quiz;
