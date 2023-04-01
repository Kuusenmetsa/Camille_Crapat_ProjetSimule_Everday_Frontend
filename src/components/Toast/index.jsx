import "./index.css";

import Success from "../../assets/img/circle-check-solid.svg";
import Error from "../../assets/img/circle-exclamation-solid.svg";
import Close from "../../assets/img/xmark-solid.svg";

import { ToastsContext } from "../../utils/context";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Toasts() {
  const { toasts, deleteToast } = useContext(ToastsContext);
  return (
    <>
      {toasts.length > 0 && (
        <div className="toasts">
          <AnimatePresence>
            {toasts.map((toast) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                key={toast.id}
                className="toast"
                style={{
                  backgroundColor:
                    toast.type === "ok"
                      ? "#68bb04"
                      : toast.type === "false" && "#BB2404",
                }}
              >
                <div className="toast--icone">
                  <img
                    src={
                      toast.type === "ok"
                        ? Success
                        : toast.type === "false" && Error
                    }
                    alt="icone d'information"
                  />
                </div>
                <div className="toast--text">
                  <div className="toast--text--title">
                    {toast.type === "ok"
                      ? `Succès`
                      : toast.type === "false" && `Erreur`}
                  </div>
                  <div className="toast--text--message">{toast.message}</div>
                </div>
                <div
                  className="toast--close"
                  onClick={() => deleteToast(toast.id)}
                >
                  <img src={Close} alt="bouton de fermeture" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default Toasts;
