import { createContext } from 'react';

const ModalContext = createContext({
  showModal: () => { },
  hideModal: () => { },
  component: null,
});

export default ModalContext;
