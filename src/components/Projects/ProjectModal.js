import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Link from "../UI/Link";
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
          <div className="bg-main--light flex">
            <button
              onClick={() => {
                props.setShowModal(false);
              }}
              className="absolute left-[20px] top-[20px]"
            >
              <h3 className="text-red-500">close</h3>
            </button>
            <article className="my-auto ml-[45px] text-slate-700">
              <h1 className="text-center mb-[15px]">{props.project.project}</h1>
              <p className="text-center mb-[15px]">{props.project.desc}</p>
              <div className="flex justify-around w-[60%] mx-auto">
                <Link href={props.project.github} isHref={true}>
                  repo
                </Link>
                <Link href={props.project.link} isHref={true}>
                  demo
                </Link>
              </div>
            </article>
            <article className="relative  m-[45px]">
              <div className="absolute w-[100%] h-[100%] bg-gradient-to-b from-[#FFFFD0] z-10"></div>
              <img
                className="object-cover w-[250px] h-[250px]"
                src={props.project.image}
              />
            </article>
          </div>
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
