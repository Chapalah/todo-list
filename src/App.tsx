import { PageHeader } from "./components";
import { Layout } from "antd";

const layutStyle: React.CSSProperties = {
  minHeight: '100vh'
}

function App() {
  return (
    <Layout style={layutStyle}>
      <PageHeader />
    </Layout>
  );
}

export default App;
