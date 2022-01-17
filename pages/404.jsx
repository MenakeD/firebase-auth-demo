import { useRouter } from 'next/router'
import Button from '../components/common/Button'

const PageNotFoundPage = () => {
  const router = useRouter()
  return (
    <div className='flex h-screen justify-center items-center'>
      <div>
        <section className=' w-72 sm:w-96 py-4 px-6 bg-red-300 rounded-lg shadow text-xl  flex justify-center space-x-1.5  '>
          <p className='font-medium'>404: </p>
          <p>Page Not Found</p>
        </section>
        <div className='my-6'>
          <Button
            color='bg-green-500 hover:bg-green-400 '
            onClick={() => {
              router.back()
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFoundPage
