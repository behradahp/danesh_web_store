import React from "react";

// Component
import ProductCard from "@/app/components/Common/ProductCard/ProductCard";

interface IProductCardSliderProps {
  products: Product[];
  translate: string;
}

const ProductCardSlider = React.forwardRef<
  HTMLDivElement,
  IProductCardSliderProps
>((props, ref) => {
  return (
    <div ref={ref} className='flex-grow flex gap-3 overflow-hidden'>
      {props.products.map((product) => {
        return (
          <div
            key={product.id}
            style={{ transform: props.translate }}
            className='transition-all'
          >
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
});

export default ProductCardSlider;
