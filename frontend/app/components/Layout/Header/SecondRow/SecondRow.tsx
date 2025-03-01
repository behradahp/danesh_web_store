// Components
import CompareBanner from "./components/CompareBanner";
import PageLinks from "./components/PagesLinks";

function HeaderSecondRow() {
  return (
    <section className='w-full flex gap-2'>
      <PageLinks />
      <CompareBanner />
    </section>
  );
}

export default HeaderSecondRow;
