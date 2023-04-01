import { createContext, useState } from "react";

export const ToastsContext = createContext();

export const ToastsProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const saveToasts = (type, message, timer) => {
    const newToasts = {
      id: Date.now(),
      type: type,
      message: message,
      timer: timer,
    };
    setToasts((v) => [...v, newToasts]);
  };
  const deleteToast = (id) => {
    setToasts((v) => v.filter((y) => y.id !== id));
  };

  return (
    <ToastsContext.Provider value={{ toasts, saveToasts, deleteToast }}>
      {children}
    </ToastsContext.Provider>
  );
};
