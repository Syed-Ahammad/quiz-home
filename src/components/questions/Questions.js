import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../quiz/Quiz';

const Questions = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    const {questions, name} = quiz.data;

    return (
        <div className=''>
            <h1 className='text-2xl text-center font-bold'>Topic: Questions of  {name}</h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 m-4">
          {questions.map(quiz=> <Quiz key={quiz.id} quiz={quiz}></Quiz>)}
          </div>
        </div>
    );
};

export default Questions;