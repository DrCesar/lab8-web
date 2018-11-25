import React from 'react';
import PropTypes from 'prop-types';
import './display.css';

const Display = ({ value, cls }) => (
  <input value={value} className={cls} readOnly />
);

Display.propTypes = {
  value: PropTypes.string.isRequired,
  cls: PropTypes.string,
};

Display.defaultProps = {
  cls: 'display',
};

export default Display;
