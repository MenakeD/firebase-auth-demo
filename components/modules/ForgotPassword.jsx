import Button from '../common/Button'
import { useAuth } from '../../hooks/useAuth'
import InputTag from '../common/InputTag'
import { useForm } from 'react-hook-form'
import { useState } from 'react/cjs/react.development'

export const ForgotPassword = ({ setForgotPassword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { resetPassword } = useAuth()
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [email, setEmail] = useState('')

  const onSubmit = async (data) => {
    try {
      await resetPassword(data.email)
      setEmail(data.email)
      setIsEmailSent(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {!isEmailSent ? (
        <form
          className='py-4 px-6 bg-white rounded-lg shadow'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className='text-2xl font-medium pt-2 pb-4 text-center'>
            Forgot Password
          </h1>
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
          <div className='mt-6'>
            <Button type='submit'> Reset Password</Button>
          </div>
          <div>
            <p
              className='pt-4 text-sm text-blue-500 font-medium cursor-pointer flex justify-end'
              onClick={() => {
                setForgotPassword(false)
              }}
            >
              Go back
            </p>
          </div>
        </form>
      ) : (
        <div>
          <div className='py-8 px-6 bg-white rounded-lg shadow w-72 sm:w-96'>
            <h3 className='text-xl text-center'>An email has been sent to </h3>
            <p className='text-lg my-2 text-blue-700 text-center font-medium'>
              {email}
            </p>
          </div>
          <div className='my-4'>
            <Button
              onClick={() => {
                setForgotPassword(false)
              }}
            >
              Go Back
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
