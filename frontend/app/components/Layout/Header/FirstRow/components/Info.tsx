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
    <div className='flex gap-6 items-center'>
      <AuthButton>
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
      </AuthButton>
      <InfoButtons />
    </div>
  );
}

export default HeaderInfo;
