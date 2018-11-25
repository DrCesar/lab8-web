import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import './num-pad.css';

const NumPad = ({ handleButtonClick }) => {
  const numbers = [];
  for (let i = 0; i < 10; i += 1) {
    numbers.push(<Button key={i} value={i.toString()} handleClick={handleButtonClick} />);
  }
  return (
    <div className="num_pad_container">
      <div className="num_pad">
        {
          numbers
        }
        <Button value="." handleClick={handleButtonClick} />
        <Button value="=" cls="teal lighten-1" handleClick={handleButtonClick} />
        <Button value="+" cls="orange darken-4" handleClick={handleButtonClick} />
        <Button value="-" cls="orange darken-4" handleClick={handleButtonClick} />
        <Button value="x" cls="orange darken-4" handleClick={handleButtonClick} />
        <Button value="/" cls="orange darken-4" handleClick={handleButtonClick} />
        <Button value="C" cls="grey darken-1" handleClick={handleButtonClick} />
      </div>
    </div>
  );
};

NumPad.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default NumPad;
