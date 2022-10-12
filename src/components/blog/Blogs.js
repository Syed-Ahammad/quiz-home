import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const questions = [
        {
            ques: 'What is the purpose of react router? ',
            ans:`React Router isn't just about matching a url to a function or component: it's about building a full user interface that maps to the URL, so it might have more concepts in it than you're used to. We'll go into detail on the three main jobs of React Router: 1.Subscribing and manipulating the history stack
            2.Matching the URL to your routes
            3.Rendering a nested UI from the route matches`,
            id: 10
        },
        {
            ques: 'How does context api works? ',
            ans:`React Context provides a way to pass data through the component tree without having to pass props down manually at every level. In some sense, it simulates “Global” data in React component Tree.`,
            id: 20
        },
        {
            ques: 'What is useRef? ',
            ans:`Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <div ref={myRef} /> , React will set its .current property to the corresponding DOM node whenever that node changes.`,
            id: 30
        },
    ]
    return (
        <div>
            <h1 className='text-4xl font-bold text-lime-500 text-center m-auto py-5'>Welcome to our Blog page</h1>
            {
                questions.map(question => <Blog key={question.id} question={question}></Blog>)
            }
        </div>
    );
};

export default Blogs;