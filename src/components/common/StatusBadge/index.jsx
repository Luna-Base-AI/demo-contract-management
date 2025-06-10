function StatusBadge({ status }) {
  const styles = {
    active: "bg-green-50 text-green-700 ring-green-600/20",
    inactive: "bg-gray-50 text-gray-700 ring-gray-600/20",
  };

  const labels = {
    active: "Hiển thị lên",
    inactive: "Ẩn",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

export default StatusBadge;
