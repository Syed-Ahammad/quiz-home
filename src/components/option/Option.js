import React from "react";

const Option = ({option, handleToShowResult}) => {
  return (
      <label className="border-2 flex justify-between items-center p-3 border-cyan-200"><span>{option}</span>
        <input  onClick={()=>handleToShowResult(option)} type="radio" name="radio-3" className="radio radio-secondary"/>
      </label>
  );
};

export default Option;
