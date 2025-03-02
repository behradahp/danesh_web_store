"use client";

import Image from "next/image";

// Components
import Button from "@/app/components/Common/Button";

// Icons
import filterIcon from "@/app/assets/icons/common/filter-icon.svg";
import searchIcon from "@/app/assets/icons/common/search-icon.svg";

function HeaderSearch() {
  return (
    <div className='w-[500px] h-[100%] flex gap-2 rounded-lg bg-mainBg p-2'>
      <Button
        text='فیلتر محصولات'
        startIcon={
          <Image src={filterIcon} alt='Search Icon' width={20} height={20} />
        }
        buttonStyles='bg-white text-[14px]'
      />

      <input type='text' className='flex-grow outline-0' />

      <button className='cursor-pointer'>
        <Image src={searchIcon} alt='Search Icon' width={30} height={30} />
      </button>
    </div>
  );
}

export default HeaderSearch;
