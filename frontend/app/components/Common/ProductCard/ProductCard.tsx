import Image from "next/image";

// Components
import SavedButton from "./components/SavedButton";

// Images
import starIcon from "@/app/assets/icons/product-icons/star-icon.svg";
import BasketButtons from "./components/BasketButtons";

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

          <SavedButton product={product} />
        </div>
      </div>

      {/* Add to Cart + Price */}
      <div className='flex-grow w-full flex justify-between items-center'>
        <BasketButtons product={product} />

        <span className='text-[#525255] font-[600]'>
          {(10500000).toLocaleString("fa")} تومان
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
