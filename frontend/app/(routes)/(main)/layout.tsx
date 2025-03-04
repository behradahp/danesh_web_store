// Components
import Header from "@/app/components/Layout/Header/Header";

export default function MainPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full min-h-[100vh] flex flex-col'>
      <Header />
      {children}
    </div>
  );
}
