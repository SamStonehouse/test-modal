import React from 'react';
import { render } from 'react-dom';

import Root from './scripts/components/root';
import { ModalProvider, ModalRoot } from '..';

import './entry.scss';

render(
  <ModalProvider>
    <Root />
    <ModalRoot />
  </ModalProvider>,
  document.getElementById('root'),
);
