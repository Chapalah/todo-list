import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Row, Typography, Space, Checkbox } from "antd";
import { memo } from "react";
import { useAppDispatch } from "../hooks";
import { openEditModal } from "../store/modalSlice";
import { toggleTodo, deleteTodo } from "../store/todoSlice";
import { ITodo } from "../types/todo";

const { Text } = Typography;

const rowStyle: React.CSSProperties = {
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "6px",
  boxShadow: "0px 1px 2px rgba(0,0,0,.15)",
  marginBottom: "15px",
};

interface TodoItemProps extends ITodo {
  index: number
}

const TodoItems = (props: TodoItemProps) => {
  const { title, completed, id, date, index } = props;
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = () => {
    dispatch(openEditModal({id, title}))
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <Row style={rowStyle} align={"middle"} justify="space-between">
      <Space>
        <Text>{index + 1}.</Text>
        <Checkbox checked={completed} onChange={handleChange} />
        <Text>{title}</Text>
      </Space>

      <Row align={"middle"} justify={"end"}>
        <Space size="large">
          <Text>{date}</Text>
          <Space>
            <Button icon={<EditOutlined />} onClick={handleEdit}>
              Edit
            </Button>
            <Button icon={<DeleteOutlined />} danger onClick={handleDelete}>
              Delete
            </Button>
          </Space>
        </Space>
      </Row>
    </Row>
  );
};

export default memo(TodoItems);
