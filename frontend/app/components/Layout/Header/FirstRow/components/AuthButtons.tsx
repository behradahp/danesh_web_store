"use client";

// Context
import { useStore } from "@/app/lib/store/store";
import Image from "next/image";

// Images
import avatar from "@/app/assets/images/avatar.jpg";

function AuthButton({ children }: { children: React.ReactNode }) {
  const { store } = useStore();

  if (store.auth.isAuthenticated) {
    return (
      <div className='flex items-center gap-2 lg:gap-4'>
        <div className='flex flex-col lg:gap-2'>
          <span className='text-[12px] lg:text-[14px] font-[400]'>
            {store.auth.userInfo.first_name || "نام شما را نمیدانیم :("}
          </span>
          <span className='text-[10px] lg:text-[12px] font-[400] text-primary'>
            {store.auth.userInfo.phone || "۰۹۰۱۵۸۲۰۵۷۱"}
          </span>
        </div>

        <Image
          src={avatar}
          alt='Avatar'
          width={0}
          height={0}
          sizes='100vw'
          className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full'
        />
      </div>
    );
  }

  return <>{children}</>;
}

export default AuthButton;
