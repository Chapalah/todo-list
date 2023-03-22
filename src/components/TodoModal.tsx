import { useState, useEffect, memo } from "react";
import { Modal, Button, Typography, Divider } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAppDispatch, useAppSelector } from "../hooks";
import { closeModal } from "../store/modalSlice";
import { createTodo, deleteTodo, editTodo } from "../store/todoSlice";

const { Text } = Typography;

const TodoModal = () => {
  const { targetTodoTitle = "", targetTodoId } = useAppSelector(
    (state) => state.modal
  );
  const [inputValue, setInputValue] = useState(targetTodoTitle);
  const [isValidationError, setValidationError] = useState(false);
  const { isVisible, action } = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(closeModal());
    setInputValue("");
  };

  useEffect(() => {
    if (targetTodoTitle) {
      setInputValue(targetTodoTitle);
    }
  }, [targetTodoTitle]);

  const handleSave = () => {
    if (inputValue === "") {
      setValidationError(true);
      return;
    }

    switch (action) {
      case "create":
        const date = new Date();
        dispatch(
          createTodo({
            id: date.getTime(),
            title: inputValue,
            date: [
              date.getDate(),
              date.getMonth() + 1,
              date.getFullYear(),
            ].join("/"),
            completed: false,
          })
        );
        break;
      case "edit":
        targetTodoId &&
          dispatch(
            editTodo({
              id: targetTodoId,
              title: inputValue,
            })
          );

        break;
      case "delete":
        targetTodoId && dispatch(deleteTodo(targetTodoId));
        break;
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
      case "delete":
        return "Delete Todo";
      default:
        return "";
    }
  };

  const renderSubmitButton = (action: string) => {
    switch (action) {
      case "delete":
        return (
          <Button
            key="submit"
            danger
            disabled={isValidationError}
            onClick={handleSave}
          >
            Delete
          </Button>
        );
      default:
        return (
          <Button
            key="submit"
            type="primary"
            disabled={isValidationError}
            onClick={handleSave}
          >
            Submit
          </Button>
        );
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
        renderSubmitButton(action),
      ]}
    >
      {action === "delete" ? (
        <>
          <Text>Are you sure you want to delete this todo?</Text>
          <Divider style={{ margin: "10px 0px" }} />
          <Text>Todo title: {targetTodoTitle}</Text>
        </>
      ) : (
        <TextArea
          status={isValidationError ? "error" : ""}
          style={{ maxHeight: "300px" }}
          value={inputValue}
          onChange={handleChange}
        />
      )}
    </Modal>
  );
};

export default memo(TodoModal);
