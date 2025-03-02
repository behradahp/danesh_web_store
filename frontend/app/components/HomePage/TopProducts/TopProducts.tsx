// Components
import TopProductsCategories from "./components/Category/Categories";

// API
import { APIURLs } from "@/app/lib/constants/API.URLs";

async function TopProducts() {
  const res = await fetch(APIURLs.GetProducts);
  const data: Product[] = await res.json();

  return (
    <section className='flex flex-col items-center mb-20'>
      <span className='text-[34px] text-primary font-[500]'>
        محصولی که میخوای اینجاست!
      </span>

      {/* Full Part */}
      <div className='w-full'>
        {/* Background Part */}
        <div className='relative w-full h-[400px] flex flex-col items-center bg-[#dce6ff] rounded-b-[15px] rounded-t-[50px] overflow-hidden'>
          <div className='absolute top-[-1960px] w-[2830px] h-[2000px] bg-mainBg rounded-full'></div>
        </div>

        {/* Content Part */}
        <div className='relative top-[-330px] w-full flex flex-col items-center'>
          <span className='text-[24px] text-primary font-[300]'>
            میتونی هر دسته بندی که میخوای رو انتخاب کنی تا محصول مورد نظرتو پیدا
            کنی.
          </span>

          <TopProductsCategories products={data} />
        </div>
      </div>
    </section>
  );
}

export default TopProducts;
