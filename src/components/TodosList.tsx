import { memo } from "react";
import { Empty, Button, Spin } from "antd";
import TodoItem from "./TodoItem";

import { LoadingOutlined } from "@ant-design/icons";

const spinStyle: React.CSSProperties = {
  position: 'absolute',
  top: '40vh',
  left: '50%',
}

const TodosTable = () => {
  if (false) {
    return (
      <Empty description={"There are no todos"}>
        <Button type="primary">Create now</Button>
      </Empty>
    );
  }

  if (false) {
    return (
      <Spin style={spinStyle} indicator={<LoadingOutlined style={{ fontSize: "3rem" }} />} />
    );
  }

  return (
    <>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </>
  );
};

export default memo(TodosTable);
