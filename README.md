
# javascript-winwheel-react
Create spinning prize wheels using React with Winwheel.js

## Install 
```
npm i git+https://github.com/adamflorizone/javascript-winwheel-react.git
```

## Description
Winwheel.js is a feature packed JavaScript library that allows you to easily create HTML5 canvas Winning / Prize Wheels, Pie graphs and other things using a highly configurable JavaScript class.

Winwheel.js Features Include:
* Easy to use, highly configurable JavaScript classes.
* Draw wheels using code generated segments or graphically rich images.
* Responsive features so wheels display correctly on different sized devices.
* Numerous text orientation, direction, size and colour options.
* Random or Pre-calculated prize stopping location.
* Play sounds while the wheel is spinning including a "tick" sound.
* Ability to get the segment the user clicked upon.
* Fully commented source code. Plenty of tutorials and other documentation.
* Winwheel.js is free to use with an open source license.

## Example
```
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
```

## More examples
See the /examples (https://github.com/adamflorizone/javascript-winwheel-react/tree/master/examples/) folder for examples of some of the types of things you can create

