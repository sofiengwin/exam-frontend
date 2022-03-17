import * as React from 'react';

interface Props {
  optionText: string;
}

const Option = ({optionText}: Props) => {
  return (
    <li>{optionText}</li>
  ) 
}

export default Option;