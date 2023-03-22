import { useEffect, memo } from "react";
import { Empty, Button } from "antd";
import { Filter, ProgressBar, TodoItem } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { openCreateModal } from "../store/modalSlice";
import { filterTodos } from "../store/todoSlice";

const TodosList = () => {
  const { list, filteredList, filter } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterTodos());
  }, [list, filter]);

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
      <Filter />
      {filteredList.length ? (
        <>
          <ProgressBar />
          {filteredList.map((item, index) => (
            <TodoItem {...item} index={index} key={item.id} />
          ))}
        </>
      ) : (
        <Empty description={"Nothing found"} />
      )}
    </>
  );
};

export default memo(TodosList);
