import Image from "next/image";
import Link from "next/link";

// Components
import Button from "@/app/components/Common/Button";

// Constants
import { pagesLinks } from "@/app/lib/constants/page-links";

// Icons
import menuIcon from "@/app/assets/icons/common/menu-icon.svg";

function PageLinks() {
  return (
    <div className='w-[65%] flex justify-between bg-white rounded-[10px] shadow-header py-2 px-5'>
      <Button
        text='دسته بندی ها'
        buttonStyles='bg-primary'
        textStyles='text-mainBg text-[14px]'
        startIcon={<Image src={menuIcon} alt='Menu' width={30} height={30} />}
      />

      {pagesLinks.map((link) => {
        return (
          <Link
            key={link.title}
            href={link.href}
            className='flex items-center gap-2 hover:bg-info-light transition-all px-2 rounded-[10px]'
          >
            <Image src={link.icon} alt='Page Icon' width={30} height={30} />
            <span>{link.title}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default PageLinks;
