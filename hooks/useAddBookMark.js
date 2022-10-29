import { useContext } from "react";
import { InputContext } from "../context/InputContext";

const useAddBookMark = () => {
  const [inputData, setInputData] = useContext(InputContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => {
      return {
        ...prev,
        inputValue: {
          ...prev.inputValue,
          [name]: value,
        },
      };
    });
  };

  const checkInputValidity = () => {
    if (
      inputData?.inputValue?.title &&
      inputData?.inputValue?.url &&
      (inputData?.inputValue?.category || inputData?.inputValue?.newCategory)
    ) {
      return true;
    }
    setInputData((prevState) => ({
      ...prevState,
      inputError: {
        ...prevState.inputError,
        titleError: inputData?.inputValue?.titleError
          ? ""
          : " Title is required",
        urlError: inputData?.inputValue?.userName ? "" : "Url is required",
        newCategoryError: inputData?.inputValue?.newCategory
          ? ""
          : "Category is required",
      },
    }));
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkInputValidity()) {
      alert("submit");
    }
  };

  return {
    inputData,
    setInputData,
    handleInputChange,
    handleSubmit,
  };
};

export default useAddBookMark;
