import * as React from 'react';
import { Space, Card, Button, Typography } from 'antd';
import {questions} from '../../utils/mockQuestions'
import Question from './Question';
import styled from 'styled-components';

const { Title } = Typography;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: green;
  justify-content: center;
  align-items: center;
`;

const Centered = styled.div`
  background: red;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

const QuestionsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


const Questions = () => {
  const [questionNumber, setQuestionNumber] = React.useState(0)
  const currentQuestion = questions[questionNumber]
  console.log({questions})
  return (
    <Container>
      <Centered>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card 
            title={
              <QuestionsHeader>
                <Title level={4}>Subject</Title>
                <Title level={4}>Question {questionNumber} of {questions.length}</Title>
              </QuestionsHeader>
            }
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            style={{ width: 700 }}
            bordered
            headStyle={{borderBottom: '4px solid black'}}
          >
            <div>
              <Question questionText={currentQuestion.questionText} options={currentQuestion.choices.map((choice:any) => choice.text)} />
            </div>
          </Card>
          <ButtonContainer>
            <Button type="primary" onClick={() => setQuestionNumber(questionNumber + 1)}>Primary Button</Button>
          </ButtonContainer>
        </Space>
      </Centered>
    </Container>
  )
}

export default Questions;