// Constants
import { shopServices } from "@/app/lib/constants/shop-services";
import Image from "next/image";

const bgCircleEffects = {
  xs: <div className='w-[10px] h-[10px] rounded-full bg-[#d0d0ec]'></div>,
  sm: <div className='w-[20px] h-[20px] rounded-full bg-[#d6d2fd]'></div>,
  md: <div className='w-[30px] h-[30px] rounded-full bg-[#d6e5ff]'></div>,
  xl: <div className='w-[50px] h-[50px] rounded-full bg-[#e9e7fe]'></div>,
};
function ShopServices() {
  return (
    <section className='w-full flex justify-between my-16'>
      {shopServices.map((service) => {
        return (
          <div key={service.title} className='flex items-center gap-2'>
            <div className='relative w-[80px] h-[80px] flex justify-center items-center '>
              <Image
                src={service.icon}
                alt='Service icon'
                width={60}
                height={60}
              />
              <div className='absolute z-[-1] top-1 left-2'>
                {bgCircleEffects.xs}
              </div>
              <div className='absolute z-[-1] bottom-3 left-1'>
                {bgCircleEffects.sm}
              </div>
              <div className='absolute z-[-1] bottom-1 right-0'>
                {bgCircleEffects.md}
              </div>
              <div className='absolute z-[-1] top-1 right-4'>
                {bgCircleEffects.xl}
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <span className='text-[20px] font-[600] text-primary'>
                {service.title}
              </span>
              <span className='text-[14px] font-[300] text-primary'>
                {service.description}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ShopServices;
