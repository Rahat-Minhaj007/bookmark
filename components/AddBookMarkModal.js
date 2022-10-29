import React, { useState } from "react";
import { urlRegEx } from "../helpers/regex";
import useAddBookMark from "../hooks/useAddBookMark";
import ModalLayout from "./resuseable/ModalLayout";
import Input from "./resuseable/ReuseableInput";

const AddBookMarkModal = ({ handleShow, show }) => {
  const { inputData, setInputData, handleInputChange, handleSubmit } =
    useAddBookMark();
  const [showNewCategory, setShowNewCategory] = useState(false);

  //   console.log(inputData);
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
        <div>
          <label className="form-label inline-block mb-2 text-gray-700 text-[14px] font-[400]">
            Category<font className="text-red-500">*</font>
          </label>
          <div className="flex space-x-2">
            <select
              name="category"
              id="category"
              placeholder="select category"
              disabled={showNewCategory}
              className=" outline-none rounded py-3 px-2 w-full focus:bg-[#e8f0fe] border-[1px] border-slate-[50] text-[14px]"
              onChange={(e) => {
                handleInputChange(e);
                setInputData((prev) => {
                  let categoryError = "";
                  if (!e.target.value) {
                    categoryError = "category is required";
                  } else {
                    categoryError = "";
                  }
                  return {
                    ...prev,
                    inputError: {
                      ...prev.inputError,
                      categoryError,
                    },
                  };
                });
              }}
              value={inputData?.inputValue?.category}
              error={inputData?.inputError?.categoryError}
            >
              <option value="">Select a category</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
            <div>
              <button
                type="button"
                className="bg-primary p-3 text-center text-white"
                onClick={() => setShowNewCategory(!showNewCategory)}
              >
                {showNewCategory ? "-" : "+"}
              </button>
            </div>
          </div>
        </div>
        {showNewCategory && (
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
        )}

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
