import Image from "next/image";

interface IBadgeProps {
  bgColor: string;
  badgeColor: string;
  icon: string;
  size: number;
  count: number;
  showOnZero?: boolean;
}

function Badge({
  icon,
  bgColor,
  size,
  badgeColor,
  count,
  showOnZero,
}: IBadgeProps) {
  return (
    <div
      className={`relative flex justify-center items-center ${bgColor} rounded-[10px]`}
      style={{ width: size, height: size }}
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
