import React, { useState } from "react";
import AddBookMarkModal from "../AddBookMarkModal";
import ReuseAbleButton from "../resuseable/ReuseableButton";

const Main = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!open);
  return (
    <div>
      <div className="flex justify-center mt-10">
        <ReuseAbleButton
          onClick={() => {
            setShow(true);
          }}
          color="bg-primary text-white"
          tooltip="Add Bookmark"
        >
          Add Bookmark
        </ReuseAbleButton>
      </div>

      {show && <AddBookMarkModal handleShow={handleShow} show={show} />}
    </div>
  );
};

export default Main;
