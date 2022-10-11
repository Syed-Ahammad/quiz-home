import React, { useContext } from "react";
import { TopicContext } from "../../layouts/Main";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Statistics = () => {
  const quizTopics = useContext(TopicContext);
  const data = quizTopics.data;
  console.log(quizTopics)
  return (
    <div>
      <h1>this is statistics component</h1>
      <BarChart width={800} height={400} data={data}>
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
  );
};

export default Statistics;
