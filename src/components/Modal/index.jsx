import "./index.css";
import Close from "../../assets/img/circle-xmark-solid.svg";

function Modal({ modalOpen, setModalOpen, title, children }) {
  if (modalOpen) {
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  } else {
  }
  const closeModal = () => {
    setModalOpen(!modalOpen);
    document.getElementsByTagName("html")[0].style.overflowY = "auto";
  };
  return (
    <>
      <div className="bgrdModal" onClick={() => closeModal()}></div>
      <div className="center">
        <div className="modal">
          <div className="modalHeader">
            <div className="title">{title}</div>
            <div className="close" onClick={() => closeModal()}>
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
