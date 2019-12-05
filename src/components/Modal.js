import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as ButtonClose } from "../assets/ButtonClose.svg";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />

          <div className="modal-wrapper">
            <div className="modal">
              <ButtonClose
                type="button"
                onClick={hide}
                id="close-button"
              ></ButtonClose>
              <p>Add new task</p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
