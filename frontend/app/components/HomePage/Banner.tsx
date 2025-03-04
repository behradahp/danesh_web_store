import Image from "next/image";

// Components
import Button from "@/app/components/Common/Button";

// Images & Icons
import bannerImage from "@/app/assets/images/home-banner.png";
import arrowIcon from "@/app/assets/icons/common/banner-arrow-icon.svg";
import Link from "next/link";

function HomeBanner() {
  return (
    <div className='relative w-full'>
      <Image
        src={bannerImage}
        alt='Banner'
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: "100%", height: "auto", borderRadius: "15px" }}
      />

      <Link href='/products'>
        <Button
          text='مشاهده و خرید'
          buttonStyles='absolute top-[80%] left-[25%] bg-white py-1 lg:px-5'
          textStyles='text-[10px] lg:text-[14px]'
          endIcon={
            <Image
              src={arrowIcon}
              alt='arrow icon'
              width={0}
              height={0}
              sizes='100vw'
              className='w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]'
            />
          }
        />
      </Link>
    </div>
  );
}

export default HomeBanner;
