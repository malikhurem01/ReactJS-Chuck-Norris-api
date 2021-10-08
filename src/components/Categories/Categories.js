import React, { useContext, useState, useEffect } from 'react';
import JokeContext from '../../store/context-api';
import CategoryOptions from './CategoryOptions';

const Categories = props => {
  const [categoriesState, setCategoriesState] = useState([]);
  const ctx = useContext(JokeContext);
  const categoryHandler = ev => {
    ctx.categoryHandler(ev.target.value);
  };
  useEffect(() => {
    console.log('');
    (async () => {
      await fetch('https://api.chucknorris.io/jokes/categories')
        .then(async data => {
          return await data.json();
        })
        .then(data => {
          data.splice(data.indexOf('religion'), 1);
          setCategoriesState(data.map(el => el));
        });
    })();
  }, []);

  return (
    <div className="categories">
      <CategoryOptions
        categoryHandler={categoryHandler}
        categoriesState={categoriesState}
      />
    </div>
  );
};

export default Categories;
