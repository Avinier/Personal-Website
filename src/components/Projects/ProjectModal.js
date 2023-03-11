import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./ProjectModal.module.css";

export function Backdrop(props) {
  return <div className={classes.backdrop}></div>;
}

export function ModalOverlay(props) {
  return <div className={classes.modal}>{props.children}</div>;
}

const portalElement = document.getElementById("overlays");

export default function ProjectModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverlay>
          <div className="bg-main--light w-[80%] h-[50vh]">
            <h1>BROOOOO</h1>
          </div>
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
