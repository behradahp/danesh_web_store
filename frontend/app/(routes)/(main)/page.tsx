// Components
import HomeBanner from "@/app/components/HomePage/Banner";
import ShopServices from "@/app/components/HomePage/ShopServices";
import TopProducts from "@/app/components/HomePage/TopProducts";

function HomePage() {
  return (
    <main className='px-7'>
      <HomeBanner />
      <ShopServices />
      <TopProducts />
    </main>
  );
}

export default HomePage;
