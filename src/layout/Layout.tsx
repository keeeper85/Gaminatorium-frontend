interface LayoutProps {
  children: JSX.Element[] | JSX.Element
}

function Layout({children}: LayoutProps) {
  return (
    <>
      <header>
      </header>

      <main className='flex'>

        <section className='w-ful'>
          {children}
        </section>

      </main>
    </>
  );
}

export default Layout;
