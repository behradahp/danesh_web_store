"use client";

// Components
import Badge from "@/app/components/Common/Badge";

// Icons
import basketIcon from "@/app/assets/icons/header-icons/basket-icon.svg";
import savedIcon from "@/app/assets/icons/header-icons/saved-icon.svg";
import likedIcon from "@/app/assets/icons/header-icons/liked-icon.svg";
import { useStore } from "@/app/lib/store/store";

function InfoButtons() {
  const { store } = useStore();

  return (
    <>
      <button className='cursor-pointer'>
        <Badge
          bgColor='bg-info-light'
          icon={basketIcon}
          size={40}
          count={store.basket.length}
          badgeColor='bg-info'
        />
      </button>
      <button className='cursor-pointer'>
        <Badge
          bgColor='bg-success-light'
          icon={savedIcon}
          size={40}
          count={store.saved.length}
          badgeColor='bg-success'
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
    </>
  );
}

export default InfoButtons;
