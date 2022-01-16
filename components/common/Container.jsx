const Container = ({ children }) => {
  return (
    <section className={`max-w-7xl mx-auto container px-4 sm:px-6 md:px-8`}>
      {children}
    </section>
  )
}

export default Container
