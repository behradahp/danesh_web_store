import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Components
import AuthButton from "./AuthButtons";
import Button from "@/app/components/Common/Button";

// Icons
import mobileMenuIcon from "@/app/assets/icons/header-icons/mobile-menu-icon.svg";
import closeIcon from "@/app/assets/icons/header-icons/close-icon.svg";
import authIcon from "@/app/assets/icons/common/auth-icon.svg";

// Constants
import { pagesLinks } from "@/app/lib/constants/page-links";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className='cursor-pointer'
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        <Image
          src={mobileMenuIcon}
          alt='mobile menu'
          width={35}
          height={35}
          className='lg:hidden'
        />
      </button>

      <aside
        className={`${
          isMenuOpen ? "w-[200px] opacity-[1]" : "w-[0px] opacity-0"
        } fixed left-0 top-0 z-50 flex flex-col p-3 lg:hidden h-[100vh] bg-white shadow-menu transition-all duration-500`}
      >
        <button
          className='cursor-pointer'
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <Image
            src={closeIcon}
            alt='mobile menu'
            width={35}
            height={35}
            className='lg:hidden'
          />
        </button>

        <div className=' h-full flex flex-col gap-7 mt-10 '>
          <div className='flex justify-center mb-5'>
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
          {pagesLinks.map((link) => {
            return (
              <Link
                onClick={() => setIsMenuOpen(false)}
                key={link.title}
                href={link.href}
                className='flex pr-[15%] items-center gap-2 hover:bg-info-light transition-all px-2 rounded-[10px]'
              >
                <Image src={link.icon} alt='Page Icon' width={30} height={30} />
                <span className='text-[16px] 2xl:text-[16px]'>
                  {link.title}
                </span>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}

export default MobileMenu;
