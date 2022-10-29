import { createContext, useState } from "react";

export const InputContext = createContext();
const { Provider } = InputContext;

function InputProvider({ children = null }) {
  const [inputData, setInputData] = useState({
    inputValue: {
      title: "",
      url: "",
      newCategory: "",
    },
    inputError: {
      titleError: "",
      urlError: "",
      newCategoryError: "",
    },
  });
  const value = [inputData, setInputData];
  return <Provider value={value}>{children}</Provider>;
}

export default InputProvider;
