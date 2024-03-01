
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal(props) {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        props.close(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [props]);

  return createPortal(
    <div className="modal" ref={modalRef}>
      <div className="modal-content">
        <button className="close" onClick={() => props.close(false)}>Close</button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
