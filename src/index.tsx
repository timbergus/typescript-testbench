import './styles.scss';

import React from 'react';
import { render } from 'react-dom';

import { Hello } from './components/hello';

render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('root'),
);
