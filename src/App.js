import React from 'react';
import CAR from "./Images/car.png";
import "./App.css"

function App() {
  return (
    <div className="root" >
        <div className="smallTree" >

        </div>
        <div className="middleTree" >

        </div>
        <div className="largeTree" >

        </div>
        <div className="road" > 
            
        </div>
        <img alt="car" src={CAR} className="myCar" />
        <div className="grass" >

        </div>
    </div>
  );
}

export default App;
