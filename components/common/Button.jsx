const Button = ({
  children,
  color = 'bg-blue-600 hover:bg-blue-500',
  justify = 'justify-center ',
  padding = 'py-2 px-2',
  wrapperStyles = '',
}) => {
  return (
    <button
      className={`w-full ${wrapperStyles} ${padding} flex ${justify} ${color} text-white text-lg rounded-md shadow shadow-blue-500/50  transition-all duration-300 ease-in`}
    >
      {children}
    </button>
  )
}

export default Button
