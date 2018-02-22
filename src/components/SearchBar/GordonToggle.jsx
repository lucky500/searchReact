import React from 'react';

export default props => {
  const { handleToggle } = props;
  return(
    <div className="gordon-toggle">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" onClick={handleToggle}></span>
        </label>
        <h3>Gordon { props.toggleOn ? 'ON' : 'OFF' }</h3>
    </div>
  )
}
