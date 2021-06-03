import './App.css';

import { useState } from "react";
import Winwheel from 'javascript-winwheel-react'

function App() {
  const [theWheel, setTheWheel] = useState();

  return (
    <div className="App">
      <Winwheel 
        width='300'
        height='300'
        segments={[
          {'fillStyle' : '#eae56f', 'text' : 'Prize 1'},
          {'fillStyle' : '#89f26e', 'text' : 'Prize 2'},
          {'fillStyle' : '#7de6ef', 'text' : 'Prize 3'},
          {'fillStyle' : '#e7706f', 'text' : 'Prize 4'},
          {'fillStyle' : '#eae56f', 'text' : 'Prize 5'},
          {'fillStyle' : '#89f26e', 'text' : 'Prize 6'},
          {'fillStyle' : '#7de6ef', 'text' : 'Prize 7'},
          {'fillStyle' : '#e7706f', 'text' : 'Prize 8'}
        ]}
        animation={{
            'type'     : 'spinToStop',
            'duration' : 5,
            'spins'    : 8
        }}
        ref={setTheWheel}
      ></Winwheel>

      <button onClick={()=>theWheel.spin()}>
        spin
      </button>
    </div>

  );
}

export default App;
