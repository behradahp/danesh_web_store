// Components
import AdminMainPageStatistics from "@/app/components/AdminPage/MainPage/Statistics";
import Calendar from "@/app/components/Common/Calendar/Calendar";

function AdminPanelPage() {
  return (
    <div className='w-full mt-[20px]'>
      <AdminMainPageStatistics />
      <section className='mt-10'>
        <Calendar />
      </section>
    </div>
  );
}

export default AdminPanelPage;
