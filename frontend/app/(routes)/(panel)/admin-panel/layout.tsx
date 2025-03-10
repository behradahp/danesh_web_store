// Components
import AdminPanelHeader from "@/app/components/AdminPage/AdminLayout/Header/Header";
import AdminPanelSideMenu from "@/app/components/AdminPage/AdminLayout/SideMenu/SideMenu";

function AdminPanelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='w-full h-[100vh] flex p-2'>
      <AdminPanelSideMenu />
      <section className='flex-grow h-full flex flex-col gap-2 rounded-[15px]'>
        <AdminPanelHeader />
        <section className='w-full flex-grow rounded-[15px] p-2 overflow-auto'>
          {children}
        </section>
      </section>
    </main>
  );
}

export default AdminPanelLayout;
