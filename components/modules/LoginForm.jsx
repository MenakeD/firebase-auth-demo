import InputTag from '../common/InputTag'
import Button from '../common/Button'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ForgotPassword } from './ForgotPassword'
import { AiFillEye } from 'react-icons/ai'

const LoginForm = ({ setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [forgotPassword, setForgotPassword] = useState(false)

  const router = useRouter()

  const { login, signInWithGoogle } = useAuth()

  const [error, setError] = useState('')

  const [passwordType, setPasswordType] = useState('password')

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

  const handleGoogleSignin = async () => {
    try {
      await signInWithGoogle()
      router.push('/home')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className=' '>
      {!forgotPassword ? (
        <div>
          <form
            className='py-4 px-6 bg-white rounded-lg shadow'
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className='text-2xl font-medium pt-2 pb-4 text-center'>
              Login
            </h1>
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
              <div className='relative'>
                <InputTag
                  width='w-72 sm:w-96'
                  placeholder='Password'
                  name='password'
                  type={passwordType}
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
                <div
                  className='absolute right-0 top-0 my-4 mx-3 '
                  onMouseDown={() => {
                    setPasswordType('text')
                  }}
                  onMouseUp={() => {
                    setPasswordType('password')
                  }}
                >
                  <AiFillEye className='text-xl text-gray-400 cursor-pointer' />
                </div>
              </div>
              <div className='pb-2 pt-4'>
                <Button type='submit'>Login</Button>
              </div>
              <div className='flex justify-end pt-2'>
                <p
                  className='text-blue-500 font-medium cursor-pointer text-sm'
                  onClick={() => setForgotPassword(true)}
                >
                  Forgot password ?
                </p>
              </div>
            </div>
            <div className='py-4'>
              <Button
                justify=''
                padding=''
                wrapperStyles='overflow-hidden'
                onClick={handleGoogleSignin}
              >
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
      ) : (
        <ForgotPassword
          setIsLogin={setIsLogin}
          setForgotPassword={setForgotPassword}
        />
      )}

      {error && (
        <section className='fixed bottom-0 right-8 py-4 px-6 bg-red-300 rounded-lg shadow my-6 flex justify-center '>
          <p>{error}</p>
        </section>
      )}
    </div>
  )
}

export default LoginForm
