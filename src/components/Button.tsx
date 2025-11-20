import classNames from "classnames";

type ButtonProps = React.ComponentProps<"button"> & {
  size?: "sm" | "lg";
  variant?: "success" | "warning" | "danger";
};

export default function Button({
  children,
  className,
  size,
  variant,
  ...rest
}: ButtonProps) {
  const sizeClass = size && `button-${size}`;
  const variantClass = variant && `button-${variant}`;

  const allClasses = classNames(sizeClass, className, variantClass);
  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
