import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DocumentDuplicateIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

function Dashboard() {
  const [stats] = useState([
    {
      name: "Tổng loại hợp đồng",
      value: "156",
      change: "+12%",
      changeType: "increase",
    },
    {
      name: "Loại hợp đồng hoạt động",
      value: "142",
      change: "+4.75%",
      changeType: "increase",
    },
    {
      name: "Loại hợp đồng tạm dừng",
      value: "14",
      change: "-3%",
      changeType: "decrease",
    },
  ]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Tổng quan loại hợp đồng
        </h1>
      </div>

      {/* Stats */}
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-primary-500 p-3">
                <DocumentDuplicateIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
              <p
                className={`
                  ml-2 flex items-baseline text-sm font-semibold
                  ${
                    stat.changeType === "increase"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                `}
              >
                {stat.changeType === "increase" ? (
                  <ArrowUpIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}
                <span className="sr-only">
                  {stat.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                  by
                </span>
                {stat.change}
              </p>
            </dd>
          </div>
        ))}
      </dl>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Thao tác nhanh
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            to="/contract-types/create"
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-primary-400 hover:bg-primary-50"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Thêm loại hợp đồng mới
              </p>
            </div>
          </Link>
          <Link
            to="/reports"
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-primary-400 hover:bg-primary-50"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">Xem báo cáo</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
