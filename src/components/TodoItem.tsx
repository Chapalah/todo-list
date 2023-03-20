import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Row, Typography, Space, Checkbox } from "antd";
import { memo } from "react";

const { Text } = Typography;

const rowStyle: React.CSSProperties = {
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "6px",
  boxShadow: "0px 1px 2px rgba(0,0,0,.15)",
  marginBottom: "15px",
  cursor: "pointer",
};

const TodoItems = () => {
  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <Row style={rowStyle} align={"middle"} justify="space-between">
      <Space>
        <Checkbox></Checkbox>
        <Text>Test todo</Text>
      </Space>

      <Row align={"middle"} justify={"end"}>
        <Space size="large">
          <Text>24\05\2022</Text>
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
