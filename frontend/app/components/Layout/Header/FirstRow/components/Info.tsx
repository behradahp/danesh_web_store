import Image from "next/image";
import Link from "next/link";

// Components
import AuthButton from "./AuthButtons";
import InfoButtons from "./InfoButtons";
import Button from "@/app/components/Common/Button";

// Icons
import authIcon from "@/app/assets/icons/common/auth-icon.svg";

function HeaderInfo() {
  return (
    <div className='flex gap-4 lg:gap-6 items-center'>
      <div className='hidden lg:block'>
        <AuthButton>
          <Link href='/login'>
            <Button
              text='ورود/ثبت نام'
              buttonStyles='bg-secondary'
              textStyles='text-white text-[12px] lg:text-[14px]'
              startIcon={
                <Image
                  src={authIcon}
                  alt='Login Icon'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-[18px] h-[18px] lg:w-[25px] lg:h-[25px]'
                />
              }
            />
          </Link>
        </AuthButton>
      </div>
      <InfoButtons />
    </div>
  );
}

export default HeaderInfo;
