import * as React from 'react';
import Option from './Option';

interface Props {
  questionText: string;
  options: string[];
}

const Question = ({questionText, options}: Props) => {
  return (
    <div>
      <div>{questionText}</div>
      <div>
        {options.map((option, index) => {
          return <Option optionText={option} key={index}/>
        })}
      </div>
    </div>
  );
}

export default Question;