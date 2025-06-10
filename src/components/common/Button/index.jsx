function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-primary-600 text-white shadow-sm hover:bg-primary-500 focus-visible:outline-primary-600",
    secondary:
      "bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
    danger:
      "bg-red-600 text-white shadow-sm hover:bg-red-500 focus-visible:outline-red-600",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-2.5 py-1.5 text-sm",
    lg: "px-3 py-2 text-sm",
    xl: "px-3.5 py-2.5 text-sm",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
