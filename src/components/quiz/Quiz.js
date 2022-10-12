import React from "react";
import Option from "../option/Option";

const Quiz = ({ quiz }) => {
  const { options, question } = quiz;
  console.log(quiz);
  const ques = question.replace(/(<([^>]+)>)/gi, "");
  return (
    <div className="border-2 border-cyan-400 m-4 text-center p-4">
      <div className="flex justify-between my-4">
        <h1 className="text-xl pb-3">{ques} </h1>
        <button className="mx-2 btn border-none bg-white text-blue-600 hover:bg-green-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
      <form className="grid grid-cols-2 gap-4 justify-center">
        {options.map((option) => (
          <Option key={option} option={option}></Option>
        ))}
      </form>
    </div>
  );
};

export default Quiz;
