import Image from "next/image";

interface IBadgeProps {
  bgColor: string;
  badgeColor: string;
  icon: string;
  size?: "small" | "medium" | "large";
  count: number;
  showOnZero?: boolean;
  className?: string;
}

function Badge({
  icon,
  bgColor,
  size = "medium",
  badgeColor,
  count,
  showOnZero,
  className,
}: IBadgeProps) {
  return (
    <div
      className={`relative flex justify-center items-center ${
        size === "small"
          ? "w-[25px] h-[25px]"
          : size === "medium"
          ? "w-[35px] h-[35px]"
          : "w-[40px] h-[40px]"
      } ${bgColor} rounded-[10px] ${className}`}
    >
      <Image
        src={icon}
        alt='Basket Icon'
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: "60%", height: "60%" }}
      />

      {showOnZero || count != 0 ? (
        <div
          className={`absolute top-[-6px] right-[-6px] w-[40%] h-[40%] flex justify-center items-center ${badgeColor} rounded-full`}
        >
          <span className='relative top-[1px] left-[1px] text-[11px] text-white'>
            {count.toLocaleString("fa")}
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default Badge;
