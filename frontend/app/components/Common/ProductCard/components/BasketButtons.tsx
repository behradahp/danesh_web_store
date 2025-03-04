"use client";

import Image from "next/image";

// Components
import Button from "@/app/components/Common/Button";

// Icons
import basketIcon from "@/app/assets/icons/product-icons/basket-icon.svg";
import addIcon from "@/app/assets/icons/product-icons/add-icon.svg";
import minusIcon from "@/app/assets/icons/product-icons/minus-icon.svg";

// Context
import { useStore } from "@/app/lib/store/store";
import { BasketActionTypes } from "@/app/lib/store/basket/basket-reducer";

// Basket Utils
import {
  calculateProductCount,
  isProductInBasket,
} from "@/app/lib/utils/basket-functions";

function BasketButtons({ product }: { product: Product }) {
  const { store, dispatch } = useStore();

  if (!isProductInBasket(store.basket, product.id)) {
    return (
      <Button
        text='افزودن به سبد'
        startIcon={<Image src={basketIcon} alt='star' width={25} height={25} />}
        buttonStyles='bg-secondary py-2 px-4 gap-[8px]'
        textStyles='text-mainBg text-[12px]'
        onClick={() =>
          dispatch({ type: BasketActionTypes.Add, payload: product })
        }
      />
    );
  }

  return (
    <div className='flex items-center gap-2'>
      <button
        className='cursor-pointer'
        onClick={() =>
          dispatch({ type: BasketActionTypes.Increase, payload: product })
        }
      >
        <Image src={addIcon} alt='star' width={35} height={35} />
      </button>

      <span>
        {calculateProductCount(store.basket, product.id).toLocaleString("fa")}
      </span>
      <button
        className='cursor-pointer'
        onClick={() =>
          dispatch({ type: BasketActionTypes.Decrease, payload: product })
        }
      >
        <Image src={minusIcon} alt='star' width={35} height={35} />
      </button>
    </div>
  );
}

export default BasketButtons;
