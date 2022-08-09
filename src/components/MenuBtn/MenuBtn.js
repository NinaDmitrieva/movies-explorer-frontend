import React from 'react';
import './MenuBtn.css';

function MenuBtn({ handleClick, isOpen }) {
  return (
<>
      <button
          className={
      !isOpen
            ? 'menu__btn'
            : 'menu__btn menu__btn-invisible'
          }

        type='button'
        onClick={handleClick}
      >
      </button>
</>
  )
}


export default MenuBtn;