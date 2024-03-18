import React, { useState } from 'react';
import { Input } from 'reactstrap';

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
      question: 'Sum = 24 + 56 + 72 + 82.Trong trường hợp trên Sum là:',
      options: ['A. Letter.', 'B. Integer.', 'C. Number.', 'D. Character.'],
      correctAnswer: 'A. Letter.'
    },
    {
      id: 2,
      question: 'Thẻ div có style background-color: red có tác dụng gì?',
      options: ['A. Thay đổi màu nền thành đỏ.', 'B. Báo lỗi', 'C. Không tác dụng', 'D. Thay đổi màu chữ thành đỏ.'],
      correctAnswer: 'A. Thay đổi màu nền thành đỏ.'
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
      
      {currentQuestion && (
        <div>
          <h5>Câu {currentQuestion.id}:</h5>
          <p>{currentQuestion.question}</p>
            {currentQuestion.options.map(option => (
              <div key={option} style={{ width: '633px', height: '50px', padding: '10px 16px', gap: '12px', borderRadius: '8px', backgroundColor: 'white', marginBottom:16 }}>
                <label>
                  <Input type="radio" name="answer" value={option} style={{
                    border: '2px solid orange',width: '20px',height: '20px',
                    borderRadius: '4px',marginRight: '8px',cursor: 'pointer',
                    }}/>
                  {option}
                </label>
              </div>
            ))}
        </div>
      )}
      <div>
        <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
          Câu trước
        </button>
        <button onClick={goToNextQuestion} disabled={currentQuestionIndex === exerciseQuestions.length - 1}>
          Câu tiếp theo
        </button>
      </div>
    </div>
  );
};

export default CauHoi;
