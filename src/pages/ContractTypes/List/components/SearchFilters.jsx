import TextInput from "../../../../components/common/inputs/TextInput";
import SelectInput from "../../../../components/common/inputs/SelectInput";
import DateTimeInput from "../../../../components/common/inputs/DateTimeInput";

function SearchFilters({ filters, onFiltersChange }) {
  const handleChange = (field, value) => {
    onFiltersChange({ ...filters, [field]: value });
  };

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg">
      <div className="px-4 py-6 sm:p-6">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <TextInput
            label="Mã hợp đồng"
            placeholder="Nhập mã hợp đồng..."
            value={filters.contractCode}
            onChange={(e) => handleChange("contractCode", e.target.value)}
          />

          <TextInput
            label="Tên hợp đồng"
            placeholder="Nhập tên hợp đồng..."
            value={filters.contractName}
            onChange={(e) => handleChange("contractName", e.target.value)}
          />

          <SelectInput
            label="Trạng thái"
            placeholder="Chọn trạng thái"
            value={filters.status}
            onChange={(value) => handleChange("status", value)}
            options={[
              { value: "active", label: "Hiển thị lên" },
              { value: "inactive", label: "Ẩn" },
            ]}
          />

          <SelectInput
            label="Người tạo"
            placeholder="Chọn người tạo"
            value={filters.creator}
            onChange={(value) => handleChange("creator", value)}
            options={[
              { value: "1", label: "Đỗ Thị Minh Hương" },
              { value: "2", label: "Nguyễn Văn A" },
            ]}
          />

          <DateTimeInput
            label="Ngày tạo"
            value={filters.dateRange}
            onChange={(value) => handleChange("dateRange", value)}
            placeholder="Chọn ngày..."
            showTimeSelect={false}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchFilters;
