import React, { useState } from 'react';
import checkData from '../utils/censor';
import capitalizeLetter from '../utils/capitalizeLetter';

const JokeContext = React.createContext({
  jokeState: null,
  categoryState: null,
  isLoading: false,
  categoryHandler: () => {},
  jokeHandler: () => {},
  setIsLoading: () => {},
});

export default JokeContext;

export const JokeContextProvider = props => {
  const [jokeState, setJokeState] = useState('Click a button to get a fact :)');
  const [categoryState, setCategoryState] = useState('random');
  const [isLoading, setIsLoading] = useState(false);

  const jokeHandler = async () => {
    setIsLoading(true);
    await fetch(
      categoryState === 'random'
        ? 'https://api.chucknorris.io/jokes/random'
        : `https://api.chucknorris.io/jokes/random?category=${categoryState}`
    )
      .then(async data => {
        return await data.json();
      })
      .then(async data => {
        if (await !checkData(data.value)) {
          return jokeHandler();
        }
        let joke = data.value.split('');
        if (joke[joke.length - 1] !== '.') {
          joke.push('.');
        }
        setIsLoading(false);
        setJokeState(capitalizeLetter(joke.join(''), 0));
      });
  };

  const categoryHandler = category => {
    setCategoryState(category);
  };

  return (
    <JokeContext.Provider
      value={{
        jokeState: jokeState,
        jokeHandler: jokeHandler,
        categoryState: categoryState,
        categoryHandler: categoryHandler,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
      }}
    >
      {props.children}
    </JokeContext.Provider>
  );
};
