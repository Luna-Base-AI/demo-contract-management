import { useState } from "react";
import { Link } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Button from "../../../../components/common/Button";
import StatusBadge from "../../../../components/common/StatusBadge";

function ContractTypeTable({ filters }) {
  const [contractTypes] = useState([
    {
      id: 1,
      code: "M23",
      name: "Dell",
      status: "active",
      creator: "Đỗ Thị Minh Hương",
      creatorId: "12345",
      createdAt: "20/05/2024 - 02:00:000",
    },
    {
      id: 2,
      code: "M23",
      name: "Dell",
      status: "active",
      creator: "Đỗ Thị Minh Hương",
      creatorId: "12345",
      createdAt: "20/05/2024 - 02:00:000",
    },
    {
      id: 3,
      code: "M23",
      name: "Dell",
      status: "active",
      creator: "Đỗ Thị Minh Hương",
      creatorId: "12345",
      createdAt: "20/05/2024 - 02:00:000",
    },
    {
      id: 4,
      code: "M23",
      name: "Dell",
      status: "active",
      creator: "Đỗ Thị Minh Hương",
      creatorId: "12345",
      createdAt: "20/05/2024 - 02:00:000",
    },
    {
      id: 5,
      code: "M23",
      name: "Dell",
      status: "active",
      creator: "Đỗ Thị Minh Hương",
      creatorId: "12345",
      createdAt: "20/05/2024 - 02:00:000",
    },
    {
      id: 6,
      code: "M23",
      name: "Dell",
      status: "active",
      creator: "Đỗ Thị Minh Hương",
      creatorId: "12345",
      createdAt: "20/05/2024 - 02:00:000",
    },
    {
      id: 7,
      code: "M23",
      name: "Dell",
      status: "active",
      creator: "Đỗ Thị Minh Hương",
      creatorId: "12345",
      createdAt: "20/05/2024 - 02:00:000",
    },
    {
      id: 8,
      code: "M23",
      name: "Dell",
      status: "active",
      creator: "Đỗ Thị Minh Hương",
      creatorId: "12345",
      createdAt: "20/05/2024 - 02:00:000",
    },
    {
      id: 9,
      code: "M23",
      name: "Dell",
      status: "active",
      creator: "Đỗ Thị Minh Hương",
      creatorId: "12345",
      createdAt: "20/05/2024 - 02:00:000",
    },
    {
      id: 10,
      code: "M23",
      name: "Dell",
      status: "active",
      creator: "Đỗ Thị Minh Hương",
      creatorId: "12345",
      createdAt: "20/05/2024 - 02:00:000",
    },
  ]);

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg overflow-hidden">
      <div className="min-w-full">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                STT
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Thao tác
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Mã hợp đồng
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Tên hợp đồng
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Trạng thái
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Người tạo
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Ngày tạo
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {contractTypes.map((contract, index) => (
              <tr key={contract.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <div className="flex gap-2">
                    <Link to={`/contract-types/${contract.id}/edit`}>
                      <Button variant="secondary" size="sm">
                        <PencilIcon className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="danger" size="sm">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                  {contract.code}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                  {contract.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <StatusBadge status={contract.status} />
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-900">
                      {contract.creator}
                    </div>
                    <div className="text-gray-500">{contract.creatorId}</div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {contract.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <Button variant="secondary" size="sm">
            Previous
          </Button>
          <Button variant="secondary" size="sm">
            Next
          </Button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Tổng <span className="font-medium">10</span> /{" "}
              <span className="font-medium">1000</span>
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <Button variant="secondary" size="sm" className="rounded-l-md">
                Previous
              </Button>
              <Button variant="primary" size="sm" className="relative z-10">
                1
              </Button>
              <Button variant="secondary" size="sm">
                2
              </Button>
              <Button variant="secondary" size="sm">
                3
              </Button>
              <Button variant="secondary" size="sm">
                4
              </Button>
              <Button variant="secondary" size="sm">
                5
              </Button>
              <Button variant="secondary" size="sm" className="rounded-r-md">
                Next
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractTypeTable;
