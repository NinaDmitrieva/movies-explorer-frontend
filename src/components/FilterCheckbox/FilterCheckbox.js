import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox () {
  return (
    <div className='checkbox'>
      <input type='checkbox' className='checkbox__btn' />
      <p className='checkbox__btn-text'>Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;