// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// Hello component 호출해서 사용 import문
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
function App() {
    const name='react';
    const style={
        backgroundColor:'skyblue',
        color:'aqua',
        fontSize:40,
        margin:'1rem',
        padding:'1rem',
        textAlign:'center'
    }
  return (
      <Counter name={'conuter'}/>
  );
}

export default App;
