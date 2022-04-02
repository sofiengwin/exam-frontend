import * as React from 'react';
import {Card} from 'antd';

interface Props {
  optionText: string;
}

const Option = ({optionText}: Props) => {
  return (
    <Card bodyStyle={{border: '2px solid blue', cursor: 'pointer'}}>{optionText}</Card>
  ) 
}

export default Option;