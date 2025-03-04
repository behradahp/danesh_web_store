import Image from "next/image";
import Link from "next/link";

// Components
import Button from "@/app/components/Common/Button";

// Icons & Images
import compareIcon from "@/app/assets/icons/common/compare-icon.svg";
import compareImage from "@/app/assets/images/compare-robot.png";

function CompareBanner() {
  return (
    <div className='w-[100%] xl:w-[35%] flex justify-between items-center bg-white rounded-[10px] shadow-header p-2 pl-4'>
      <div className='flex items-center gap-2'>
        <Link href='/product-compare'>
          <Button
            text='شروع مقایسه'
            buttonStyles='bg-secondary min-h-full'
            textStyles='text-mainBg  text-[12px] 2xl:text-[14px]'
            startIcon={
              <Image src={compareIcon} alt='Compare' width={27} height={27} />
            }
          />
        </Link>

        <span className='text-[12px] 2xl:text-[14px] text-[rgb(153,154,159)] font-[600]'>
          دستیار شما برای خریدی بهتر و مطمئن تر
        </span>
      </div>

      <Image src={compareImage} alt='Compare' width={45} height={45} />
    </div>
  );
}

export default CompareBanner;
