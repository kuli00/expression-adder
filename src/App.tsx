import React from 'react';
import './App.css';
import { ExpressionAdder } from './components/ExpressionAdder';
import { Container } from "./components/Container";

function App() {
  return (
    <Container>
      <ExpressionAdder />
    </Container>
  );
}

export default App;
