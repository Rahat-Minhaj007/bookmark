import React from "react";
import ModalLayout from "./resuseable/ModalLayout";

const AddBookMarkModal = ({ handleShow, show }) => {
  return (
    <ModalLayout handleShow={handleShow} show={show}>
      <input type="text" />
    </ModalLayout>
  );
};

export default AddBookMarkModal;
