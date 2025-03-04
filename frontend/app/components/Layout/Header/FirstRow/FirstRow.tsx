import Image from "next/image";

// Components
import HeaderSearch from "./components/Search";
import HeaderInfo from "./components/Info";

// Icon
import shopIcon from "@/app/assets/icons/common/shop-icon.svg";

function HeaderFirstRow() {
  return (
    <section className='w-full flex justify-between bg-white rounded-[10px] shadow-header p-4'>
      <div className='flex items-center gap-2 lg:gap-3'>
        <Image
          src={shopIcon}
          alt='Shop Icon'
          width={0}
          height={0}
          sizes='100vw'
          className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]'
        />
        <span className='text-[14px] lg:text-[17px] font-[300] w-[50px] lg:w-auto'>
          دانــــش کامپیـــــوتر
        </span>
      </div>

      <HeaderSearch />

      <HeaderInfo />
    </section>
  );
}

export default HeaderFirstRow;
