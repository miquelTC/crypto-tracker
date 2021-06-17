import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onDisableModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <p>Please, select an amount bigger than 0</p>
      <button onClick={props.onDisableModal} >OK</button>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onDisableModal={props.onDisableModal}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay onDisableModal={props.onDisableModal} >{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;