import React from "react";

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        callback();
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [callback]);

  return null;
};
