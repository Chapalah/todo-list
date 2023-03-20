import { memo } from "react";
import { Button, Layout, Row, Typography } from "antd";
import { useAppDispatch } from "../hooks";
import { openModal } from "../store/modalSlice";

const { Title } = Typography;
const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  height: "80px",
  marginBottom: "1rem",
  padding: "20px 15px",
  lineHeight: "120%",
};

const titleStyle: React.CSSProperties = {
  color: "#ffffff",
  margin: "0",
};

const PageHeader = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal("create"));
  };

  return (
    <Header style={headerStyle}>
      <Row align={"middle"} justify={"space-between"}>
        <Title style={titleStyle}>Todo List</Title>

        <Button type="primary" size="large" onClick={handleClick}>
          Create new todo
        </Button>
      </Row>
    </Header>
  );
};

export default memo(PageHeader);
