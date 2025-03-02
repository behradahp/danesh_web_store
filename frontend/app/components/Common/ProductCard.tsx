import Image from "next/image";

// Components
import Button from "./Button";

// Images
import starIcon from "@/app/assets/icons/product-icons/star-icon.svg";
import outlinedBookmarkIcon from "@/app/assets/icons/product-icons/bookmark-outlined.svg";
import filledBookmarkIcon from "@/app/assets/icons/product-icons/bookmark-filled.svg";
import basketIcon from "@/app/assets/icons/product-icons/basket-icon.svg";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className='flex-shrink-0 w-[300px] h-[400px] flex flex-col pt-3 pb-2 px-3 bg-product-card rounded-[10px]'>
      <Image
        src={product.image}
        alt='Product Image'
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: "100%", height: "250px" }}
        className='rounded-[6px]'
      />

      {/* Title + (Bookmark & Rating) */}
      <div className='w-full flex justify-between items-center mt-2 mb-10'>
        <span className='text-[#525255] font-[400]'>
          محصول امتحانی {product.id.toLocaleString("fa")}
        </span>

        {/* Bookmark & Rating */}
        <div className='flex gap-2'>
          <div className='flex items-center gap-1 bg-white rounded-lg p-1'>
            <span className='relative top-[2px] text-[14px]'>
              {product.rating.rate}/5
            </span>
            <Image src={starIcon} alt='star' width={25} height={25} />
          </div>

          <button className='bg-white rounded-lg p-1 cursor-pointer'>
            <Image
              src={
                product.id % 3 === 0 ? filledBookmarkIcon : outlinedBookmarkIcon
              }
              alt='star'
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>

      {/* Add to Cart + Price */}
      <div className='flex-grow w-full flex justify-between items-center'>
        <Button
          text='افزودن به سبد'
          startIcon={
            <Image src={basketIcon} alt='star' width={25} height={25} />
          }
          buttonStyles='bg-secondary py-2 px-4 gap-[8px]'
          textStyles='text-mainBg text-[12px]'
        />

        <span className='text-[#525255] font-[600]'>
          {(10500000).toLocaleString("fa")} تومان
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
