import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as ButtonClose } from "../assets/ButtonClose.svg";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <ButtonClose
                  type="button"
                  className="modal-close-button"
                  onClick={hide}
                  id="close-button"
                ></ButtonClose>
              </div>
              <p>Add a new task</p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
