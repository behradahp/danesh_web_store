import Image from "next/image";
import Link from "next/link";

// Components
import Button from "@/app/components/Common/Button";
import Badge from "@/app/components/Common/Badge";

// Icons
import authIcon from "@/app/assets/icons/common/auth-icon.svg";
import basketIcon from "@/app/assets/icons/header-icons/basket-icon.svg";
import savedIcon from "@/app/assets/icons/header-icons/saved-icon.svg";
import likedIcon from "@/app/assets/icons/header-icons/liked-icon.svg";

function HeaderInfo() {
  return (
    <div className='flex gap-6 items-center'>
      <Link href='/login'>
        <Button
          text='ورود/ثبت نام'
          buttonStyles='bg-secondary'
          textStyles='text-white text-[14px]'
          startIcon={
            <Image src={authIcon} alt='Login Icon' width={25} height={25} />
          }
        />
      </Link>

      <button className='cursor-pointer'>
        <Badge
          bgColor='bg-info-light'
          icon={basketIcon}
          size={40}
          count={3}
          badgeColor='bg-info'
        />
      </button>
      <button className='cursor-pointer'>
        <Badge
          bgColor='bg-success-light'
          icon={savedIcon}
          size={40}
          count={3}
          badgeColor='bg-success'
        />
      </button>
      <button className='cursor-pointer'>
        <Badge
          bgColor='bg-error-light'
          icon={likedIcon}
          size={40}
          count={4}
          badgeColor='bg-error'
        />
      </button>
    </div>
  );
}

export default HeaderInfo;
