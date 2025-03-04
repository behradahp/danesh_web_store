import Image from "next/image";

// Icon
import shopIcon from "@/app/assets/icons/common/shop-icon.svg";
import linksGoIcon from "@/app/assets/icons/admin-panel/links-go-icon.svg";

// Constants
import { adminLinks } from "@/app/lib/constants/admin-links";
import Link from "next/link";

function AdminPanelSideMenu() {
  return (
    <section className='flex-shrink-0 w-[300px] h-full bg-white shadow-header rounded-[15px] p-2 ml-2'>
      {/* Shop Icon */}
      <div className='flex items-center gap-5 mb-10'>
        <Image
          src={shopIcon}
          alt='Shop Icon'
          width={0}
          height={0}
          sizes='100vw'
          className='w-[80px] h-[80px]'
        />

        <div className='flex flex-col gap-1'>
          <span className='text-[14px] lg:text-[20px] font-[700] w-[50px] lg:w-auto'>
            پنل ادمین
          </span>
          <span className='text-[14px] lg:text-[12px] font-[300] w-[50px] lg:w-auto'>
            دانــــش کامپیـــــوتر
          </span>
        </div>
      </div>

      {/* Links */}
      <div className='flex flex-col gap-4'>
        {adminLinks.map((item) => {
          return (
            <div
              key={item.title}
              className='relative flex items-center gap-2 p-3 rounded-md'
            >
              <Image src={item.icon} alt='icon' width={30} height={30} />
              <span>{item.title}</span>
              <Link href={item.href}>
                <div className='absolute inset-0 w-full h-full flex justify-end items-center opacity-[0.001] pl-20 hover:opacity-100 hover:pl-0 transition-all'>
                  <Image src={linksGoIcon} alt='icon' width={30} height={30} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AdminPanelSideMenu;
