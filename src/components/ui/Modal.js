import React from "react";
import ReactDOM from "react-dom";

function Backdrop(props){
  return <div onClick={props.onClick} className={`absolute w-screen h-screen opacity-70 bg-black z-40`}>
  </div>
}

function ModalContent(props){
  return <div className={`p-2 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white z-50`}>
    {props.children}
  </div>
}

function Modal(props){

  return <React.Fragment>
    {props.active && ReactDOM.createPortal(
      <Backdrop onClick={props.onClickOutside} active={props.active}/>,
      document.getElementById(props.backdropDivId)
    )};
    {props.active && ReactDOM.createPortal(
      <ModalContent active={props.active}>{props.children}</ModalContent>,
      document.getElementById(props.modalDivId)
    )};
  </React.Fragment>
}

export default Modal;