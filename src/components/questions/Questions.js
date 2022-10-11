import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../quiz/Quiz';

const Questions = () => {
    const quiz = useLoaderData();
    console.log(quiz.data);
    return (
        <div>
            <h1>questions component</h1>
            <Quiz></Quiz>
        </div>
    );
};

export default Questions;