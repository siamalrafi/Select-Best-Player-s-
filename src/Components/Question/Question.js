import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse mb-5 p-5 pb-10 bg-slate-700 text-white w-full collapse-arrow border border-base-300 rounded-box">
                <div className="collapse-title text-xl ">
                    How Does React Work?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}>
                        React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM
                        <br />t's important to note that ReactJS is not a JavaScript framework. That's because it's only responsible for rendering the components of an application's view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.
                    </p>
                </div>
            </div>
            <div tabIndex={1} className="collapse mb-5 p-5 pb-10 bg-slate-700 text-white w-full collapse-arrow border border-base-300 rounded-box">
                <div className="collapse-title text-xl ">
                    What is the difference between props and state in React component?
                </div>
                <div className="collapse-content">
                    <p tabIndex={1}>
                        React is an opensource JavaScript library that offers a visual overview of the JavaScript architecture for conventional MVC. React promises programmers a model in which substrates cannot directly influence enclosing components—data are downstream, data changes in HTML are efficiently modified, and the DOM is abstracted to boost performance using Virtual DOM.

                        How can we access data from the previous component if the data is just being flowed from components to components? The answer is props. React uses data transmission props that we need to transfer to various components.

                        The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.

                        A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.


                    </p>
                </div>
            </div>
            <div tabIndex={2} className="collapse mb-5 p-5 pb-10 bg-slate-700 text-white w-full collapse-arrow border border-base-300 rounded-box">
                <div className="collapse-title text-xl ">
                    What useEffect is used for other than data load?
                </div>
                <div className="collapse-content">
                    <p tabIndex={2}>
                        Main reason to use useEffect in React.
                        1.useEffect use cases
                        <li>     1. Running once on mount: fetch API data</li>
                        <li>2. Running on state change: validating input field</li>
                        <li>3.Running on state change: live filtering</li>
                        <li>4. Running on state change: trigger animation    on      new array value</li>
                        <li>5.Running on props change: update paragraph list on fetched API data update</li>
                        <li>6. Running on props change: updating fetched API data to get BTC updated price</li>

                    </p>
                </div>
            </div>

        </div>




    );
};

export default Question;