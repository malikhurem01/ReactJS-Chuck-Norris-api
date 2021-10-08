import React from 'react';

import './App.css';
import Header from './components/MainHeader/Header';
import Form from './components/Form';
import BoddyWrapper from './components/BodyWrapper';
import Joke from './components/Joke';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <BoddyWrapper>
      <Header />
      <Joke />
      <Categories />
      <Form />
    </BoddyWrapper>
  );
}

export default App;
