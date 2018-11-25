import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.css';

class Button extends Component {
  static defaultProps = {
    cls: 'light-blue darken-4',
  };

  constructor(props) {
    super(props);

    this.state = {
      cls: `${this.getClass()} ${props.cls}`,
    };
  }

  getClass = () => {
    const { value } = this.props;
    switch (true) {
      case (value >= 0):
        return (`n${value}`);
      case (value === '.'):
        return 'point';
      case (value === '='):
        return 'equal';
      case (value === '+'):
        return 'plus';
      case (value === '-'):
        return 'min';
      case (value === 'x'):
        return 'mult';
      case (value === '/'):
        return 'div';
      case (value === 'C'):
        return 'clear';
      default:
        return value;
    }
  }

  handleClick = () => {
    const { value, handleClick } = this.props;
    handleClick(value);
  };

  render() {
    const { value } = this.props;
    const { cls } = this.state;
    return (
      <button type="button" className={`waves-effect waves-light btn ${cls}`} onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  cls: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
