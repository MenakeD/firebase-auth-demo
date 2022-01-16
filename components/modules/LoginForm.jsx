import InputTag from '../common/InputTag'
import Button from '../common/Button'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form'

const LoginForm = ({ setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className=' '>
      <form
        className='py-4 px-6 bg-white rounded-lg shadow'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-2xl font-medium pt-2 pb-4 text-center'>Login</h1>
        <div className='border-b-2 border-gray-200 pb-4 '>
          <InputTag
            width='w-72 sm:w-96'
            placeholder='Email'
            name='email'
            register={register}
            errors={errors}
            validation={{
              required: '*Required',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Email must be a valid email',
              },
            }}
          />
          <InputTag
            width='w-72 sm:w-96'
            placeholder='Password'
            name='password'
            register={register}
            errors={errors}
            validation={{
              required: '*Required',
              minLength: {
                value: 6,
                message: '*Min 6 charcters',
              },
            }}
          />
          <div className='py-2'>
            <Button>Login</Button>
          </div>
        </div>
        <div className='py-4'>
          <Button justify='' padding='' wrapperStyles='overflow-hidden'>
            <div className='flex space-x-10 sm:space-x-20 items-center'>
              <div className='bg-white h-auto py-1 px-2'>
                <FcGoogle className='text-4xl' />
              </div>

              <p className='py-1'>Sign in with Google</p>
            </div>
          </Button>
        </div>
      </form>
      <section className='py-4 px-6 bg-white rounded-lg shadow my-6 flex justify-center space-x-2'>
        <p>Don&apos;t have an account?</p>
        <p
          className='hover:underline text-blue-600 cursor-pointer font-medium transition-all ease-in duration-200'
          onClick={() => {
            setIsLogin(false)
          }}
        >
          Sign up
        </p>
      </section>
    </div>
  )
}

export default LoginForm
