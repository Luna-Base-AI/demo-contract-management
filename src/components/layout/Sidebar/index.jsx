import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  DocumentDuplicateIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Trang chủ", href: "/", icon: HomeIcon },
  {
    name: "Loại hợp đồng",
    href: "/contract-types",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Phân loại hợp đồng",
    href: "/contract-categories",
    icon: FolderIcon,
  },
  { name: "Báo cáo", href: "/reports", icon: ChartBarIcon },
  { name: "Tìm kiếm", href: "/search", icon: MagnifyingGlassIcon },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="/assets/images/logo.svg"
            alt="Contract Management"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`
                          group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
                          ${
                            isActive
                              ? "bg-gray-50 text-primary-600"
                              : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                          }
                        `}
                      >
                        <item.icon
                          className={`h-6 w-6 shrink-0 ${
                            isActive
                              ? "text-primary-600"
                              : "text-gray-400 group-hover:text-primary-600"
                          }`}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
