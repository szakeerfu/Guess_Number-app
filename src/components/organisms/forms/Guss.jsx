import React, { useState } from "react";
import './Form.css'

// generate random number
let randomNumber = Math.round(Math.random() * 10);

const Guess = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState("");

  const onClick = () => {
    const userGuess = parseInt(value, setValue);

    setResults(<p className="alert alert-danger">Pick a number</p>);


    if (userGuess === randomNumber)
      setResults( alert (' Correct! '));

    if (userGuess > randomNumber)
      setResults(<p className="alert alert-warning">Too high, guess again</p>);


    if (userGuess < randomNumber)
      setResults(<p className="alert alert-warning">Too low, guess again</p>);
  };

  return (
    <>
      <div className="main">

        <div className="sub_main">
          <div className="part">


            <h2>Guess The Number game</h2>
            <p className="title">Guess a number between 1 and 10.</p>
            <input
            className="input"
              value={value}
              type="number"
              onChange={e => setValue(e.target.value)}
            />
            <button type="submit" onClick={onClick}>
              GUESS
            </button>
            <h1> {results}</h1>
 
          </div>
         
        </div>

      </div>
    </>
  );
};

export default Guess;