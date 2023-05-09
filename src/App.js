import React, { useState } from "react";

export default function App() {
  const [Firstnum, setFirstnum] = useState(0)
  const [res, setRes] = useState(0)
  
  
  const addNum = () => {   if(parseInt(res) !== '' || res !== 'Cannot divide by zero'){ setRes(parseInt(Firstnum) + parseInt(res)) }}
  const subNum = () => { if(parseInt(res) !== '' || res !== 'Cannot divide by zero'){setRes(parseInt(Firstnum) - parseInt(res))} }
  const prodNum = () => { if(parseInt(res) !== '' || res !== 'Cannot divide by zero'){setRes(parseInt(Firstnum) * parseInt(res))} }
  const adivNum = () => {
    if(parseInt(res) !== '' && parseInt(res) !== 0){ setRes(parseInt(Firstnum) / parseInt(res))}else{
      setRes('Cannot divide by zero')
    }
  }




  const restInp = () => { setFirstnum(0) }

  const restRes = () => { setRes(0) }
  return (
    <div>
      <div className="result">{res}</div>
      <input type="number" value={Firstnum} onChange={(e) => { setFirstnum(e.target.value) }} />
      {/* <input type="number" value={Secnum} onChange={(e) => {setSecnum(e.target.value)}}/> */}
      <button onClick={addNum}>Add</button>

      <button onClick={subNum}>Sub</button>

      <button onClick={prodNum}>Multiply</button>

      <button onClick={adivNum}>Divide</button>

      <button onClick={restInp} style={{ color: 'red' }}>Reset input</button>

      <button onClick={restRes} style={{ color: 'blue' }}>Reset res</button>
    </div>

  );

}

