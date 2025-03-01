function TopProducts() {
  return (
    <section className='flex flex-col items-center mb-20'>
      <span className='text-[34px] text-primary font-[500]'>
        محصولی که میخوای اینجاست!
      </span>

      <div className='w-full h-[1000px]'>
        <div className='relative w-full h-[400px] flex flex-col items-center bg-[#dce6ff] rounded-b-[15px] rounded-t-[50px] overflow-hidden'>
          <div className='absolute top-[-1960px] w-[2830px] h-[2000px] bg-mainBg rounded-full'></div>
        </div>

        <div className='relative top-[-330px] w-full flex flex-col items-center'>
          <span className='text-[24px] text-primary font-[300]'>
            میتونی هر دسته بندی که میخوای رو انتخاب کنی تا محصول مورد نظرتو پیدا
            کنی.
          </span>
        </div>
      </div>
    </section>
  );
}

export default TopProducts;
