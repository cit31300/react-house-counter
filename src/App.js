import { useState } from 'react';
import './App.css';

function HouseCounter({ housename }) {
  const [counter, setCounter] = useState(0);

  const increase = (num) => {
    setCounter(counter => counter + num);
  };

  const decrease = (num) => {
    setCounter(counter => counter - num);
  };

  return (
    <div className="col">
      <div className="card text-center">
        <h5 className="card-header">{ housename } Counter</h5>
        <div className="card-body">
          <h5 className="card-title">{ counter } points</h5>
          <div>
            <button 
              type="button" 
              className="btn btn-success"
              onClick={() => {increase(1)}}
            >+</button>
            <button 
              type="button" 
              className="btn btn-danger"
              onClick={() => {decrease(1)}}
            >-</button>
            <button 
              type="button" 
              className="btn btn-success"
              onClick={() => {increase(10)}}
            >+10</button>
            <button 
              type="button" 
              className="btn btn-danger"
              onClick={() => {decrease(10)}}
            >-10</button>
            <button 
              type="button" 
              className="btn btn-success"
              onClick={() => {increase(20)}}
            >+20</button>
            <button 
              type="button" 
              className="btn btn-danger"
              onClick={() => {decrease(20)}}
            >-20</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="row row-cols-2 row-cols-md-2 g-4">
      <HouseCounter housename="Griffyndor" />
      <HouseCounter housename="Slytherin" />
      <HouseCounter housename="Hufflepuff" />
      <HouseCounter housename="Ravenclaw" />
    </div>
  );
}

export default App;
