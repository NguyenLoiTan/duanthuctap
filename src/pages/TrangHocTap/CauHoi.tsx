import React, { useState } from 'react';

interface ExerciseQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const CauHoi: React.FC = () => {
  const [exerciseQuestions] = useState<ExerciseQuestion[]>([
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      id: 2,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4'
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const goToNextQuestion = () => {
    if (currentQuestionIndex < exerciseQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };
  const currentQuestion = exerciseQuestions[currentQuestionIndex];

  return (
    <div style={{ margin: '0px 200px', position: 'relative',flexDirection: 'column'}}>
      <h5>Exercise Page</h5>
      {currentQuestion && (
        <div>
          <h3>{currentQuestion.question}</h3>
            {currentQuestion.options.map(option => (
              <div key={option} style={{ width: '633px', height: '50px', padding: '10px 16px', gap: '12px', borderRadius: '8px', backgroundColor: 'white', marginBottom:16 }}>
                <label>
                  <input type="radio" name="answer" value={option} />
                  {option}
                </label>
              </div>
            ))}
        </div>
      )}
      <div>
        <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button onClick={goToNextQuestion} disabled={currentQuestionIndex === exerciseQuestions.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CauHoi;
