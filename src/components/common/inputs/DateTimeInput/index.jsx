import { useState } from "react";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateTimeInput({
  label,
  value,
  onChange,
  placeholder = "DD/MM/YYYY HH:mm",
  error,
  className = "",
  showTimeSelect = true,
  dateFormat = "dd/MM/yyyy HH:mm",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <DatePicker
          selected={value}
          onChange={onChange}
          showTimeSelect={showTimeSelect}
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat={dateFormat}
          locale={vi}
          placeholderText={placeholder}
          className={`
            block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 
            shadow-sm ring-1 ring-inset ${
              error ? "ring-red-300" : "ring-gray-300"
            }
            placeholder:text-gray-400
            focus:ring-2 focus:ring-inset focus:ring-primary-600
            sm:text-sm sm:leading-6
          `}
          open={isOpen}
          onClickOutside={() => setIsOpen(false)}
          onInputClick={() => setIsOpen(true)}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default DateTimeInput;
