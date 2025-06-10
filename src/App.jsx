import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import ContractTypeList from "./pages/ContractTypes/List";
import ContractTypeCreate from "./pages/ContractTypes/Create";
import ContractTypeEdit from "./pages/ContractTypes/Edit";
import ContractTypeDetail from "./pages/ContractTypes/Detail";
import Reports from "./pages/Reports";
import Search from "./pages/Search";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contract-types" element={<ContractTypeList />} />
            <Route
              path="/contract-types/create"
              element={<ContractTypeCreate />}
            />
            <Route
              path="/contract-types/:id/edit"
              element={<ContractTypeEdit />}
            />
            <Route
              path="/contract-types/:id"
              element={<ContractTypeDetail />}
            />
            <Route path="/reports" element={<Reports />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
