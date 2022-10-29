import { createContext, useState } from "react";

export const InputContext = createContext();
const { Provider } = InputContext;

function InputProvider({ children = null }) {
  const [inputData, setInputData] = useState({
    inputValue: {
      title: "",
      url: "",
      category: "",
      newCategory: "",
    },
    inputError: {
      titleError: "",
      urlError: "",
      categoryError: "",
      newCategoryError: "",
    },
  });
  const value = [inputData, setInputData];
  return <Provider value={value}>{children}</Provider>;
}

export default InputProvider;
