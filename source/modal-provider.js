import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ModalContext from './modal-context';

class ModalProvider extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      component: null,
    };

    this._showModal = this._showModal.bind(this);
  }

  _showModal(component) {
    this.setState({
      component,
    });
  }

  _closeModal() {
    this.setState({
      component: null,
    });
  }

  render() {
    return (
      <ModalContext.Provider
        value={{
          showModal: this._showModal,
          closeModal: this._closeModal,
          component: this.state.component
        }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalProvider;
