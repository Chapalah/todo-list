import { memo } from "react";
import { Modal, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAppDispatch, useAppSelector } from "../hooks";
import { closeModal } from "../store/modalSlice";

const TodoModal = () => {
  const { isVisible, action } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const handleSave = () => {};

  const renderTitle = (action: string) => {
    switch (action) {
      case "create":
        return "Create Todo";
      case "edit":
        return "Edit Todo";
      default:
        return "";
    }
  };

  return (
    <Modal
      open={isVisible}
      width={420}
      title={renderTitle(action)}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Close
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave}>
          Submit
        </Button>,
      ]}
    >
      <TextArea style={{ maxHeight: "300px" }} />
    </Modal>
  );
};

export default memo(TodoModal);
