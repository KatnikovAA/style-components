import './App.css';
import styled from 'styled-components'
import Title from './components/Title';
import Flex from './components/Flex';
import Console from './components/Console';
import { Button } from './components/Button';
import LargeButton from './components/LargeButton';
import Line from './components/Line';
//REM равная корневому (базовому) значению font-size. Это значит, что 1rem всегда будет равен значению font-size, которое было определено в html. 1rem = 16px
//width: 100% и min-height: 100vh; заполняет весь экран с учетом элемента прокрутыки

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: black;
font-family: consolas;
`

function App() { //проверка branch Git
  return (
    <AppWrapper>
      <Flex justify={"center"}>
        <Title> 
          Console
        </Title>
      </Flex>
      <Flex direction={"column"}>
        <Console />
        <LargeButton outlined color={"red"} align={"flex-end"}>Send</LargeButton>
        <Button outlined color={"red"} align={"flex-end"} marginTop="10px">Cansel</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
