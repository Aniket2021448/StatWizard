import React, { useState } from 'react';

// Define the DecisionTree component
const DecisionTree = () => {
  // Define the decision tree structure as a flat array
  const decisionTree = [
    { id: 1, question: 'Is there only one variable of interest ?', yes: 2, no: 3 },
    { id: 2, question: 'Is it a one sample problem ?', yes: 3, no: 5 },
    { id: 3, question: 'Is the underlying distribution normal or can central limit theorem be assumed to hold ?', yes: 6, no: 4 },
    { id: 4, question: 'Is the underlying distribution is binomial ?', yes: 2, no: 5 },
    { id: 5, question: 'Is the underlying distribution is poisson ?', yes: 2, no: 3 },
    { id: 6, question: 'Is the inference concerning in data ?', yes: 7, no: 3 },
    { id: 7, question: 'Is the inference known in data ?', yes: 2, no: 3 },
    { id: 8, question: 'Is it a two-sample problem ?', yes: 2, no: 3 },
    { id: 9, question: 'Are the Samples independent ?', yes: 2, no: 3 },
    { id: 10, question: 'Are variances of two samples significantly different ?', yes: 2, no: 3 },
    { id: 11, question: 'Is the underlying distribution normal or can central limit theorem be assumed to hold ?', yes: 2, no: 3 },
    { id: 12, question: 'Is the inference concerning means in data ?', yes: 2, no: 3 },
    { id: 13, question: 'Is the inference concerning variances in data ?', yes: 2, no: 3 },
    { id: 14, question: 'Is the underling distribution binomial ?', yes: 2, no: 3 }, 
    { id: 15, question: 'Person-time data ?', yes: 2, no: 3 },
    { id: 16, question: ' Are the Samples independent ?', yes: 2, no: 3 },
    { id: 17, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 18, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },~
    { id: 19, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 20, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 21, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 22, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 23, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 24, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 25, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 26, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 27, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 28, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 29, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 30, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 31, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 32, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 33, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 34, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 35, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 36, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    { id: 37, question: 'Are all expected values greater than equal to 5 ?', yes: 2, no: 3 },
    // Add more questions and outcomes as needed
  ];

  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);

  const handleAnswer = (answer) => {
    const nextNodeIndex = decisionTree[currentNodeIndex][answer.toLowerCase()];
    if (typeof nextNodeIndex === 'number') {
      setCurrentNodeIndex(nextNodeIndex - 1); // Adjust for 0-based indexing
    }
  };

  const renderQuestion = () => {
    const currentQuestion = decisionTree[currentNodeIndex];
    return (
      <div>
        <p>{currentQuestion.question}</p>
        <button onClick={() => handleAnswer('Yes')}>Yes</button>
        <button onClick={() => handleAnswer('No')}>No</button>
      </div>
    );
  };

  const renderResult = () => {
    const currentResult = decisionTree[currentNodeIndex].result;
    return (
      <div>
        <p>{currentResult}</p>
        <p>Final decision reached.</p>
      </div>
    );
  };

  return (
    <div>
      {decisionTree[currentNodeIndex].question ? renderQuestion() : renderResult()}
    </div>
  );
};

export default DecisionTree;
