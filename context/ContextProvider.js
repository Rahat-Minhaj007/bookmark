import React from "react";
import InputProvider from "./InputContext";

const ContextProvider = ({ children = null }) => {
  return (
    <div>
      <InputProvider>{children}</InputProvider>
    </div>
  );
};

export default ContextProvider;
