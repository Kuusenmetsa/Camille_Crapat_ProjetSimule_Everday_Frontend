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
    if (timer) {
      setTimeout(() => {
        setToasts((v) => v.filter((y) => y.id !== newToasts.id));
      }, timer * 1000);
    }
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

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [nav, setNav] = useState(false);
  const actionNav = () => {
    if (nav === false) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  return (
    <NavContext.Provider value={{ nav, actionNav }}>
      {children}
    </NavContext.Provider>
  );
};
