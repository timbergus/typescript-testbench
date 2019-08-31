import './hello.scss';

import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

type Props = {
  compiler: string;
  framework: string;
};

type State = {
  modalIsOpen: boolean,
};

Modal.setAppElement('#root');

export class Hello extends Component<Props, State> {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    const { compiler, framework } = this.props;
    const { modalIsOpen } = this.state;

    return(
      <Fragment>
        <h1>Hello from {compiler} and {framework}!</h1>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Hello</h2>
          <h3>I am a modal</h3>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </Fragment>
    );
  }
}
