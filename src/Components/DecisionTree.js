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
    // Aniket started question
    { id: 18, question: 'Interested in relationship between two variables ?', yes: 2, no: 3 },~
    { id: 19, question: 'Both variables continuous ?', yes: 2, no: 3 },
    { id: 20, question: 'More than two variables of interest, outcome variable continuous or binary ?', yes: 2, no: 3 },
    { id: 21, question: 'Interested in predicting one variable from another ?', yes: 2, no: 3 },
    { id: 22, question: 'Interested in studying the correlation between two variables, Both variables normal ?', yes: 2, no: 3 },
    { id: 23, question: 'One variable continuous and one categorical ?', yes: 2, no: 3 },
    { id: 24, question: 'Analysis of Variance(ANOVA), Number of ways in which the categorical variable can be classified?', yes: 2, no: 3 }, // 1, 2, more than 2 quesion , flow chart page: 3
    { id: 25, question: 'Ordinal data ?', yes: 2, no: 3 },
    { id: 26, question: 'Both variables categorical, Interested in tests of association or reproducibility ?', yes: 2, no: 3 }, // association, reproducibility quesiton, flow char page: 3
    { id: 27, question: 'Outcome variable normal or can central-limit theorem be assured to hold ?', yes: 2, no: 3 },
    { id: 28, question: '1, Other covariates to be controlled for ?', yes: 2, no: 3 },
    { id: 29, question: '2, Other covariates to be controlled for ?', yes: 2, no: 3 },
    { id: 30, question: 'More than 2, Other covariates to be controlled for  ?', yes: 2, no: 3 },
    { id: 31, question: 'One-sample problem ?', yes: 2, no: 3 },
    { id: 32, question: 'Incidence rates remain constant over time ?', yes: 2, no: 3 },
    { id: 33, question: 'Two-sample problem ?', yes: 2, no: 3 },
    { id: 34, question: 'Use survival-analysis methods ?', yes: 2, no: 3 },
    { id: 35, question: 'Interested in comparison of survival curves of two groups with limited control of covariates ?', yes: 2, no: 3 },
    { id: 36, question: 'Interested in effects, of several risk factors on survival\nWilling to assume several curve comes from a weibull distribution ?', yes: 2, no: 3 },
    { id: 37, question: '2x2 contingency table ?', yes: 2, no: 3 },
    { id: 38, question: '2xk contingency table ?', yes: 2, no: 3 },
    { id: 39, question: 'Underlying distribution normal or can central-limit theorem be assumed to hold ?', yes: 2, no: 3 },
    { id: 40, question: 'Categorical data ?', yes: 2, no: 3 },
    { id: 41, question: 'Interested in trend over k binomial proportions ?', yes: 2, no: 3 },

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
