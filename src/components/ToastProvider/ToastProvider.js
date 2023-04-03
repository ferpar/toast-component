import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const removeToast = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };
  const addToast = (e, message, variant) => {
    e.preventDefault();
    setToasts((toasts) => [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  };
  const dismissAllToasts = () => {
    setToasts([]);
  };
  useEscapeKey(dismissAllToasts);

  const toastApi = {
    addToast,
    removeToast,
    toasts,
    dismissAllToasts,
  };

  return (
    <ToastContext.Provider value={toastApi}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
