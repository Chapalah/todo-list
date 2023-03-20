import { useState, useEffect, memo } from "react";
import { Modal, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAppDispatch, useAppSelector } from "../hooks";
import { closeModal } from "../store/modalSlice";
import { createTodo, editTodo } from "../store/todoSlice";

const TodoModal = () => {
  const { editTodoTitle = "", editTodoId } = useAppSelector(
    (state) => state.modal
  );
  const [inputValue, setInputValue] = useState(editTodoTitle);
  const [isValidationError, setValidationError] = useState(false);
  const { isVisible, action } = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    if (editTodoTitle) {
      setInputValue(editTodoTitle);
    }
  }, [editTodoTitle]);

  const handleSave = () => {
    if (inputValue === "") {
      setValidationError(true);
      return;
    }

    if (action === "create") {
      const date = new Date();
      dispatch(
        createTodo({
          id: date.getTime(),
          title: inputValue,
          date: [date.getDate(), date.getMonth() + 1, date.getFullYear()].join(
            "/"
          ),
          completed: false,
        })
      );
    }

    if (action === "edit") {
      if (editTodoId) {
        dispatch(
          editTodo({
            id: editTodoId,
            title: inputValue,
          })
        );
      }
    }

    dispatch(closeModal());
    setInputValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.target.value === ""
      ? setValidationError(true)
      : setValidationError(false);

    setInputValue(event.target.value);
  };

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
        <Button
          key="submit"
          type="primary"
          disabled={isValidationError}
          onClick={handleSave}
        >
          Submit
        </Button>,
      ]}
    >
      <TextArea
        status={isValidationError ? "error" : ""}
        style={{ maxHeight: "300px" }}
        value={inputValue}
        onChange={handleChange}
      />
    </Modal>
  );
};

export default memo(TodoModal);
