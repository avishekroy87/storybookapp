import React, { useState } from "react";


export default function App() {
  
  const [Firstnum, setFirstnum] = useState(0)
  const [Secnum, setSecnum] = useState(0)
  const [res, setRes] = useState(0)
  

  function addNum(){setRes ( parseInt (Firstnum) + parseInt (Secnum))}

  const subNum = () => {setRes ( parseInt (Firstnum) - parseInt (Secnum))}

  const prodNum = () => {setRes ( parseInt (Firstnum) * parseInt (Secnum))}

  const adivNum = () => {
      console.log('second nume', Secnum)
      if(parseInt (Secnum) !== 0 ){
            setRes ( parseInt (Firstnum) / parseInt (Secnum))
      }else{
          setSecnum(1);
          setRes ( parseInt (Firstnum) / parseInt (Secnum));
      }


  }



  const restInp = () => {setFirstnum(0); setSecnum(0);}

  const restRes = () => {setRes(0)}
  return (
    <div>
      <div className="result">{res}</div>
      <input type="number" value={Firstnum} onChange={(e) => {setFirstnum(e.target.value)}}/>
      <input type="number" value={Secnum} onChange={(e) => {setSecnum(e.target.value)}}/>
      <button onClick={addNum}>Add</button>

      <button onClick={subNum}>Sub</button>

      <button onClick={prodNum}>Multiply</button>

      <button onClick={adivNum}>Divide</button>

      <button onClick={restInp} style={{color: 'red'}}>Reset input</button>

      <button onClick={restRes} style={{color: 'blue'}}>Reset res</button>
    </div>

  );
  
}

