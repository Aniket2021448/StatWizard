import React, { useState } from 'react';

// Define the DecisionTree component
const DecisionTree = () => {
  // Define the decision tree structure as a flat array
  const decisionTree = [
    { id: 1, question: 'Is there only one variable of interest ?', yes: 2, no: 1 },
    { id: 2, question: 'Is it a one sample problem ?', yes: 3, no: 8 },
    { id: 3, question: 'Is the underlying distribution normal or can central limit theorem be assumed to hold ?', yes: 6, no: 4 },
    { id: 4, question: 'Is the underlying distribution is binomial ?', yes: 44, no: 5 },
    { id: 5, question: 'Is the underlying distribution is poisson ?', yes: 43, no: 42 },
    { id: 6, question: 'Is the inference concerning in data ?', yes: 7, no:45  },
    { id: 7, question: 'Is the inference known in data ?', yes: 47, no:46  },
    { id: 8, question: 'Is it a two-sample problem ?', yes: 11, no: 39},
    { id: 9, question: 'Are the Samples independent ?', yes: 10, no: 48 },

    { id: 10, question: 'Are variances of two samples significantly different ?', yes: 50 , no: 49  },
    { id: 11, question: 'Is the underlying distribution normal or can central limit theorem be assumed to hold ?', yes: 12, no: 14 },
    { id: 12, question: 'Is the inference concerning means in data ?', yes: 9, no: 13 },
    { id: 13, question: 'Is the inference concerning variances in data ?', yes: 54, no:0  }, // error in this it is not a question rathher solution.
    { id: 14, question: 'Is the underling distribution binomial ?', yes: 16, no: 15 }, 
    { id: 15, question: 'Person-time data ?', yes: 31 , no:  51},
    { id: 16, question: ' Are the Samples independent ?', yes: 17, no: 52 },
    { id: 17, question: 'Are all expected values greater than equal to 5 ?', yes:37, no: 53 },
    // Aniket started question
    { id: 18, question: 'Interested in relationship between two variables ?', yes: 19, no: 20 },~
    { id: 19, question: 'Both variables continuous ?', yes: 21 , no: 23 },
    { id: 20, question: 'More than two variables of interest, outcome variable continuous or binary ?', yes: 58 , no:1  },// error here
    { id: 21, question: 'Interested in predicting one variable from another ?', yes:57 , no: 22},//////////
    { id: 22, question: 'Interested in studying the correlation between two variables, Both variables normal ?', yes: 60, no: 56 },
    { id: 23, question: 'One variable continuous and one categorical ?', yes: 24, no: 25},
    { id: 24, question: 'Analysis of Variance(ANOVA), Number of ways in which the categorical variable can be classified?', yes: 2, no: 3 }, // 1, 2, more than 2 quesion , flow chart page: 3
    { id: 25, question: 'Ordinal data ?', yes: 55, no: 26 },
    { id: 26, question: 'Both variables categorical, Interested in tests of association or reproducibility ?', yes:61 , no:62  }, // association, reproducibility quesiton, flow char page: 3
    { id: 27, question: 'Outcome variable normal or can central-limit theorem be assured to hold ?', yes: 2, no: 3 },
    { id: 28, question: '1, Other covariates to be controlled for ?', yes: 2, no: 3 },
    { id: 29, question: '2, Other covariates to be controlled for ?', yes: 2, no: 3 },
    { id: 30, question: 'More than 2, Other covariates to be controlled for  ?', yes: 2, no: 3 },
    // done here
    { id: 31, question: 'One-sample problem ?', yes:63 , no: 32 },
    { id: 32, question: 'Incidence rates remain constant over time ?', yes: 33, no: 35 },
    { id: 33, question: 'Two-sample problem ?', yes:64 , no:65  },
    
    { id: 35, question: 'Use survival-analysis methods , Interested in comparison of survival curves of two groups with limited control of covariates ?', yes: 66, no:36 },
    { id: 36, question: 'Interested in effects, of several risk factors on survival\nWilling to assume several curve comes from a weibull distribution ?', yes: 67, no:68  },
    { id: 37, question: '2x2 contingency table ?', yes:69 , no: 38 },
    { id: 38, question: '2xk contingency table ?', yes: 41, no: 72 },
    { id: 39, question: 'Underlying distribution normal or can central-limit theorem be assumed to hold ?', yes: 73, no: 40 },
    { id: 40, question: 'Categorical data ?', yes:74 , no:75  },
    { id: 41, question: 'Interested in trend over k binomial proportions ?', yes:70 , no:71  },
    // results of the decision tree 
    { id: 42, result: 'Use another underlying distribution or use non parametric method', },
    { id: 43, result: 'Use One-Sample Poisson Test' },
    { id: 44, result: 'Use One-Sample binomial test' },
    { id: 45, result: 'Use One-Sample chi-square test' },
    { id: 46, result: 'Use one-sample t-test' },
    { id: 47, result: 'Use one-sample z-test' },
    //
    { id: 48, result: 'Use paired t-test' },
    { id: 49, result: 'Use two-sample t-test with equal variances' },
    { id: 50, result: 'Use two-sample t-test with unequal variances' },
    { id: 51, result: 'Use another underlying distribution or use non-parametric methods' },
    { id: 52, result: 'Use McNemars test' },
    { id: 53, result: 'Use Fishers exact test' },
    { id: 54, result: 'Use two-sample f-test to compare variances' },
    // 
    { id: 55, result: 'Use rank correlation methods' },
    { id: 56, result: 'Use the Pearson correlation method' },
    { id: 57, result: 'Use simple linear regression' },
    { id: 58, result: 'Use Multiple regression methods' },
    { id: 59, result: 'Use Multiple logistic regression methods' },
    { id: 60, result: 'Use rank correlation methods' },
    { id: 61, result: 'Use contingency table methods' },
    { id: 62, result: 'Use Kappa Statistic' },
    //
    { id: 63, result: 'Use one-sample test for incident rates' },
    { id: 64, result: 'Use two-sample test for comparison of incident rates,if no confounding is present;or methods for stratified person-time data,if confounding is present.' },
    { id: 65, result: 'Use test of trend for incident rates' },
    { id: 66, result: 'Use log rank test' },
    { id: 67, result: 'Use parameter Survival methods based on weibull distribution' },
    { id: 68, result: 'Use Cox proportional hazards model ' },
    //
    { id: 69, result: 'Use two-sample test for binornial proportions, or 2 x 2 contingency-table methods if no confounding is present, or the Mantel-Haenszel test if confounding is present' },
    { id: 70, result: 'Use chi-square test for trend, if no confounding is present. or the Mantel Extension test if confounding is present' },
    { id: 71, result: 'Use chi-square test for heterogeneity for 2 x k  tables.'},
    { id: 72, result: 'Use chi-square test for R x C tables'},
    { id: 73, result: 'Use one-way ANOVA' },
    { id: 74, result: 'Use R x C contingency-table methods' },
    { id: 75, result: 'Use another underlying distribution or use nonparametrix methods such as kruskal-wallis test' },
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
      <div className="max-w-lg mx-auto">
  <p className="text-center text-lg mb-4">{currentQuestion.question}</p>
  <div className="flex justify-center space-x-4">
    <button
      className="bg-black hover:bg-slate-950 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      onClick={() => handleAnswer('Yes')}
    >
      Yes
    </button>
    <button
      className="bg-black hover:bg-slate-950 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
      onClick={() => handleAnswer('No')}
    >
      No
    </button>
  </div>
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
