export default function MainPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='relative w-full h-[100vh] flex justify-center items-center overflow-hidden'>
      <article className='py-6 px-12 bg-secondary rounded-2xl'>
        {children}
      </article>

      <div className='absolute top-[60%] z-[-1] w-[200%] h-[70%] bg-primary rotate-[-8deg] rounded-full'></div>
    </section>
  );
}
