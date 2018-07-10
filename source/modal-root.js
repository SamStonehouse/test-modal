import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withModal from './with-modal';

class ModalRoot extends PureComponent {

  render() {
    const Component = this.props.component;

    if (Component) {
      return (
        <Component />
      );
    }

    return null;
  }

}


ModalRoot.propTypes = {
  component: PropTypes.element,
};

ModalRoot.defaultProps = {
  component: null,
};

export default withModal(ModalRoot);
