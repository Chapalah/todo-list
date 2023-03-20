import { PageHeader, TodoModal, TodosTable } from "./components";
import { Layout, Row, Col } from "antd";

const layutStyle: React.CSSProperties = {
  minHeight: "100vh",
};

function App() {
  return (
    <Layout style={layutStyle}>
      <TodoModal />
      <PageHeader />
        <Row>
          <Col span={20} offset={2}>
            <TodosTable />
          </Col>
        </Row>
    </Layout>
  );
}

export default App;
