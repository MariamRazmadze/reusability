import { IoPersonSharp } from "react-icons/io5";

type Avatar = {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  colorClass?: "navy" | "pink" | "red" | "blue" | "green";
};

const colorMap = {
  navy: "bg-gray-800",
  pink: "bg-[#da6aec]",
  red: "bg-rose-500",
  blue: "bg-[#2f74dc]",
  green: "bg-[#22cd90]",
};

export default function Avatar({
  src,
  alt,
  children,
  colorClass = "red",
}: Avatar) {
  const baseStyles =
    "h-[150px] w-[150px] rounded-full overflow-hidden flex items-center justify-center border-[0.3rem] border-white";

  if (src) {
    return (
      <div className={baseStyles}>
        <img src={src} alt={alt} className="w-full" />
      </div>
    );
  }

  if (children) {
    return (
      <div
        className={`${baseStyles} ${colorMap[colorClass]} text-white text-[2.5rem] font-['Karla',sans-serif]`}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={`${baseStyles} bg-gray-800`}>
      <IoPersonSharp className="h-full w-full translate-y-5 text-[whitesmoke]" />
    </div>
  );
}
