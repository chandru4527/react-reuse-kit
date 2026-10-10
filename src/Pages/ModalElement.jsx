import React from "react";
import useModalStore from "../store/modalStore";
import Button from "../components/buttons/Button";
import ConfirmContent from '../components/overlay/ConfirmContent'
import DrawerElements from "./DrawerElements";
import { shape } from "prop-types";

const ModalElement = () => {
  const { openModal, closeModal } = useModalStore();

  const handleOpenModal = () => {
    openModal({
      title: "My Modal",
      content: <div>This is modal content</div>,
      size: "md",
      // shape :'rounded',
      action: {
        label: "Save",
        // variant: "",
        className: '',
        onClick: () => {
          console.log("Save clicked");
        },
      },
    });
  };
  const handleConfirm = () => {
    openModal({
      title: "Delete User",
      content: (
        <ConfirmContent
          type="danger"
          message="Are you sure you want to delete this user?"
        />
      ),
      size: "md",
      rounded: "md",
      action: {
        label: "Delete",
        variant: "danger",
        onClick: () => {
          console.log("User deleted");
          closeModal()
        },
      },
    });
  };

  return (
    <div className="p-5 flex flex-col items-center gap-5">
      <Button onClick={handleOpenModal}>
        Open Modal
      </Button>

      <Button onClick={handleConfirm}>
        Confirm Modal
      </Button>

      <DrawerElements/>
    </div>
  );
};

export default ModalElement;