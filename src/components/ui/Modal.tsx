import React from "react"
import ReactDOM from "react-dom"


const Backdrop:React.FC<{onClick: ()=>void }> = (props) =>{
  return <div onClick={props.onClick} className={`absolute w-screen h-screen opacity-70 bg-black z-40 modal-anim-bg`}>
  </div>
}

const ModalContent:React.FC<{children: React.ReactNode}> = (props) => {
  return <div className={`p-2 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white z-50 modal-anim-content origin-center`}>
    {props.children}
  </div>
}

type Props = {
  active: boolean,
  onClickOutside: ()=>void,
  modalDivId: string,
  backdropDivId: string,
  children: React.ReactNode
}

const Modal: React.FC<Props> = (props) => {

  return <React.Fragment>
    {props.active &&
        document.getElementById(props.backdropDivId) !== null &&
        ReactDOM.createPortal(
            <Backdrop onClick={props.onClickOutside}/>,
            document.getElementById(props.backdropDivId)!
        )}
    {props.active &&
        document.getElementById(props.modalDivId) !== null &&
        ReactDOM.createPortal(
            <ModalContent>{props.children}</ModalContent>,
            document.getElementById(props.modalDivId)!
        )}
  </React.Fragment>
}

export default Modal