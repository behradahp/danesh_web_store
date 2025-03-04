// Components
import HomeBanner from "@/app/components/HomePage/Banner";
import ShopServices from "@/app/components/HomePage/ShopServices";
import TopProducts from "@/app/components/HomePage/TopProducts/TopProducts";

function HomePage() {
  return (
    <main className='p-2 lg:px-7'>
      <HomeBanner />
      <ShopServices />
      <TopProducts />
    </main>
  );
}

export default HomePage;
