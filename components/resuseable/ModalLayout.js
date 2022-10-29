import { Dialog, DialogBody } from "@material-tailwind/react";
import React from "react";
import { CgClose } from "react-icons/cg";

const ModalLayout = ({ children = null, handleShow, show }) => {
  return (
    <div>
      <Dialog
        open={show}
        handler={handleShow}
        className="modal relative bg-white m-4 rounded-lg shadow-2xl text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed overflow-y-auto xl:min-w-[60%] xl:max-w-[60%] lg:min-w-[75%] lg:max-w-[75%] md:min-w-[85%] md:max-w-[85%] min-w-[90%] max-w-[90%] w-full max-h-[500px] border-none"
      >
        <div className="bg-primary  sticky top-0 z-10  p-4 border-none">
          <div className="relative">
            <h1 className="text-center text-white text-[24px] font-[600]">
              {" "}
              Add Bookmarks
            </h1>
            <button
              type="button"
              className="absolute top-1 right-2  bg-white rounded-full text-black  dark:text-darkTextPrimary p-2"
              onClick={() => handleShow()}
            >
              <CgClose size={20} />
            </button>
          </div>
        </div>
        <DialogBody
          divider
          className="text-justify p-5 dark:bg-darkPrimary dark:text-darkTextPrimary border-none"
          style={{ display: "inherit" }}
        >
          {children}
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ModalLayout;
