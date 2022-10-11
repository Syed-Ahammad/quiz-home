import React, { useContext } from "react";
import { TopicContext } from "../../layouts/Main";
import Card from "../card/Card";

const Home = () => {
  const quizTopics = useContext(TopicContext);

  console.log(quizTopics.data);

  return (
    <div className="px-6 py-4">
      <div className="carousel w-full h-52 mb-3">
        <div id="item1" className="carousel-item w-screen">
          <img src="https://placeimg.com/800/200/arch" className="w-full rounded-lg" />
        </div>
      </div>
     <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4"> 
     {
        quizTopics.data.map(topic => <Card key={topic.id} topic={topic}></Card>)
      }
     </div>
    </div>
  );
};

export default Home;
