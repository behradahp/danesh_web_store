"use client";

import Image from "next/image";

// Icons
import outlinedBookmarkIcon from "@/app/assets/icons/product-icons/bookmark-outlined.svg";
import filledBookmarkIcon from "@/app/assets/icons/product-icons/bookmark-filled.svg";

// Context
import { useStore } from "@/app/lib/store/store";

// Saved utils
import { isProductSaved } from "@/app/lib/utils/saved-products-functions";
import { SavedActionTypes } from "@/app/lib/store/saved/saved-reducer";

function SavedButton({ product }: { product: Product }) {
  const { store, dispatch } = useStore();
  return (
    <button
      className='bg-white rounded-lg p-1 cursor-pointer'
      onClick={() =>
        dispatch({ type: SavedActionTypes.Change, payload: product })
      }
    >
      <Image
        src={
          isProductSaved(store.saved, product.id)
            ? filledBookmarkIcon
            : outlinedBookmarkIcon
        }
        alt='star'
        width={25}
        height={25}
      />
    </button>
  );
}

export default SavedButton;
