import "./index.css";
import Close from "../../assets/img/circle-xmark-solid.svg";

function Modal({ modalOpen, setModalOpen, title, children }) {
  return (
    <>
      <div className="bgrdModal" onClick={() => setModalOpen(!modalOpen)}></div>
      <div className="center">
        <div className="modal">
          <div className="modalHeader">
            <div className="title">{title}</div>
            <div className="close" onClick={() => setModalOpen(!modalOpen)}>
              <img src={Close} alt="icône de clôture de modal" />
            </div>
          </div>
          <div className="modalContainer">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
