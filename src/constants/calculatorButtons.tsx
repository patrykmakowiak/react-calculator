import React from 'react';
import {
  FaPlus, FaMinus, FaPercent, FaTimes, FaDivide, FaEquals,
} from 'react-icons/fa';
import {
  FiDelete,
} from 'react-icons/fi';

const CALCULATOR_BUTTONS = [
  {
    value: 'AC',
    keyCodes: [],
  },
  {
    value: 'C',
    keyCodes: [8],
    key: 'Backspace',
    icon: (<FiDelete />),
  },
  {
    value: '%',
    keyCodes: [],
    icon: (<FaPercent />),
  },
  {
    value: '/',
    keyCodes: [111],
    icon: (<FaDivide />),
    color: '#f39c12',
  },
  {
    value: '7',
    keyCodes: [55, 103],
  },
  {
    value: '8',
    keyCodes: [56, 104],
  },
  {
    value: '9',
    keyCodes: [57, 105],
  },
  {
    value: '*',
    keyCodes: [106],
    icon: (<FaTimes />),
    color: '#f39c12',
  },
  {
    value: '4',
    keyCodes: [52, 100],
  },
  {
    value: '5',
    keyCodes: [53, 101],
  },
  {
    value: '6',
    keyCodes: [54, 102],
  },
  {
    value: '-',
    keyCodes: [109, 189],
    icon: (<FaMinus />),
    color: '#f39c12',
  },
  {
    value: '1',
    keyCodes: [49, 97],
  },
  {
    value: '2',
    keyCodes: [50, 98],
  },
  {
    value: '3',
    keyCodes: [51, 99],
  },
  {
    value: '+',
    keyCodes: [107],
    icon: (<FaPlus />),
    color: '#f39c12',
  },
  {
    value: '.',
    keyCodes: [110, 188],
    key: ',',
    icon: ',',
  },
  {
    value: '0',
    keyCodes: [48, 96],
  },
  {
    value: '=',
    keyCodes: [187],
    key: 'Enter',
    width: '50%',
    icon: (<FaEquals />),
    backgroundColor: '#f39c12',
  },
];

export default CALCULATOR_BUTTONS;
