import React from "react";

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
  const toastApi = {
    addToast,
    removeToast,
    toasts,
  };

  return (
    <ToastContext.Provider value={toastApi}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
