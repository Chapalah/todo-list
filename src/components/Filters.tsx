import { useState, useEffect, memo } from "react";
import { Input, Space, Select, Divider, Button, Typography, Row } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import { TodoFilter } from "../types/todo";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setTodosFilter } from "../store/todoSlice";

const { Text } = Typography;

const selectOptions = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "not completed", label: "Not completed" },
];

const Filter = () => {
  const { list, filteredList } = useAppSelector((state) => state.todos);
  const [filter, setFilter] = useState<TodoFilter>({
    searchValue: "",
    searchOption: "all",
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTodosFilter(filter));
  }, [filter]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, searchValue: event.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setFilter((prev) => ({ ...prev, searchOption: value }));
  };

  const handleClick = () => {
    setFilter({
      searchValue: "",
      searchOption: "all",
    });
  };

  return (
    <>
      <Space wrap>
        <Input
          style={{ width: "max(300px, 50vw)" }}
          placeholder="Find todos by title"
          onChange={handleInputChange}
          value={filter.searchValue}
        />
        <Select
          value={filter.searchOption}
          defaultValue={"all"}
          style={{ width: 240 }}
          onChange={handleSelectChange}
          options={selectOptions}
        />
        <Button icon={<ClearOutlined />} onClick={handleClick}>
          Clear
        </Button>
      </Space>
      <Row style={{ margin: "5px" }}>
        {(filter.searchValue !== "" || filter.searchOption !== "all") && (
          <Text>
            Found{" "}
            <Text
              style={{ color: filteredList.length ? "#52c41a" : "#ff7875" }}
            >
              {filteredList.length}
            </Text>{" "}
            from <Text style={{ color: "#1677ff" }}>{list.length}</Text>
          </Text>
        )}
      </Row>
      <Divider style={{ margin: "15px 0px" }} />
    </>
  );
};

export default memo(Filter);
