import { RiLoader5Fill } from 'react-icons/ri'
const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <RiLoader5Fill className='text-8xl text-blue-600 animate-spin an' />
    </div>
  )
}

export default Loader
