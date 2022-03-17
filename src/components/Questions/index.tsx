import * as React from 'react';
import {questions} from '../../utils/mockQuestions'
import Question from './Question';

const Questions = () => {
  console.log(questions)
  return (
    <div>
      {questions.map((question: any, index: number) => {
        console.log({question}, question.choices)
        return <Question key={index} questionText={question.questionText} options={question.choices.map((choice:any) => choice.text)} />
      })}
    </div>
  )
}

export default Questions;