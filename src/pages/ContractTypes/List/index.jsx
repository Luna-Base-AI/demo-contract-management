import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PlusIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import ContractTypeTable from "./components/ContractTypeTable";
import SearchFilters from "./components/SearchFilters";
import Button from "../../../components/common/Button";

function ContractTypeList() {
  const [filters, setFilters] = useState({
    contractCode: "",
    contractName: "",
    status: "",
    creator: "",
    dateRange: null,
  });

  return (
    <div className="space-y-4">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          Danh sách loại hợp đồng
        </h1>
        <div className="mt-4 sm:mt-0 sm:flex sm:space-x-3">
          <Button variant="secondary">
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Xuất
          </Button>
          <Button variant="secondary">
            <ArrowUpTrayIcon className="h-5 w-5 mr-2" />
            Nhập
          </Button>
          <Link to="/contract-types/create">
            <Button variant="primary">
              <PlusIcon className="h-5 w-5 mr-2" />
              Thêm mới
            </Button>
          </Link>
        </div>
      </div>

      <SearchFilters filters={filters} onFiltersChange={setFilters} />
      <ContractTypeTable filters={filters} />
    </div>
  );
}

export default ContractTypeList;
