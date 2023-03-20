import { memo } from "react";
import { Button, Layout, Row, Typography } from "antd";

const { Title } = Typography;
const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  height: "80px",
  marginBottom: '1rem',
  padding: "20px 15px",
  lineHeight: "120%",
};

const titleStyle: React.CSSProperties = {
  color: "#ffffff",
  margin: "0",
};

const PageHeader = () => {
  return (
    <Header style={headerStyle}>
      <Row align={"middle"} justify={"space-between"}>
        <Title style={titleStyle}>Todo List</Title>

        <Button type="primary" size="large">
          Create new todo
        </Button>
      </Row>
    </Header>
  );
};

export default memo(PageHeader);
