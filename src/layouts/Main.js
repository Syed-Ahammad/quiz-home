import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/header/Header";

export const TopicContext = createContext("topic");

const Main = () => {
  const questionTopic = useLoaderData();

  return (
    <TopicContext.Provider value={questionTopic}>
      <div className="px-5 py-3">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </TopicContext.Provider>
  );
};

export default Main;
