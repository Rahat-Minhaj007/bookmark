import React from "react";
import { urlRegEx } from "../helpers/regex";
import useAddBookMark from "../hooks/useAddBookMark";
import ModalLayout from "./resuseable/ModalLayout";
import Input from "./resuseable/ReuseableInput";

const AddBookMarkModal = ({ handleShow, show }) => {
  const { inputData, setInputData, handleInputChange, handleSubmit } =
    useAddBookMark();
  console.log(inputData);
  return (
    <ModalLayout handleShow={handleShow} show={show}>
      <form>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pt-6">
          <div>
            <label className="form-label inline-block mb-2 text-gray-700 text-[14px] font-[400]">
              Title<font className="text-red-500">*</font>
            </label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Enter the Title"
              autoComplete="off"
              className=" outline-none rounded py-3 px-2 w-full focus:bg-[#e8f0fe] border-[1px] border-slate-[50] text-[14px]"
              onChange={(e) => {
                handleInputChange(e);
                setInputData((prev) => {
                  let titleError = "";
                  if (!e.target.value) {
                    titleError = "Title is required";
                  } else if (e.target.value.length > 30) {
                    titleError = "Title max length is " + 30;
                  } else {
                    titleError = "";
                  }
                  return {
                    ...prev,
                    inputError: {
                      ...prev.inputError,
                      titleError,
                    },
                  };
                });
              }}
              value={inputData.inputValue.title}
              error={inputData?.inputError?.titleError}
            />
          </div>
          <div>
            <label className="form-label inline-block mb-2 text-gray-700 text-[14px] font-[400]">
              URL<font className="text-red-500">*</font>
            </label>
            <Input
              type="text"
              name="url"
              id="url"
              placeholder="Enter the URL"
              autoComplete="off"
              className=" outline-none rounded py-3 px-2 w-full focus:bg-[#e8f0fe] border-[1px] border-slate-[50] text-[14px]"
              onChange={(e) => {
                handleInputChange(e);
                setInputData((prev) => {
                  let urlError = "";
                  if (!e.target.value) {
                    urlError = "url is required";
                  } else if (!urlRegEx.test(e.target.value)) {
                    urlError = "url is invalid";
                  } else {
                    urlError = "";
                  }
                  return {
                    ...prev,
                    inputError: {
                      ...prev.inputError,
                      urlError,
                    },
                  };
                });
              }}
              value={inputData?.inputValue?.url}
              error={inputData?.inputError?.urlError}
            />
          </div>
        </div>
        <div className="pt-3">
          <label className="form-label inline-block mb-2 text-gray-700 text-[14px] font-[400]">
            New Category<font className="text-red-500">*</font>
          </label>
          <Input
            type="text"
            name="newCategory"
            id="newCategory"
            placeholder="Add New Category"
            autoComplete="off"
            className=" outline-none rounded py-3 px-2 w-full focus:bg-[#e8f0fe] border-[1px] border-slate-[50] text-[14px]"
            onChange={(e) => {
              handleInputChange(e);
              setInputData((prev) => {
                let newCategoryError = "";
                if (!e.target.value) {
                  newCategoryError = "url is required";
                } else {
                  newCategoryError = "";
                }
                return {
                  ...prev,
                  inputError: {
                    ...prev.inputError,
                    newCategoryError,
                  },
                };
              });
            }}
            value={inputData?.inputValue?.newCategory}
            error={inputData?.inputError?.newCategoryError}
          />
        </div>

        <div className="my-3">
          <button
            type="submit"
            className="uppercase text-[12px] font-[500] bg-primary  p-4 text-center text-white w-4/12 rounded"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default AddBookMarkModal;
