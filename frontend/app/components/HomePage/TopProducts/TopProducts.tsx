// Components
import TopProductsCategories from "./components/Category/Categories";

// API
import { APIURLs } from "@/app/lib/constants/API.URLs";

async function TopProducts() {
  const res = await fetch(APIURLs.GetProducts);
  const data: Product[] = await res.json();

  return (
    <section className='flex flex-col gap-6 lg:gap-0 items-center mb-2 mt-10 lg:mt-0'>
      <span className='text-[20px] lg:text-[34px] text-primary font-[500]'>
        محصولی که میخوای اینجاست!
      </span>

      {/* Full Part */}
      <div className='w-full '>
        {/* Background Part */}
        <div className='relative w-full h-[400px] flex flex-col items-center bg-[#dce6ff] rounded-b-[15px] rounded-t-[50px] overflow-hidden'>
          <div className='hidden lg:block absolute top-[-1950px] w-[2830px] h-[2000px] bg-mainBg rounded-full'></div>
        </div>

        {/* Content Part */}
        <div className='relative top-[-42vh] w-full max-h-[250px] flex flex-col items-center'>
          <span className='text-[20px] text-center lg:text-[24px] text-primary font-[300]'>
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
