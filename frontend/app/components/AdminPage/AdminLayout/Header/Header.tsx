import Image from "next/image";
import Link from "next/link";

// Components
import Button from "@/app/components/Common/Button";

// Images & Icons
import avatar from "@/app/assets/images/avatar.jpg";
import backIcon from "@/app/assets/icons/admin-panel/back-icon.svg";

function AdminPanelHeader() {
  return (
    <section className='w-full flex items-center justify-between py-4 px-2 bg-white shadow-header rounded-[15px]'>
      {/* Admin Profile */}
      <div className='flex items-center gap-2 lg:gap-4'>
        <Image
          src={avatar}
          alt='Avatar'
          width={0}
          height={0}
          sizes='100vw'
          className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] rounded-full'
        />
        <div className='flex flex-col lg:gap-2'>
          <span className='text-[12px] lg:text-[14px] font-[400]'>
            {"نام شما را نمیدانیم :("}
          </span>
          <span className='text-[10px] lg:text-[12px] font-[400] text-primary'>
            {"سلام ادمین خوشگلم، خوش اومدی:)"}
          </span>
        </div>
      </div>

      {/* Back to home */}
      <Link href='/'>
        <Button
          text='بازگشت به سایت'
          endIcon={
            <Image
              src={backIcon}
              alt='Back Icon'
              width={0}
              height={0}
              sizes='100vw'
              className='w-[25px] h-[25px]'
            />
          }
          buttonStyles='border border-secondary'
          textStyles='text-[14px] text-primary'
        />
      </Link>
    </section>
  );
}

export default AdminPanelHeader;
