import React from 'react';

const UseCallbackButtons = props => {
  console.log('render...')
  return (
    <div>
      <button className="btn" onClick={() => props.incFunc(6)}>+6</button>
      <button className="btn" onClick={() => props.incFunc(12)}>+12</button>
      <button className="btn" onClick={() => props.incFunc(18)}>+18</button>
      <button className="btn" onClick={() => props.incFunc(0)}>Resetar</button>
    </div>
  );
}

export default React.memo(UseCallbackButtons);
