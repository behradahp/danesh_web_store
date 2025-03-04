import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Components
import ProductCardSlider from "./ProductCardSlider";

// Icons
import arrowIcon from "@/app/assets/icons/common/slider-arrow-icon.svg";

function ProductsCardList({ products }: { products: Product[] }) {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [maxSliderIndex, setMaxSliderIndex] = useState<number>(0);

  const [buttonDisabled, setbuttonDisabled] = useState<{
    next: boolean;
    prev: boolean;
  }>({
    next: false,
    prev: true,
  });

  const ref = useRef(null);

  useEffect(() => {
    if (!ref) return;

    setSliderIndex(0);
    setbuttonDisabled({
      next: false,
      prev: true,
    });

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;

      const diff = products.length - Math.floor(width / 300);

      if (diff <= 0) {
        setMaxSliderIndex(0);
        setbuttonDisabled({
          next: true,
          prev: true,
        });
      } else {
        setMaxSliderIndex(diff);
      }
    });

    observer.observe(ref.current!);

    return () => observer.disconnect();
  }, [ref, products]);

  const changeSliderIndex = (newValue: number) => {
    let newCurrent = 0;

    if (newValue == 0) {
      newCurrent = 0;
      setbuttonDisabled({ next: false, prev: true });
    } else if (newValue == maxSliderIndex) {
      newCurrent = maxSliderIndex;
      setbuttonDisabled({ next: true, prev: false });
    } else {
      newCurrent = newValue;
      setbuttonDisabled({ next: false, prev: false });
    }

    setSliderIndex(newCurrent);
  };

  return (
    <div className='w-full flex justify-between items-center gap-3 px-5'>
      {buttonDisabled.prev ? (
        <div className='w-[40px] h-[40px]'></div>
      ) : (
        <button
          className='flex-shrink-0 cursor-pointer'
          onClick={() => changeSliderIndex(sliderIndex - 1)}
        >
          <Image src={arrowIcon} alt='arrow' width={40} height={40} />
        </button>
      )}

      <ProductCardSlider
        ref={ref}
        products={products}
        translate={`TranslateX(${312 * sliderIndex}px)`}
      />

      {buttonDisabled.next ? (
        <div className='w-[40px] h-[40px]'></div>
      ) : (
        <button
          className='flex-shrink-0 cursor-pointer'
          onClick={() => changeSliderIndex(sliderIndex + 1)}
        >
          <Image
            src={arrowIcon}
            alt='arrow'
            width={40}
            height={40}
            className='rotate-180'
          />
        </button>
      )}
    </div>
  );
}

export default ProductsCardList;
