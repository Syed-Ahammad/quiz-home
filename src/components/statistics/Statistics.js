import React, { useContext } from "react";
import { TopicContext } from "../../layouts/Main";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const quizTopics = useContext(TopicContext);
  const data = quizTopics.data;
  console.log(quizTopics)
  return (
    <div className="max-w-full">
      <h1 className="text-4xl font-bold text-center p-4"> There are Rechart of some data.</h1>
      <div className="text-center mt-6">
      <BarChart className="m-auto" width={650} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="total" fill="#8884d8" barSize={30} />
      </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
