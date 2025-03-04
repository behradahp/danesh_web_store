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
      <div className='flex items-center gap-4'>
        <div className='flex flex-col gap-2'>
          <span className='text-[14px] font-[400]'>
            {store.auth.userInfo.first_name || "نام شما را نمیدانیم :("}
          </span>
          <span className='text-[12px] font-[400] text-primary'>
            {store.auth.userInfo.phone || "۰۹۰۱۵۸۲۰۵۷۱"}
          </span>
        </div>

        <Image
          src={avatar}
          alt='Avatar'
          width={40}
          height={40}
          className='rounded-full'
        />
      </div>
    );
  }

  return <>{children}</>;
}

export default AuthButton;
