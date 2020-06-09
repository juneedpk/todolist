import React from 'react';
import './App.css';
import Dinner from './dinner.js';


function App() {

  return (
  <div className='App'>
  <Dinner dishName='pasta' sweetDish='kheer'/>
  <hr></hr>
  <Dinner dishName='pizza' sweetDish='cake'/>
  <hr></hr>
  <Dinner dishName='sandwich' sweetDish='jaleebi'/>
  <hr></hr>
  
  </div>
  );
}

export default App;
