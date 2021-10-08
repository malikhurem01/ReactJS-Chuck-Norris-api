import React, { useContext } from 'react';
import JokeContext from '../store/context-api';

const Form = props => {
  let ctx = useContext(JokeContext);
  return (
    <div className="form">
      <button className="btn" onClick={ctx.jokeHandler}>
        Tell me a fact!
      </button>
    </div>
  );
};

export default Form;
