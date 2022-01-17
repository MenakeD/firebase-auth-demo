import Head from 'next/head'

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className='min-h-screen selection:select-none cursor-default'>
        {children}
      </main>
    </>
  )
}

export default Layout
