import React from 'react';
import capitalizeLetter from '../../utils/capitalizeLetter';
const CategoryOptions = props => {
  return (
    <React.Fragment>
      <label htmlFor="categories">Choose a category: </label>
      <select name="categories" id="categories" onClick={props.categoryHandler}>
        <option value="random">Random</option>
        {props.categoriesState.map(el => {
          return (
            <option key={el} value={el}>
              {capitalizeLetter(el, 0)}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default CategoryOptions;
