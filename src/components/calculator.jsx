import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NumPad from './num-pad/num-pad';
import Display from './display/display';
import { addNumber } from '../actions';
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    const { addNum } = this.props;
    console.log(props);
    addNum('0');
    this.state = {
      display: '',
      firstOperand: '',
      operand: '',
    };
  }

  handleButtonClick = (value) => {
    const { display, firstOperand, operand } = this.state;
    let result = 0;
    let strResutl = 'Error';
    if (!Number.isNaN(Number(value)) || value === '.') {
      if (display.length < 9 && !Number.isNaN(Number(display + value))) {
        this.setState({ display: display + value });
      } else if (display === 'Error') {
        this.setState({ display: value });
      }
    } else {
      switch (value) {
        case 'C':
          this.setState({ display: '', firstOperand: '' });
          break;
        case '=':
          switch (operand) {
            case 'x':
              result = Number(firstOperand) * Number(display);
              break;
            case '%':
              result = Number(firstOperand) % Number(display);
              break;
            case '+':
              result = Number(firstOperand) + Number(display);
              break;
            case '-':
              result = Number(firstOperand) - Number(display);
              break;
            default:
              result = 0;
              break;
          }
          if (result > 0 && result < 999999999) {
            strResutl = result.toString();
          }

          this.setState({ display: strResutl, firstOperand: '' });
          break;
        default:
          this.setState({ display: '', firstOperand: display, operand: value });
          break;
      }
    }
  }

  render() {
    const { display, firstOperand, operand } = this.state;
    return (
      <div className="calculator">
        <Display value={firstOperand + operand} cls="dis" />
        <Display value={display} />
        <NumPad handleButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}

Calculator.propTypes = {
  addNum: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  addNum: number => dispatch(addNumber(number)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);
