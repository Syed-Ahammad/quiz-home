import React from "react";
import Card from "../card/Card";

const Home = () => {
  return (
    <div className="px-6 py-4">
      <div className="carousel w-full h-52 mb-3">
        <div id="item1" className="carousel-item w-screen">
          <img src="https://placeimg.com/800/200/arch" className="w-full rounded-lg" />
        </div>
      </div>
      <Card></Card>
    </div>
  );
};

export default Home;
