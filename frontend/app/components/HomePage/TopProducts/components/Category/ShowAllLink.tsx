import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icons
import simpleArrowIcon from "@/app/assets/icons/common/simple-arrow-icon.svg";

function ShowAllLink() {
  const [linkWidth, setLinkWidth] = useState<string>("w-[100%]");

  return (
    <Link href='/products'>
      <div className='w-[140px] h-[55px] bg-white rounded-full p-[2px]'>
        <div
          className='w-full h-full flex justify-between bg-secondary rounded-full border-[3px] border-[#dce6ff] overflow-hidden'
          onMouseEnter={() => setLinkWidth("w-[75%]")}
          onMouseLeave={() => setLinkWidth("w-[100%]")}
        >
          <div
            className={`flex-shrink-0 ${linkWidth} h-full flex items-center justify-center bg-white rounded-full transition-all`}
          >
            <span className='text-[14px] font-[500] text-primary'>
              مشاهده همه
            </span>
          </div>
          <Image src={simpleArrowIcon} alt='arrow' width={35} height={35} />
        </div>
      </div>
    </Link>
  );
}

export default ShowAllLink;
