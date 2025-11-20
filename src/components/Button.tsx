type ButtonProps = React.ComponentProps<"button"> & {
  size?: "sm" | "default" | "lg";
  variant?: "default" | "success" | "warning" | "danger";
};

export default function Button({
  children,
  size = "default",
  variant = "default",
  className = "",
  ...rest
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    default: "px-3.5 py-1.5 text-sm",
    lg: "px-5 py-2.5 text-base",
  }[size];

  const variantClasses = {
    default: "bg-gray-200 text-gray-600 border border-gray-500 shadow-sm",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-700",
    warning: "bg-amber-50 text-amber-400 border border-amber-400",
    danger: "bg-red-50 text-red-400 border border-red-400",
  }[variant];

  return (
    <button
      {...rest}
      className={`${sizeClasses} ${variantClasses} rounded font-semibold ${className}`}
    >
      {children}
    </button>
  );
}
