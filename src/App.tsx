import React from 'react';
import './App.css';
import Clock from './Component/Clock';

let testProp: string = "Am I getting passed to the Clock component?"
let optionalProp: string = "You sure are!";
//both have an assigned datatype string

const App: React.FunctionComponent =() => {
  //the : after App - is what we are assigning to the 'App'. We are digging into our node modules, and more specifically, the @types packages that are installed
  return (
    <div className="App">
      <div className="verticalCenter">
        <Clock testProp={testProp} optionalProp={optionalProp} />
      </div>
      
    </div>
  );
}

export default App;
