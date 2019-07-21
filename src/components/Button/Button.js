import './Button.scss';

import React from 'react';


function Button({ children, onClick, disabled }) {
  return(
    <button onClick={onClick} className={"button" + (disabled ? " disabled" : "")}>{children}</button>
  )
}

export default React.memo(Button);