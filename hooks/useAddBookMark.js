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
        categoryError: inputData?.inputValue?.category
          ? ""
          : "Category is required",
        newCategoryError:
          inputData?.inputValue?.newCategory || inputData?.inputValue?.category
            ? ""
            : "New Category is required",
      },
    }));
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkInputValidity()) {
      const bookmarks = window.localStorage.getItem("bookmarks");
      const bookmarksArray = JSON.parse(bookmarks);
      const newBookMark = {
        title: inputData?.inputValue?.title,
        url: inputData?.inputValue?.url,
        category: inputData?.inputValue?.category
          ? inputData?.inputValue?.category
          : inputData?.inputValue?.newCategory,
      };
      bookmarksArray.push(newBookMark);
      window.localStorage.setItem("bookmarks", JSON.stringify(bookmarksArray));
      setInputData((prev) => {
        return {
          ...prev,
          inputValue: {
            title: "",
            url: "",
            category: "",
            newCategory: "",
          },
        };
      });
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
