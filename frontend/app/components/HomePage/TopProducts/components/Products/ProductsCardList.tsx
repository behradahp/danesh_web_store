import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Components
import ProductCardSlider from "./ProductCardSlider";

// Icons
import arrowIcon from "@/app/assets/icons/common/slider-arrow-icon.svg";

let maxSliderIndex = 0;

function ProductsCardList({ products }: { products: Product[] }) {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      const {
        clientWidth,
      }: {
        clientWidth: number;
      } = ref.current!;

      console.log(products.length);
      maxSliderIndex = products.length - Math.floor(clientWidth / 300);
      console.log(maxSliderIndex);
    }
  }, [ref, products]);

  return (
    <div className='w-full flex justify-between items-center gap-3 px-5'>
      <button
        className='flex-shrink-0 cursor-pointer'
        onClick={() => setSliderIndex(sliderIndex === 0 ? 0 : sliderIndex - 1)}
      >
        <Image src={arrowIcon} alt='arrow' width={40} height={40} />
      </button>
      <ProductCardSlider
        ref={ref}
        products={products}
        translate={`TranslateX(${312 * sliderIndex}px)`}
      />
      <button
        className='flex-shrink-0 cursor-pointer'
        onClick={() =>
          setSliderIndex(
            sliderIndex === maxSliderIndex ? sliderIndex : sliderIndex + 1
          )
        }
      >
        <Image
          src={arrowIcon}
          alt='arrow'
          width={40}
          height={40}
          className='rotate-180'
        />
      </button>
    </div>
  );
}

export default ProductsCardList;
