import * as React from 'react';
import { Space } from 'antd';
import Option from './Option';

interface Props {
  questionText: string;
  options: string[];
}

const Question = ({questionText, options}: Props) => {
  return (
    <div>
      <div>{questionText}</div>
      <Space direction="vertical" size="middle"  >
        {options.map((option, index) => {
          return <Option optionText={option} key={index}/>
        })}
      </Space>
    </div>
  );
}

export default Question;