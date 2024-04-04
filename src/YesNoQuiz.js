import React, { useState, useEffect } from 'react';

function YesNoQuiz() {
  const [questions, setQuestions] = useState([
  "Can you code in Ruby?",
   "Can you code in JavaScript?",
   "Can you code in Swift?",
   "Can you code in Java?",
   "Can you code in C#?"
  ]); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]); 
  const [score, setScore] = useState(0); // Current score
  const [averageRating, setAverageRating] = useState(0);
  const [allRuns, setAllRuns] = useState([]); 

  useEffect(() => {
    
    const calculateScore = () => {
      const yesCount = answers.filter(answer => answer === 'Yes').length;
      const totalQuestions = questions.length;
      const newScore = Math.round((100 * yesCount) / totalQuestions);
      setScore(newScore);
    };
    calculateScore();
  }, [answers, currentQuestionIndex, questions]);

  useEffect(() => {
    // Calculate average rating on score change or allRuns change
    const calculateAverageRating = () => {
      if (allRuns.length === 0) return; 
      const totalScore = allRuns.reduce((acc, curr) => acc + curr, 0);
      const newAverageRating = Math.round(totalScore / allRuns.length);
      setAverageRating(newAverageRating);
    };
    calculateAverageRating();
  }, [score, allRuns]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleRestart = () => {
    setAnswers([]); 
    setCurrentQuestionIndex(0); 
    setAllRuns([...allRuns, score]); // Add current score to allRuns
  };

  const renderQuestion = () => {
    if (currentQuestionIndex >= questions.length) {
      return (
        <div>
          <h2>Your Score: {score}%</h2>
          <h2>Average Rating: {averageRating}%</h2>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      );
    }

    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div>
        <h2>Question {currentQuestionIndex + 1}:</h2>
        <p>{currentQuestion}</p>
        <button onClick={() => handleAnswer('Yes')}>Yes</button>
        <button onClick={() => handleAnswer('No')}>No</button>
      </div>
    );
  };

  return (
    <div className="yes-no-quiz">
      {renderQuestion()}
    </div>
  );
}

export default YesNoQuiz;