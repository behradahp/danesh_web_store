"use client";
import { useStore } from "@/app/lib/store/store";

// Components
import Badge from "@/app/components/Common/Badge";
import MobileMenu from "./MobileMenu";

// Icons
import basketIcon from "@/app/assets/icons/header-icons/basket-icon.svg";
import savedIcon from "@/app/assets/icons/header-icons/saved-icon.svg";
// import likedIcon from "@/app/assets/icons/header-icons/liked-icon.svg";

function InfoButtons() {
  const { store } = useStore();

  return (
    <>
      <button className='cursor-pointer'>
        <Badge
          bgColor='bg-info-light'
          icon={basketIcon}
          count={store.basket.length}
          badgeColor='bg-info'
          className='lg:w-[40px] lg:h-[40px]'
        />
      </button>
      <button className='cursor-pointer'>
        <Badge
          bgColor='bg-success-light'
          icon={savedIcon}
          count={store.saved.length}
          badgeColor='bg-success'
          className='lg:w-[40px] lg:h-[40px]'
        />
      </button>
      {/* <button className='cursor-pointer'>
        <Badge
          bgColor='bg-error-light'
          icon={likedIcon}
          size={40}
          count={4}
          badgeColor='bg-error'
        />
      </button> */}

      <MobileMenu />
    </>
  );
}

export default InfoButtons;
