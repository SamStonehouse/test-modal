import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withModal } from '../../../index';

import ExampleModal from './example-modal';


class Root extends PureComponent {

  constructor(props) {
    super(props);

    this._show = this._show.bind(this);
  }

  _show() {
    this.props.showModal(ExampleModal);
  }

  render() {
    return (
      <div>
        Root
        <hr />
        <button onClick={this._show}>Show Modal</button>
      </div>
    );
  }

}

Root.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default withModal(Root);
