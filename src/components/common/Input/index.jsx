function Input({ label, error, className = "", ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
          {label}
        </label>
      )}
      <div>
        <input
          className={`
            block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
            ${error ? "ring-red-300" : "ring-gray-300"}
            placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-primary-600 
            sm:text-sm sm:leading-6
          `}
          {...props}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default Input;
