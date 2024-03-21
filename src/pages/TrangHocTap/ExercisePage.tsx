// ExercisePage.tsx
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config'; // Thay đổi đường dẫn phù hợp
import { collection, getDocs } from 'firebase/firestore';


interface ExerciseQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

const ExercisePage: React.FC = () => {
  const [exerciseQuestions, setExerciseQuestions] = useState<ExerciseQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  useEffect(() => {
   const fetchExerciseQuestions = async () => {
       try {
        const querySnapshot = await getDocs(collection(db, 'questions')); // Sử dụng db.collection
         const questionsData: ExerciseQuestion[] = querySnapshot.docs.map((doc) => ({
           id: doc.id,
           question: doc.data().question,
           options: doc.data().options,
           correctAnswer: doc.data().correctAnswer
         }));
         // Lấy ngẫu nhiên 5 câu hỏi
         const randomQuestions = getRandomQuestions(questionsData, 5);
         setExerciseQuestions(randomQuestions);
       } catch (error) {
        console.error('Error fetching exercise questions:', error);
       }
  };

     fetchExerciseQuestions();
   }, []);

  const getRandomQuestions = (questions: ExerciseQuestion[], count: number): ExerciseQuestion[] => {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, count);
  };

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
    <div style={{ margin: '0px 200px', position: 'relative', flexDirection: 'column' }}>
      {currentQuestion && (
        <div>
          <h5>Câu {currentQuestionIndex + 1}:</h5>
          <h3>{currentQuestion.question}</h3>
          {currentQuestion.options.map(option => (
            <div key={option} style={{ width: '633px', height: '50px', padding: '10px 16px', gap: '12px', borderRadius: '8px', backgroundColor: 'white', marginBottom: 16 }}>
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

export default ExercisePage;
