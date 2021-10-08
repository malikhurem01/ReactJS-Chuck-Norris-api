import React, { useContext } from 'react';
import JokeContext from '../store/context-api';
import LoadingCircle from './UI/LoadingCircle';

const Joke = props => {
  let ctx = useContext(JokeContext);
  return (
    <div className="jokeText">
      {ctx.isLoading && <LoadingCircle />}
      {!ctx.isLoading && <h3>{ctx.jokeState}</h3>}
    </div>
  );
};

export default Joke;
