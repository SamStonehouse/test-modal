import { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

// These two containers are siblings in the DOM
const modalRoot = document.getElementById('modal-root');

class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(
      this.props.children,
      this.el,
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
