import React from "react";

const Blog = ({question}) => {
    const {ques, ans} = question;
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-3/4 m-auto"
      >
        <div className="collapse-title text-xl font-medium">
         {ques}
        </div>
        <div className="collapse-content">
          <p>{ans}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
