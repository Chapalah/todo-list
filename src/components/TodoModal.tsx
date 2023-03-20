import { memo } from "react";
import { Modal, Button } from "antd";
import TextArea from "antd/es/input/TextArea";

const TodoModal = () => {
  const handleCancel = () => {};
  const handleSave = () => {};

  return (
    <Modal
      open={false}
      width={420}
      title="Todo Modal"
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
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
