import InputTag from '../common/InputTag'
import Button from '../common/Button'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'
import { useRouter } from 'next/router'

const LoginForm = ({ setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const { login } = useAuth()

  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    const { email, password } = data
    setError('')
    try {
      await login(email, password)
      router.push('/home')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className=' '>
      <form
        className='py-4 px-6 bg-white rounded-lg shadow'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-2xl font-medium pt-2 pb-4 text-center'>Login</h1>
        <div className='border-b-2 border-gray-300 pb-4 '>
          <InputTag
            width='w-72 sm:w-96'
            placeholder='Email'
            type='email'
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
          <div className='pb-2 pt-4'>
            <Button type='submit'>Login</Button>
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
      {error && (
        <section className='fixed bottom-0 right-8 py-4 px-6 bg-red-300 rounded-lg shadow my-6 flex justify-center '>
          <p>{error}</p>
        </section>
      )}
    </div>
  )
}

export default LoginForm
