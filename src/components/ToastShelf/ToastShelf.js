import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToast, dismissAllToasts } =
    React.useContext(ToastContext);
  React.useEffect(() => {
    const clearToasts = (e) => {
      if (e.key === "Escape") {
        dismissAllToasts();
      }
    };
    window.addEventListener("keydown", clearToasts);
    return () => window.removeEventListener("keydown", clearToasts);
  }, [removeToast]);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            variant={toast.variant}
            onClose={() => removeToast(toast.id)}
            isOpen
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
