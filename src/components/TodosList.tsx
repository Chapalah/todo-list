import { memo } from "react";
import { Empty, Button } from "antd";
import { TodoItem } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { openCreateModal } from "../store/modalSlice";

const TodosList = () => {
  const {list } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openCreateModal());
  };

  if (!list.length) {
    return (
      <Empty description={"There are no todos"}>
        <Button type="primary" onClick={handleClick}>
          Create now
        </Button>
      </Empty>
    );
  }

  return (
    <>
      {list.map((item, index) => (
        <TodoItem {...item} index={index} key={item.id}/>
      ))}
    </>
  );
};

export default memo(TodosList);
