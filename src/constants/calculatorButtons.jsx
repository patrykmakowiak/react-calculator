import React from 'react';
import {
  FaPlus, FaMinus, FaPercent, FaTimes, FaDivide, FaEquals,
} from 'react-icons/fa';
import {
  FiDelete,
} from 'react-icons/fi';

const CALCULATOR_BUTTONS = [
  { value: 'AC' },
  { value: 'C', key: 'Backspace', icon: (<FiDelete />) },
  { value: '%', icon: (<FaPercent />) },
  { value: '/', icon: (<FaDivide />), color: '#f39c12' },
  { value: '7' },
  { value: '8' },
  { value: '9' },
  { value: '*', icon: (<FaTimes />), color: '#f39c12' },
  { value: '4' },
  { value: '5' },
  { value: '6' },
  { value: '-', icon: (<FaMinus />), color: '#f39c12' },
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '+', icon: (<FaPlus />), color: '#f39c12' },
  { value: '.', icon: ',', key: ',' },
  { value: '0' },
  {
    value: '=', key: 'Enter', width: '50%', icon: (<FaEquals />), backgroundColor: '#f39c12',
  },
];

export default CALCULATOR_BUTTONS;
